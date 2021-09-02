import { Renderer } from './renderer'
import { Path, Svg } from './svg'
import { throttle } from './throttle'
import { PencilHandler } from './handler'
import { ResizeHandler } from './resize'
import { BasicPathFactory } from './pathFactory'
import { isAlmostSameNumber } from './utils'
import { download } from './download'
import type {
  DownloadOption,
  DrawEventHandler,
  DrawingOption,
  PointObject,
  ResizeEventHandler,
  ResizeHandlerOption,
  PathFactory,
} from './types'

export class SvgDrawing<
  S extends Svg,
  P extends PathFactory,
  RN extends Renderer,
  H extends DrawEventHandler,
  RS extends ResizeEventHandler
> {
  /**
   * throttle delay
   * @deprecated
   */
  public delay: number

  private _drawPath: Path | null
  private _drawPoints: PointObject[]
  private _drawMoveThrottle: this['drawMove']
  constructor(
    public svg: S,
    public pathFactory: P,
    public renderer: RN,
    public handler: H,
    public resizeListener: RS,
    { delay }: Required<Pick<DrawingOption, 'delay'>>
  ) {
    /**
     * Setup Config
     */
    this.delay = delay
    /**
     * Setup property
     */
    this._drawPath = null
    this._drawPoints = []

    /**
     * Setup ResizeHandler
     */
    this._resize = this._resize.bind(this)
    this.resizeListener.resize = this._resize.bind(this)
    /**
     * Setup EventDrawHandler
     */
    this.drawStart = this.drawStart.bind(this)
    this.drawMove = this.drawMove.bind(this)
    this._drawMoveThrottle = throttle(this.drawMove, this.delay)
    this.drawEnd = this.drawEnd.bind(this)

    this.handler.setHandler({
      drawStart: this.drawStart,
      drawMove: this._drawMoveThrottle,
      drawEnd: this.drawEnd,
    })

    /**
     * Start exec
     */
    this.handler.on()
    this.resizeListener.on()
  }

  public update() {
    this.renderer.update(this.svg.toJson())
  }
  public clear(): Path[] {
    const paths = this.svg.paths
    this.svg.paths = []
    this.update()
    return paths
  }

  public undo(): Path | undefined {
    const path = this.svg.paths.pop()
    this.update()
    return path
  }

  public changeDelay(delay: number): void {
    this.delay = delay
    this._drawMoveThrottle = throttle(this.drawMove, this.delay)
    this.handler.setHandler({
      drawStart: this.drawStart,
      drawMove: this._drawMoveThrottle,
      drawEnd: this.drawEnd,
    })
  }

  public drawStart(): void {
    if (this._drawPath) return
    this._drawPath = this._createDrawPath()
    this.svg.addPath(this._drawPath)
  }

  public drawMove(po: PointObject): void {
    if (!this._drawPath) return
    this._addDrawPoint(po)
    this.update()
  }

  public switchPath() {
    const po = this._drawPath?.commands[
      this._drawPath.commands.length - 1
    ].point?.clone()
    if (!po) return
    this._drawPath = this._createDrawPath()
    this._addDrawPoint(po.toJson())
    this.svg.addPath(this._drawPath)
  }

  public drawEnd(): void {
    this._drawPath = null
    this.update()
  }

  private _createCommand() {
    if (!this._drawPath) return
    this._drawPath.commands = this.pathFactory.createCommand(this._drawPoints)
  }

  private _addDrawPoint(p4: PointObject) {
    this._drawPoints.push(p4)
    this._createCommand()
  }

  private _createDrawPath(): Path {
    // this._resize(this.el.getBoundingClientRect())
    this._drawPoints = []
    return this.pathFactory.create()
  }

  /**
   */
  private _resize({
    width,
    height,
  }: Parameters<ResizeHandlerOption['resize']>[0]) {
    if (isAlmostSameNumber(this.svg.width, width)) return

    this.svg.resize({ width, height })
    this.update()
  }

  public download(opt?: DownloadOption): void {
    download(this.svg, opt)
  }

  /**
   * @todo remove dummy handler
   */
  public static init(
    el: HTMLElement,
    {
      curve = true,
      close = false,
      delay = 0,
      penColor,
      penWidth,
      fill,
      background,
    }: DrawingOption
  ) {
    const { width, height } = el.getBoundingClientRect()

    const dummyHandler = () => undefined

    return new SvgDrawing<
      Svg,
      BasicPathFactory,
      Renderer,
      PencilHandler,
      ResizeHandler
    >(
      new Svg({ width, height, background }),
      new BasicPathFactory(
        {
          stroke: penColor ?? '#000',
          strokeWidth: penWidth || penWidth === 0 ? String(penWidth) : '1',
          fill: fill ?? 'none',
        },
        { curve, close }
      ),
      new Renderer(el, { background }),
      new PencilHandler(el),
      new ResizeHandler({
        el,
        resize: dummyHandler,
      }),
      { delay }
    )
  }
}

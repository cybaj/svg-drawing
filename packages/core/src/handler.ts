import { DrawingEventHandler } from './types'
import { getPassiveOptions } from './shared/getPassiveOptions'

export class Handler {
  /**
   * Remove EventList
   */
  private _clearEventList: Array<() => void>
  /**
   * addEventListener Options
   */
  private _listenerOption: ReturnType<typeof getPassiveOptions>
  /**
   * EventHandler
   */
  private _el: HTMLElement
  public end: DrawingEventHandler['end']
  public start: DrawingEventHandler['start']
  public move: DrawingEventHandler['move']
  public resize: DrawingEventHandler['resize']
  constructor(
    el: HTMLElement,
    { end, start, move, resize }: DrawingEventHandler
  ) {
    /**
     * Bind property from arguments.
     */
    this._el = el
    this.end = end
    this.start = start
    this.move = move
    this.resize = resize
    /**
     * Setup property.
     */
    this._clearEventList = []
    this._listenerOption = getPassiveOptions(false)
    /**
     * Setup methods
     */
    this._handleStart = this._handleStart.bind(this)
    this._handleMove = this._handleMove.bind(this)
    this._handleEnd = this._handleEnd.bind(this)
  }

  /**
   * Exec removeEventListener
   */
  public off() {
    this._clearEventList.map((fn) => fn())
    this._clearEventList = []
  }

  /**
   * Exec addEventListener
   */
  public on(): void {
    this.off()

    if (window.PointerEvent) {
      this._setupPointEventListener()
    } else {
      this._setupMouseEventListener()
    }
    if ('ontouchstart' in window) {
      this._setupTouchEventListener()
    }
  }
  private _handleStart(ev: TouchEvent | MouseEvent | PointerEvent) {
    ev.preventDefault()
    this.start()
  }

  private _handleEnd(ev: TouchEvent | MouseEvent | PointerEvent) {
    ev.preventDefault()
    this.end()
  }

  private _handleMove(ev: MouseEvent | PointerEvent | TouchEvent) {
    ev.preventDefault()
    if (ev instanceof TouchEvent) {
      const touch = ev.touches[0]
      this.move(touch.clientX, touch.clientY)
    } else {
      this.move(ev.clientX, ev.clientY)
    }
  }

  /**
   * Drawing PointerEvent
   */
  private _setupPointEventListener(): void {
    this._el.addEventListener(
      'pointerdown',
      this._handleStart,
      this._listenerOption
    )
    this._el.addEventListener(
      'pointermove',
      this._handleMove,
      this._listenerOption
    )
    this._el.addEventListener(
      'pointerleave',
      this._handleEnd,
      this._listenerOption
    )
    this._el.addEventListener(
      'pointercancel',
      this._handleEnd,
      this._listenerOption
    )
    window.addEventListener('pointerup', this._handleEnd, this._listenerOption)

    this._clearEventList.push(() => {
      this._el.removeEventListener('pointerdown', this._handleStart)
      this._el.removeEventListener('pointermove', this._handleMove)
      this._el.removeEventListener('pointerleave', this._handleEnd)
      this._el.addEventListener('pointercancel', this._handleEnd)
      window.removeEventListener('pointerup', this._handleEnd)
    })
  }
  /**
   * Drawing MouseEvent
   */
  private _setupMouseEventListener(): void {
    this._el.addEventListener(
      'mousedown',
      this._handleStart,
      this._listenerOption
    )
    this._el.addEventListener(
      'mousemove',
      this._handleMove,
      this._listenerOption
    )
    this._el.addEventListener(
      'mouseleave',
      this._handleEnd,
      this._listenerOption
    )
    this._el.addEventListener('mouseout', this._handleEnd, this._listenerOption)
    window.addEventListener('mouseup', this._handleEnd, this._listenerOption)

    this._clearEventList.push(() => {
      this._el.removeEventListener('mousedown', this._handleStart)
      this._el.removeEventListener('mousemove', this._handleMove)
      this._el.removeEventListener('mouseleave', this._handleEnd)
      this._el.removeEventListener('mouseout', this._handleEnd)
      window.removeEventListener('mouseup', this._handleEnd)
    })
  }

  /**
   * Drawing TouchEvent
   */
  private _setupTouchEventListener(): void {
    this._el.addEventListener(
      'touchstart',
      this._handleStart,
      this._listenerOption
    )
    this._el.addEventListener(
      'touchmove',
      this._handleMove,
      this._listenerOption
    )
    this._el.addEventListener('touchend', this._handleEnd, this._listenerOption)
    window.addEventListener(
      'touchcancel',
      this._handleEnd,
      this._listenerOption
    )
    this._clearEventList.push(() => {
      this._el.removeEventListener('touchstart', this._handleStart)
      this._el.removeEventListener('touchmove', this._handleMove)
      this._el.removeEventListener('touchend', this._handleEnd)
      window.removeEventListener('touchcancel', this._handleEnd)
    })
  }
}

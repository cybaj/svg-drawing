import type { Path } from '@svg-drawing/core'
export type AnimationOption = {
  ms: number
}
export type FrameAnimation = (origin: Path[], loopIndex?: number) => Path[]

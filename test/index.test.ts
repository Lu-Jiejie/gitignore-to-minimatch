import { describe, expect, it } from 'vitest'
import { minimatch } from 'minimatch'
import { gitignoreToMinimatch as to } from '../src/index'

function testMinimatch(path: string, patterns: string[]) {
  return patterns.some(p => minimatch(path, p))
}

describe('test', () => {
  it('should work', () => {
    const tM = testMinimatch

    expect(tM('/foo', to('foo'))).toBe(true)
    expect(tM('/foo', to('foo/'))).toBe(false)
    expect(tM('/foo', to('foo/**'))).toBe(false)
    expect(tM('/foo', to('foo/*'))).toBe(false)

    expect(tM('/foo/', to('foo'))).toBe(true)
    expect(tM('/foo/', to('foo/'))).toBe(true)
    expect(tM('/foo/', to('foo/**'))).toBe(true)
    expect(tM('/foo/', to('foo/*'))).toBe(true)

    expect(tM('/foo/bar.ts', to('bar.*'))).toBe(true)
    expect(tM('/foo/bar.ts', to('/bar.*'))).toBe(false)
    expect(tM('/foo/bar.ts', to('foo/bar.*'))).toBe(true)
    expect(tM('/foo/bar.ts', to('foo'))).toBe(true)

    expect(tM('/foo/bar', to('foo/bar'))).toBe(true)
    expect(tM('/foo/bar', to('foo/bar/'))).toBe(false)
    expect(tM('/foo/bar', to('foo/bar/**'))).toBe(false)
    expect(tM('/foo/bar', to('foo/bar/*'))).toBe(false)

    expect(tM('/bar.ts', to('*'))).toBe(true)
    expect(tM('/bar.ts', to('**'))).toBe(true)
    expect(tM('/bar.ts', to('*/'))).toBe(false)
    expect(tM('/bar.ts', to('**/'))).toBe(true)
  })
})

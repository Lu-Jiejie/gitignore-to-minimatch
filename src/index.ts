export function gitignoreToMinimatch(gitignorePattern: string): string[] {
  if (!gitignorePattern || gitignorePattern.startsWith('#'))
    return [gitignorePattern]

  if (gitignorePattern.startsWith('!'))
    return gitignoreToMinimatch(gitignorePattern.slice(1)).map(p => `!${p}`)

  let result = gitignorePattern

  // foo => **/foo ; foo/ => **/foo/
  const match1 = result.match(/^([^\/\s]+)\/?$/)
  if (match1 && match1[1] !== '*' && match1[1] !== '**')
    result = `**/${result}`

  // foo/bar => /foo/bar; **/foo => /**/foo
  if (!result.startsWith('/'))
    result = `/${result}`

  if (result.endsWith('/')) {
    return [`${result}**`]
  }
  else if (result.endsWith('/*')) {
    return [`${result.slice(0, -1)}**`]
  }
  else if (result.endsWith('/**')) {
    return [result]
  }
  else {
    return [
      `${result}`,
      `${result}/**`,
    ]
  }
}

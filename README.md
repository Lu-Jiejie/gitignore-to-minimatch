# gitignore-to-minimatch

[![NPM Version](https://img.shields.io/npm/v/gitignore-to-minimatch?style=flat&color=ccc)](https://www.npmjs.com/package/gitignore-to-minimatch)

Convert [gitignore](https://git-scm.com/docs/gitignore) patterns to [minimatch](https://github.com/isaacs/minimatch) patterns.

## Installation

```bash
npm install gitignore-to-minimatch
```

## Usage

```typescript
import { gitignoreToMinimatch } from 'gitignore-to-minimatch'

// provide a single gitignore pattern string, return an array of minimatch patterns
const minimatchPatterns = gitignoreToMinimatch('dist')
// => [ '/**/dist', '/**/dist/**' ]
```

## Why Array?

However, if you set the pattern `dist` in `.gitignore`, it may match the file `dist` and the directory `dist/` at the same time. A single minimatch pattern can't represent this situation.

## Motivation

In my another repository [ncreate](https://github.com/Lu-Jiejie/ncreate), I need to duplicate an existing local repository to a new one but ignore some files based on the `.gitignore` file. I found that there is a few differences between `.gitignore` and `minimatch` patterns. So...

## Reference

[gitignore documentation](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring)

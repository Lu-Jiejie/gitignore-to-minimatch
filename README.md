# gitignore-to-minimatch

[![npm version][npm-version-badge]][npm-version-href]
[![minzip][minzip-badge]][minzip-href]
[![jsdocs][jsdocs-badge]][jsdocs-href]
[![license][license-badge]][license-href]

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

For the result `['/**/dist', '/**/dist/**']`, `/**/dist` matches the file or directory `dist` without its contents, and `/**/dist/**` matches the whole directory `dist/` with all its contents.

## Motivation

In my another repository [ncreate](https://github.com/Lu-Jiejie/ncreate), I need to duplicate an existing local repository to a new one but ignore some files based on the `.gitignore` file. I found that there is a few differences between `.gitignore` and `minimatch` patterns. So...

## Reference

[gitignore documentation](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring)

<!-- Badge -->
[npm-version-badge]: https://img.shields.io/npm/v/gitignore-to-minimatch?style=flat&color=ddd&labelColor=444
[npm-version-href]: https://www.npmjs.com/package/gitignore-to-minimatch
[minzip-badge]: https://img.shields.io/bundlephobia/minzip/gitignore-to-minimatch?style=flat&color=ddd&labelColor=444&label=minizip
[minzip-href]: https://bundlephobia.com/result?p=gitignore-to-minimatch
[jsdocs-badge]: https://img.shields.io/badge/jsDocs-reference-ddd?style=flat&color=ddd&labelColor=444
[jsdocs-href]: https://www.jsdocs.io/package/gitignore-to-minimatch
[license-badge]: https://img.shields.io/github/license/Lu-Jiejie/gitignore-to-minimatch?style=flat&color=ddd&labelColor=444
[license-href]: https://github.com/Lu-Jiejie/gitignore-to-minimatch/blob/main/LICENSE

import { BlobEntry } from './entry'

// Excluding system
const PARTITIONS = new Set(['system_ext', 'product', 'vendor'])

export function parseFileList(list: string) {
  let entries = []

  for (let line of list.split('\n')) {
    // Ignore comments and empty/blank lines
    if (line.length == 0 || line.startsWith('#') || line.match(/^\s*$/)) {
      continue
    }

    // Split into path and flags first, ignoring whitespace
    let [srcPath, postModifiers] = line.trim().split(';')
    let modifiers = (postModifiers ?? '').split('|')

    // Parse "named dependency" flag (preceding -)
    let isNamedDependency = srcPath.startsWith('-')
    if (isNamedDependency) {
      srcPath = srcPath.slice(1)
    }

    // Split path into partition and sub-partition path
    let pathParts = srcPath.split('/')
    let partition = pathParts[0]
    if (!PARTITIONS.has(partition)) {
      partition = 'system'
    }
    let path = pathParts.slice(1).join('/')

    entries.push({
      partition: partition,
      path: path,
      srcPath: srcPath,
      isPresigned: modifiers.includes('PRESIGNED'),
      isNamedDependency: isNamedDependency,
    } as BlobEntry)
  }

  // Sort by source path
  return entries.sort((a, b) => a.srcPath.localeCompare(b.srcPath))
}

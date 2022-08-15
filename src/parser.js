import fs from 'fs/promises'
// import fs from 'fs';
import path from 'path'
// Add path formating for Windows

const getMatchedLines = (data, substring) => {
  if (substring === '') {
    return []
  }
  let result = []
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].includes(substring)) {
      result = [...result, { firstMatchLineIndex: i, line: data[i].trim() }]
    }
  }
  return result
}

const parse = (dirpath, substring, isRecursively = false) => fs.readdir(dirpath)
  .then((files) => Promise.all(files
    .filter((filename) => {
      const filterableExtensions = ['.jpg', '.png', '.svg', '.mp4', '.mp3', '.mpeg', 'raw', '']
      return !filterableExtensions.includes(path.extname(filename))
    })

    .map(async (filename) => {
      const formatedFilename = path.join(dirpath, filename)
      if (isRecursively && (await fs.stat(formatedFilename)).isDirectory()) {
        return parse(formatedFilename, substring, isRecursively)
      } if ((await fs.stat(formatedFilename)).isDirectory()) {
        return []
      }
      const fullFilepath = path.join(process.cwd(), dirpath, formatedFilename)
      const fileCreatingDate = (await fs.stat(formatedFilename)).birthtime
      const dataInLines = (await fs.readFile(formatedFilename, 'utf8')).split('\n')

      const matchedLines = getMatchedLines(dataInLines, substring.trim().toLowerCase())

      if (matchedLines.length === 0) {
        return []
      }

      return {
        name: filename,
        keyword: substring,
        filepath: path.join(dirpath, formatedFilename),
        fullPath: fullFilepath,
        creatingDate: fileCreatingDate,
        data: matchedLines
      }
    })))
  .then((list) => list.flat())

export default parse

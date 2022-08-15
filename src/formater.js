const getLinesList = (file) => file.data.map((lineObj) => lineObj.line.trim())

const listFormat = (filesList) => filesList
  .reduce((acc, file) => {
    const lines = getLinesList(file).join('\n')
    return `${acc}\n${lines}\n`
  }).trim()

const arrowFormating = (filesList) => filesList
  .reduce((acc, file) => {
    const lines = getLinesList(file)
    // const linesForFile = lines.reduce((result, line) => `${result}\n${`\u001b[32m${file.filepath}\u001b[0m`} → ${line}\n`, '').trim();
    const linesForFile = `${file.filepath} \u001b[34m===>\u001b[0m\n${lines.join('\n')}`
    return `${acc}\n${linesForFile}\n`
  }, '').trim()

const mapping = {
  list: listFormat,
  arrowStyle: arrowFormating
}

const formatList = (filesList, formatType = 'arrowStyle') => {
  console.log(mapping[formatType](filesList))
}

export default formatList

const fs = require('fs')

/**
 * getFiles - Get list of files in directory
 * @param {string} dir
 * @returns {Array} Array of objects
 */
const getFiles = (dir) => {
  const files = fs.readdirSync(dir)

  return files.map((file) => {
    const fileContents = JSON.parse(
      fs.readFileSync(__dirname + `/news/${file}`, 'utf-8')
    )
    const slug = file
      .split('.')
      .slice(0, -1)
      .join('.')

    return { slug, ...fileContents }
  })
}

const writeContent = async () => {
  const fileArray = await getFiles(__dirname + '/news/')

  // Order array by date (default asc)
  const sortedArray = fileArray.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  // Reverse array and write to JSON
  const reversedArray = sortedArray.reverse()
  const jsonContent = await JSON.stringify(reversedArray)

  fs.writeFile(__dirname + '/news.json', jsonContent, (err) => {
    if (err) throw new Error(err)
  })
}

writeContent()

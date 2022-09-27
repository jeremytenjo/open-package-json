const path = require('path')

const logError = require('../../../utils/log/logError')
const openFile = require('../../../utils/folderFiles/openFile')

module.exports = async function openPackageJson() {
  const packageJsonPath = 'package.json'

  try {
    openFile(packageJsonPath)
  } catch (error) {
    logError(error)
  }
}

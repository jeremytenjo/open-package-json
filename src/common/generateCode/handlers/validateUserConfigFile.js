const logError = require('../../../../utils/log/logError')

module.exports = function validateUserConfigFile(userConfigFile) {
  if (!userConfigFile) {
    logError(
      `Config file not found. Please add path to extension settings under openPackageJson.userConfigFilePath`,
    )
  }
  if (!Array.isArray(userConfigFile)) {
    logError(`Config file must export an array`)
  }
}

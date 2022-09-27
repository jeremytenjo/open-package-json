const path = require('path')

const vscode = require('vscode')

module.exports = function createUri(uri) {
  const folderUri = vscode.workspace.workspaceFolders[0].uri
  const fileUri = vscode.Uri.parse(`${folderUri}/${uri}`)

  return fileUri
}

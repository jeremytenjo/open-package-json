const vscode = require('vscode')
const openPackageJson = require('./commands/openPackageJsonCommand')
const pkgJson = require('../package.json')

/**
 * @param {vscode.ExtensionContext} context
 * {@Link https://code.visualstudio.com/api/references/vscode-api#ExtensionContext|ExtensionContext API}
 */
function activate(context) {
  console.log(`${pkgJson.name} activated!`)

  context.subscriptions.push(
    vscode.commands.registerCommand('openPackageJson.openPackageJson', openPackageJson),
  )
}

// this method is called when your extension is deactivated
function deactivate() {
  console.log(`${pkgJson.name} deactivated!`)
}

module.exports = {
  activate,
  deactivate,
}

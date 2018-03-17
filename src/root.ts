'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate (context: vscode.ExtensionContext) {

    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.tsdoc', () => {
        const editor = vscode.window.activeTextEditor;
        vscode.window.showInformationMessage('Lox');
        // vscode.window.showInformationMessage(`Formatted! Interfaces: ${interfaces}, enums: ${enums}, types: ${types}, functions: ${functions}, arrow fns: ${constFns}. Inserted ${inserts}, replaced ${replaces}.`);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate () {
}
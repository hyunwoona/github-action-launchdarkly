const core = require('@actions/core')
import * as inputHelper from './input-helper'
import * as commitMessageChecker from './commit-message-checker'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const checkerArguments = await inputHelper.getInputs()
    if (checkerArguments.messages.length === 0) {
      core.info(`No commits found in the payload, skipping check.`)
    } else {
      await commitMessageChecker.checkCommitMessages(checkerArguments)
      core.setOutput('message','abcccccccccccccc')
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}

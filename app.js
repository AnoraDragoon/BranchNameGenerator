"use strict";
/**
 * getting DOM elements from HTML
 */
const INPUT_NUMBER = document.getElementById('issue-number');
const INPUT_TITLE = document.getElementById('issue-title');
const INPUT_RESULT = document.getElementById('result');
const INPUT_BRANCH_COMMAND = document.getElementById('branch-command');
const COMMAND = 'git checkout -b ';
/**
 * Generate branch name, everything to lowercase and replace white spaces by dashes
 */
function transform(issueNumber, issueName) {
    issueName = cleanString(issueName);
    issueName = issueName.toLowerCase().trim().split(' ').join('-');
    issueName = issueName.replace('---', '-');
    issueName = issueName.replace('--', '-');
    return `NB-${issueNumber}#${issueName}`;
}
function cleanString(issueName) {
    issueName = issueName.replace('\'', '');
    issueName = issueName.replace('"', '');
    issueName = issueName.replace(':', '');
    issueName = issueName.replace('(', '');
    issueName = issueName.replace(')', '');
    issueName = issueName.replace('+', '');
    issueName = issueName.replace(',', '');
    // issueName = issueName.replace('', '');
    return issueName;
    // return issueName.replace(/:|"|\(|\)|\+/, '');
}
function copyValue(input) {
    input.select();
    document.execCommand('copy');
}
function showText() {
    let number, title;
    if (INPUT_NUMBER && INPUT_TITLE) {
        number = INPUT_NUMBER.value;
        title = INPUT_TITLE.value;
        if (INPUT_RESULT) {
            INPUT_RESULT.value = transform(number, title);
        }
        if (INPUT_BRANCH_COMMAND) {
            INPUT_BRANCH_COMMAND.value = COMMAND + transform(number, title);
        }
    }
}
function copyResult() {
    if (INPUT_RESULT) {
        copyValue(INPUT_RESULT);
    }
}
function copyBranchCommand() {
    if (INPUT_BRANCH_COMMAND) {
        copyValue(INPUT_BRANCH_COMMAND);
    }
}

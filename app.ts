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
function transform(issueNumber: string, issueName: string): string {
    issueName = cleanString(issueName);
    issueName = issueName.toLowerCase().trim().split(' ').join('-');
    issueName = issueName.replace('---', '-');
    issueName = issueName.replace('--', '-');
    return `NB-${issueNumber}#${issueName}`;
}

function cleanString(issueName: string): string {
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

function copyValue(input: HTMLInputElement): void {
    input.select();
    document.execCommand('copy');
}

function showText(): void {
    let number, title: string;
    if (INPUT_NUMBER && INPUT_TITLE) {
        number = (INPUT_NUMBER as HTMLInputElement).value;
        title = (INPUT_TITLE as HTMLInputElement).value;
        if (INPUT_RESULT) {
            (INPUT_RESULT as HTMLInputElement).value = transform(number, title);
        }
        if (INPUT_BRANCH_COMMAND) {
            (INPUT_BRANCH_COMMAND as HTMLInputElement).value = COMMAND + transform(number, title);
        }
    }
}

function copyResult(): void {
    if (INPUT_RESULT) {
        copyValue((INPUT_RESULT as HTMLInputElement));
    }
}
function copyBranchCommand(): void {
    if (INPUT_BRANCH_COMMAND) {
        copyValue((INPUT_BRANCH_COMMAND as HTMLInputElement));
    }
}

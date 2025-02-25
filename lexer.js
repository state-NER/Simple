function tokenize(input) {
  const tokens = [];
  const tokenRegex = /(\$)|(#\w+:\w+)|([()])|(\w+)|("[^"]*")|(\s+)/g;
  let match;
  while ((match = tokenRegex.exec(input)) !== null) {
    if (match[1]) {
      tokens.push({ type: 'DOLLAR', value: match[1] });
    } else if (match[2]) {
      tokens.push({ type: 'ATTRIBUTE', value: match[2] });
    } else if (match[3]) {
      tokens.push({ type: 'PAREN', value: match[3] });
    } else if (match[4]) {
      tokens.push({ type: 'WORD', value: match[4] });
    } else if (match[5]) {
      tokens.push({ type: 'STRING', value: match[5] });
    }
  }
  return tokens;
}

module.exports = {
  tokenize
};
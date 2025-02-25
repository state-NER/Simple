function parse(tokens) {
  let current = 0;

  function walk() {
    let token = tokens[current];

    if (token.type === 'WORD' && tokens[current + 1] && tokens[current + 1].type === 'DOLLAR') {
      current += 2;
      const name = token.value;
      const body = [];
      while (tokens[current] && tokens[current].type !== 'PAREN') {
        body.push(walk());
      }
      if (tokens[current] && tokens[current].type === 'PAREN') {
        current++;
      }
      return { type: 'Simple', name, body };
    }

    if (token.type === 'PAREN' && token.value === '(') {
      token = tokens[++current];
      const name = token.value;
      token = tokens[++current];
      const attributes = {};
      while (token.type === 'ATTRIBUTE') {
        const [key, value] = token.value.slice(1).split(':');
        attributes[key] = value;
        token = tokens[++current];
      }
      const body = [];
      while (token.type !== 'PAREN' && token.value !== ')') {
        body.push(walk());
        token = tokens[current];
      }
      current++;
      return { type: 'Element', name, attributes, body };
    }

    if (token.type === 'STRING') {
      current++;
      return { type: 'Text', value: token.value.slice(1, -1) };
    }

    throw new TypeError(token.type);
  }

  const ast = [];
  while (current < tokens.length) {
    ast.push(walk());
  }
  return ast;
}

module.exports = {
  parse
};
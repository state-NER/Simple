const fs = require('fs');
const lexer = require('./lexer');
const parser = require('./parser');

const filename = process.argv[2];
if (!filename) {
  console.error('Please provide a file to interpret');
  process.exit(1);
}

const code = fs.readFileSync(filename, 'utf-8');
const tokens = lexer.tokenize(code);
const ast = parser.parse(tokens);

// This function will execute the AST
function execute(ast) {
  if (Array.isArray(ast)) {
    ast.forEach(execute);
  } else {
    switch (ast.type) {
      case 'Simple':
        console.log(`Creating ${ast.name}`);
        execute(ast.body);
        break;
      case 'Element':
        console.log(`Creating element ${ast.name} with attributes`, ast.attributes);
        execute(ast.body);
        break;
      case 'Text':
        console.log(`Adding text: ${ast.value}`);
        break;
      default:
        console.error('Unknown AST node type:', ast.type);
    }
  }
}

execute(ast);
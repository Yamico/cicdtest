const http = require('http');

const tree = `
       *
      / \\
     /   \\
    /     \\
   /_______\\
      | |
      | |
Merry Christmas!
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(tree);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(tree);
});

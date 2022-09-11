const http = require('http');

const server = http.createServer((reg, res) => {
      if (reg.url === '/') {
            res.end('Welcome to our homepage')
      }
      if (reg.url === '/about') {
            res.end('Here is our history')
      }
      res.end(`<h1> OOps </h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>
      `)
})


server.listen(5000)
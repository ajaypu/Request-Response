// http : Launch a server, send reqs
// https : Launch a SSL server
// fs : file system
//

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(req.url, req.method, req.headers);
  // process.exit()

  const url = req.url;
  if (url === "/") {
    // res.write("<html>");
    // res.write("<head><title>Enter Messages</title></head>");
    // res.write(
    //   "<body><form action='/message' method='POST'><input><button>Send</button></input></form></body>"
    // );
    // res.write("</html>");
    // return res.end();
    res.write("Welcome home");
    return res.end();
  } else if (url === "/about") {
    res.write("Welcome to About Us page");
    return res.end();
  } else if (url === "/node") {
    res.write("Welcome to my Node Js project");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>First Page</title></head>");
  res.write("<body><h1>Hello from my Node.j Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
console.log("Ajay Prakash");

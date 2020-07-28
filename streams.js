const fs = require("fs")
const server = require("http").createServer()

server.on("request", (req, res) => {
  // Solution 1
  // fs.readFile('test-file.txt', (err, data) => {
  //   if (err) console.log (err)
  //   res.end(data)
  // })

  // Solution 2: Streams
  // const readable = fs.createReadStream("test-file.txt")
  // readable.on("data", chunk => {
  //   res.write(chunk)
  // })
  // readable.on("end", () => {
  //   // need this piece to send the information to the client
  //   res.end()
  // })
  // readable.on("error", err => {
  //   console.log(err)
  //   // Server error code
  //   res.statusCode = 500
  //   res.end("File not found!")
  // })

  // Solution 3: Pipe Operator (Solves 'backpressure' issue)
  const readable = fs.createReadStream("test-file.txt")
  readable.pipe(res)
  // readableSource.pipe(writableDest)
})

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...")
})
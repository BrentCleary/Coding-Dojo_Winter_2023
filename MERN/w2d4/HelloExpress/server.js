const express = require("express");
const app = express();
const port = 8000

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({message: "Our express api server is now sending this over to the browser Test"});
  console.log('Test here here')
});

// const server = app.listen(8000, () =>
//   console.log(`Server is locked and loaded on port ${server.address().port}!`)
// );

app.listen( port, () => console.log(`Listening on port: ${port}`));
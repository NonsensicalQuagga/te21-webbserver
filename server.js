const express = require("express")
const nunjucks = require('nunjucks');
const indexRouter = require("./routes/index")
const app = express()

const port = process.env.PORT || 3000

app.use(express.static("public"))

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use("/", indexRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
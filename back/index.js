import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router.js";

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

const port = 3000

app.listen(port, () => {
    console.log('\x1b[33m%s', '⚙️  Server is running on port ' +port)
    console.log('\x1b[34m%s', '🔗 Access it here : http://localhost:'+port, '\x1b[0m')
})
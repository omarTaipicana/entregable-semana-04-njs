const express = require("express")

const responseHandlres = require("./utils/handreResponses")

const app = express()
app.use(express.json())
const initModels = require("./models/init.models")

const usersRouter = require("./users/users.router")

app.use("/",usersRouter)

app.get("/", (req, res) => {
    responseHandlres.success({
        res,
        message: "servidor inicializado correctamente",
        status: 200,
        data: {
            "users": "http://localhost:9000/api/v1/users",
            "conversations": "http://localhost:9000/api/v1/conversations"
        }
    })
})



app.use("*", (req, res) => {
    responseHandlres.error({
        res,
        status: 404,
        message: "URLnot found, please try with http://localhost:9000"
    })
})



const db = require("./utils/database")

db.authenticate()
    .then(() => {
        console.log("las credenciales son correctas")
    })
    .catch((error) => {
        console.log(error)
    })
db.sync()
.then(() => {
    console.log("la base de datos se sincronizo")
})
.catch((error) => {
    console.log(error)
})

initModels()






app.listen("9000", () => {
    console.log("server ok")
})
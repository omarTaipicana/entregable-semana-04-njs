const usersServices = require("./users.services")

const express = require("express")
const router = express.Router()


router.get("/api/v1/users",usersServices.getAllUsers)
router.post("/api/v1/users",usersServices.postUser)
router.get("/api/v1/users/:id",usersServices.getUserById)
router.patch("/api/v1/users/:id",usersServices.patchUser)
router.delete("/api/v1/users/:id",usersServices.deleteUser)


module.exports = router
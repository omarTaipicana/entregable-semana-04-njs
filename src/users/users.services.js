const usersConrollers = require("./users.controllers")
const responseHandlres = require("../utils/handreResponses")

const getAllUsers = (req, res) => {
    usersConrollers.findAllUsers()
        .then(data => {
            responseHandlres.success({
                res,
                data,
                status: 200,
                message: 'All users collected succesfully',
                data: data
            })
        })
        .catch(error => {
            responseHandlres.error({
                res,
                data: error,
                status: 400,
                message: 'not found',
            })
        })
}

const getUserById = (req, res) => {
    const id = req.params.id
    usersConrollers.finUserById(id)
    .then(data => {
        responseHandlres.success({
            res,
            data,
            status: 200,
            message: 'User found',
            data: data
        })
    })
    .catch(error => {
        responseHandlres.error({
            res,
            data: error,
            status: 400,
            message: "invalid id",
        })
    })
}


const postUser = (req, res) => {
    const userObj = req.body
    usersConrollers.createdNewUser(userObj)
    .then(data => {
        responseHandlres.success({
            res,
            data,
            status: 200,
            message: 'User created succesfully',
            data: data
        })
    })
    .catch(error => {
        responseHandlres.error({
            res,
            data: error,
            status: 400,
            message: 'not found',
        })
    })
}

const patchUser = (req, res) => {
    const id = req.params.id
    const userObj = req.body
    usersConrollers.updateUser(id, userObj)
    .then(data => {
       if(data[0]){
        responseHandlres.success({
            res,
            data,
            status: 200,
            message: 'User update succesfully',
            data: data
        })
       }else{
        responseHandlres.success({
            res,
            data,
            status: 200,
            message: 'invalid id',
            data: data
        })
       }
    })
    .catch(error => {
        responseHandlres.error({
            res,
            data: error,
            status: 400,
            message: 'not found',
        })
    })
}

const deleteUser = (req, res) => {
    const id = req.params.id
    usersConrollers.deleteUser(id)
    .then(data => {
        if(data){
         responseHandlres.success({
             res,
             data,
             status: 200,
             message: 'User delete succesfully',
             data: data
         })
        }else{
         responseHandlres.success({
             res,
             data,
             status: 200,
             message: 'invalid id',
             data: data
         })
        }
     })
     .catch(error => {
         responseHandlres.error({
             res,
             data: error,
             status: 400,
             message: 'not found',
         })
     })
}


module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}
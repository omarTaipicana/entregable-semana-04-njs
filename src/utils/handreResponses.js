// ````JavaScript
// {
//     error: false,
//     status, 201,
//     message: "User creates Succesfully",
//     data: {
//         id: 5,
//         firstName: "Fer",
//         ...
//     }
// }

//para respuestas exitosas
const success = ({ status, data, message, res }) => {
    res.status(status).json({
        error: false,
        status: status,
        message: message,
        data: data
    })
}


//para respuestas de errores
const error = ({status, data, message, res, fields}) => {
    res.status(status).json({
        error: true,
        status: status,
        message: message,
        fields: fields
    })
}

module.exports = {
    success,
    error
}
const Users = require("./users.models")
const Conversations = require("./convesrations.models")
const Participants = require("./participants.models")
const Messages = require("./messages.models")



const initModels = () => {
    Participants.belongsTo(Users)
    Users.hasMany(Participants)

    Messages.belongsTo(Participants)
    Participants.hasMany(Messages)
    
    Participants.belongsTo(Conversations)
    Conversations.hasMany(Participants)
}

module.exports = initModels
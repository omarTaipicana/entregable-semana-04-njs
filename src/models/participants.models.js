const { DataTypes } = require("sequelize")

const db = require("../utils/database")

const Users = require("./users.models")
const Conversations = require("./convesrations.models")

const Participants = db.define("participants", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Users,
            key: "id"
        }
    },
    convesrationId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Conversations,
            key: "id"
        }
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Participants
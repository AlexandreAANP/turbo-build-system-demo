import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../sequelize-connection'; // Adjust the path to your sequelize instance

// Define the attributes for the Session model
interface SessionAttributes {
    id: number;
    userId: number;
    token: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the creation attributes for the Session model
interface SessionCreationAttributes extends Optional<SessionAttributes, 'id'> {}

// Define the Session model class
export class Session extends Model<SessionAttributes, SessionCreationAttributes> implements SessionAttributes {
    public id!: number;
    public userId!: number;
    public token!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the Session model
Session.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize, // Pass the sequelize instance
        modelName: 'Session',
        tableName: 'sessions',
        timestamps: true,
    }
);

export default Session;
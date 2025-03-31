import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // Change this to your preferred database dialect (e.g., 'postgres', 'sqlite', 'mssql')
});

export default sequelize;
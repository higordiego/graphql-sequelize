import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'graphql',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      evict: 10000,
      acquire: 10000,
      maxIdleTime: 30,
      handleDisconnects: true
    },
    define: {
      underscored: true
    },
    dialectOptions: {
      useUTC: false
    },
    timezone: '-03:00',
    retry: {
      max: 5
    }
  })


const models = {
  User: sequelize.import('./user'),
  Channel: sequelize.import('./channel'),
  Message: sequelize.import('./message'),
  Team: sequelize.import('./team'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;

export default models;
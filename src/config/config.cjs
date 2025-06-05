require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    define: {
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    define: {
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    ssl: false,
  },
};
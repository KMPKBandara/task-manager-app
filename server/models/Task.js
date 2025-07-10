module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Task", {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    completed: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
};

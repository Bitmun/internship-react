module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define("Projects", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Projects;
};

const Mentor = require("../models/Mentor");

exports.createMentor = async (username, first, lastname, phone, route) => {
  const mentor = await Mentor.create({
    username,
    firstname,
    lastname,
    phone,
    route,
  });
  return mentor;
};

exports.getMentor = async (id) => {
  const mentor = await Mentor.findByPk(id);
  return mentor;
};

exports.deleteMentor = async (id) => {
  await Mentor.destroy({ where: { id } });
};
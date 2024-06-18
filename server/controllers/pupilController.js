const Pupil = require('../models/Pupil');

const createPupil = async (req, res) => {
  try {
    const { firstname, lastname, coin, pupilphone, parentphone, lessonDay, lessonTime } = req.body;
    const teacherId = req.user.id; // Logged in teacher's ID
    let pupil = await Pupil.findOne({ where: { pupilphone } });
    if (!pupil) {
      pupil = await Pupil.create({ firstname, lastname, coin, pupilphone, parentphone, lessonDay, lessonTime });
    }
    const teacher = await Mentor.findByPk(teacherId);
    await teacher.addPupil(pupil);
    res.status(201).json(pupil);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPupilsByTeacher = async (req, res) => {
  try {
    const teacherId = req.user.id; // Logged in teacher's ID
    const teacher = await Mentor.findByPk(teacherId, {
      include: Pupil,
    });
    res.status(200).json(teacher.Pupils);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPupils = async (req, res) => {
  try {
    const pupils = await Pupil.findAll();
    res.status(200).json(pupils);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createPupil, getAllPupils, getPupilsByTeacher };
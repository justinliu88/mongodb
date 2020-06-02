const studentModel = require("../models/student");

async function addStudent(req, res) {
    const { firstName, lastName, email } = req.body;

    const student = new studentModel({ firstName, lastName, email });
    await student.save();
    return res.status(201).json(student);
}

async function getStudent(req, res) {
    const { id } = req.params;
    const student = await studentModel.findById(id);

    if (!student) {
        return res.status(404).json("student not found");
    }
    return res.json(student);
}

async function getAllStudents(req, res) {
    const student = await studentModel.find();
    return res.json(student);
}

async function updateStudent(req, res) {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;

    const newStudent = await studentModel.findByIdAndUpdate(
        id, { firstName, lastName, email }, { new: true, runValidators: true }
    );

    if (!newStudent) {
        return res.status(404).json("student not found");
    }
    return res.json(newStudent);
}

async function deleteStudent(req, res) {
    const { id } = req.params;
    const student = await studentModel.findByIdAndDelete(id);
    if (!student) {
        return res.status(404).json("student not found");
    }
    return res.sendStatus(200);
}

module.exports = {
    addStudent,
    getStudent,
    getAllStudents,
    updateStudent,
    deleteStudent,
};
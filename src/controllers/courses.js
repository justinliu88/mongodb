const courseModel = require("../models/courses");

async function addCourse(req, res) {
    const { name, code, description } = req.body;
    const course = new courseModel({ name, code, description });
    // const course = new courseModel({
    //     _id: "ab123",
    //     name: "into to web",
    // });
    await course.save();
    return res.status(201).json(course);
}

async function getCourse(req, res) {
    const { id: code } = req.params;
    const course = await courseModel.findById(code);
    if (!course) {
        return res.status(404).json("course not found");
    }
    return res.json(course);
}

async function getAllCourses(req, res) {
    const courses = await courseModel.find();
    res.json(courses);
}

async function updateCourse(req, res) {
    const { id: code } = req.params;
    const { name, description } = req.body;
    const newCourse = await courseModel.findByIdAndUpdate(
        code, {
            name,
            description,
        }, {
            new: true,
        }
    );
    if (!newCourse) {
        return res.status(404).json("course not found");
    }
    return res.json(newCourse);
}

async function deleteCourse(req, res) {
    const { id: code } = req.params;
    const deleteCourse = await courseModel.findByIdAndDelete(code);
    if (!deleteCourse) {
        return res.status(404).json("course not found");
    }
    return res.sendStatus(200);
}

module.exports = {
    addCourse,
    getCourse,
    getAllCourses,
    updateCourse,
    deleteCourse,
};
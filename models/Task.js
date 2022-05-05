const { Schema, model } = require('../config/database');


const taskSchema = Schema({
    type: {
        required: true,
        type: String,
        enum: ["Frontend", "Backend", "Deployment", "UI/UX"]
    },
    summary: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: String,
        default: "TO DO",
        enum: ["TO DO", "IN PROGRESS", "IN REVIEW", "DONE"]
    },
    assignee: {
        required: true,
        type: String,
    },
    dueDate: {
        required: true,
        type: String
    },
    priority: {
        required: true,
        type: String,
        enum: ["Low", "Medium", "High"]
    }
});

module.exports = model('Task', taskSchema);


// {
//     "type": "Wireframe for Project 3",
//     "summary": "TO-DO",
//     "status": "IN PROGRESS",
//     "assignee": "Dan Nguyen",
//     "dueDate": "2022-04-30",
//     "priority": "High"
// }
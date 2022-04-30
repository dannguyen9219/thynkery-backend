const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


// Index Route //
router.get('/', (req, res) => {
    Task.find({}, (err, foundTasks) => {
        if (!err) {
            res.status(200).json(foundTasks)
        }   else {
            res.status(400).json(err)
        };
    });
});

// New Route //
router.get('/new', (req, res) => {
    res.render('tasks/New')
});

// Table Route - List Page //
router.get('/table', (req, res) => {
    Task.find({}, (err, foundTasks) => {
        if (!err) {
            const formattedData = foundTasks.reduce((acc, item) => {
                acc[item.priority] = acc[item.priority] ? [...acc[item.priority], item] : [item]
                return acc
            }, {})
            res.status(200).json(formattedData)
        }   else {
            res.status(400).json(err)
        };
    });
});

// Table Route - Trello Page //
router.get('/trello', (req, res) => {
    Task.find({}, (err, foundTasks) => {
        if (!err) {
            const formattedData = foundTasks.reduce((acc, item) => {
                acc[item.status] = acc[item.status] ? [...acc[item.status], item] : [item]
                return acc
            }, {})
            res.status(200).json(formattedData)
        }   else {
            res.status(400).json(err)
        };
    });
});

// Table Route - Calendar Page //
router.get('/calendar', (req, res) => {
    Task.find({}, (err, foundTasks) => {
        if (!err) {
            const formattedData = foundTasks.reduce((acc, item) => {
                acc[item.status] = acc[item.status] ? [...acc[item.status], item] : [item]
                return acc
            }, {})
            res.status(200).json(formattedData)
        }   else {
            res.status(400).json(err)
        };
    });
});

// Delete Route //
router.delete('/task/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).json({message: "Deleted the task!"})
        }   else {
            res.status(400).json(err)
        };
    });
});

// Update Trello Route //
router.put('/:id', (req, res) => {
    const { body } = req

    Task.findByIdAndUpdate(req.params.id, body, 
        {new: true}, (err, updatedTask) => {
            if (!err) {
                res.status(200).json(updatedTask)
            }   else {
                res.status(400).json(err)
            };
        });
});

// Update Task Route //
router.put('/edit/task/:id', (req, res) => {
    const { body } = req

    Task.findByIdAndUpdate(req.params.id, body, 
        {new: true}, (err, updatedTask) => {
            if (!err) {
                res.status(200).json(updatedTask)
            }   else {
                res.status(400).json(err)
            };
        });
});

// Create Route //
router.post('/', (req, res) => {
    const { body } = req;

    Task.create(body, (err, createdTask) => {
        if (!err) {
            res.status(200).json({message: "All good, task created!", createdTask: createdTask})
        }   else {
            res.status(400).json(err)
        }
    });
});

// Create Route //
// router.post('/', (req, res) => {
//     req.body.username = req.session.username;
//     Bug.create(req.body)
//         .then((createdBug) => {
//             res.redirect(`/bugs/${createdBug._id}`)
//         })
//         .catch((error) => {
//             res.status(400).json({ error })
//         })
// });

// Edit Route //
// router.get('/:id/edit', (req, res) => {
//     const { id } = req.params
//     Bug.findById(id)
//         .then((bug) => {
//             res.render('bugs/Edit', { bug })
//         })
//         .catch((error) => {
//             res.status(400).json({ error })
//         })
// });


// Show Route //
router.get('/task/:id', (req, res) => {
    Task.findById(req.params.id, (err, foundTask) => {
        if (!err) {
            res.status(200).json(foundTask)
            // return foundTask
        }   else {
            res.status(400).json(err)
        };
    });
});




module.exports = router;
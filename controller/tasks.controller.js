const TaskModel = require('../model/Task.model');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();

    res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = await TaskModel.create(req.body);
    newTask.save((error) => {
      if (error) {
        return res.status(400).json(error);
      }
      res.status(200).send('New Task Added');
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findById(id);

    res.status(200).json(task);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: `${task.name} have been updated` });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findByIdAndRemove(id);
    res.status(200).json({ message: `${task.name} have been deleted` });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

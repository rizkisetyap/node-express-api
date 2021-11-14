const router = require('express').Router();
const controller = require('../controller/tasks.controller');

/* TODO
baseUrl = 'api/v1/tasks'
app.get('api/v1/tasks')             -get all task

app.post('api/v1/tasks')            -add new task

app.get('api/v1/tasks/:id')         -get single task

app.patch('api/v1/tasks/:id')       -update a task

app.delete('api/v1/tasks/:id')      -delete a task
*/

router.route('/').get(controller.getAllTasks).post(controller.createTask);

router
  .route('/:id')
  .get(controller.getTask)
  .patch(controller.updateTask)
  .delete(controller.deleteTask);

module.exports = router;

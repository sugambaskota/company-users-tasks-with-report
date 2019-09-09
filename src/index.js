const express = require('express');
require('./db/sequelize');
const companyRouter = require('./routers/company');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const logRouter = require('./routers/log');
const Company = require('./models/company');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();

Company.hasMany(User);
User.belongsTo(Company);
User.hasMany(Task);
Task.belongsTo(User);

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(companyRouter);
app.use(userRouter);
app.use(taskRouter);
app.use(logRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})


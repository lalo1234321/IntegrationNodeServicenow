
const express = require('express');
const morgan = require('morgan');
const employee = require('./src/routes/employee.js');
const app = express();
app.set('port', 8081);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(employee);


app.listen(app.get('port'), () => {
    console.log(`Server on port ${8081}`);
});

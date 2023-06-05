const express = require('express');
const employeesData = require('./employees.json');
const app = express();
const port = 2000;

// Endpoint to get all employees data
app.get('/employees.json', (req, res) => {
  console.log(employeesData)
  res.json(employeesData);
});

// Endpoint to get a specific employee by their employeeID
app.get('/employees/:employeeID', (req, res) => {
  const employeeID = parseInt(req.params.employeeID);
  const employee = employeesData.employees.find(emp => emp.employeeID === employeeID);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// runReactDev.js

const { exec } = require('child_process');
const path = require('path');

// Set the path to your React project
const reactAppPath = path.join('C:', 'Users', 'MinhLu', 'Desktop', 'Services', 'service-management-tool', 'client');

console.log('Starting React development server...');

const devProcess = exec('npm start', { cwd: reactAppPath });

devProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

devProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});

devProcess.on('close', (code) => {
  console.log(`React dev server exited with code ${code}`);
});

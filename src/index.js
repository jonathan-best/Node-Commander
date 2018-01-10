const commander = require('commander');
const { prompt } = require('inquirer');
const questions = require('./questions').questions

commander
  .version('0.0.1')
  .description('Test node commander project');

commander
  .command('testa <firstName> <lastName>')
  .alias('a')
  .description('Print out entered info')
  .action((firstname, lastname) => {
    console.log({firstname, lastname});
  });

commander
  .command('testb')
  .alias('b')
  .description('Print out entered info with a step by step entry')
  .action(() => {
    prompt(questions).then(answers =>
       console.log(answers));
  });

commander.parse(process.argv);

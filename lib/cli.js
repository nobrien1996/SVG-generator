//SETTING REQUIREMENTS

const inquirer = require('inquirer');
const SVG = require('./svg');
const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require('fs/promises');


class CLI {
    run() {
        return inquirer
            //SETTING PROMPTS
            .prompt([
                {
                    name: 'text',
                    type: 'input',
                    message: 'Enter logo text (must be under 4 characters',
                    validate: (text) => text.length <= 3 || 'The message must be no longer than 3 characters',
                },
                {
                    name: 'textColor',
                    type: 'input',
                    message: 'Enter text color',
                },
                {
                    name: 'shapeType',
                    type: 'list',
                    message: 'Select logo shape',
                    choices: ['circle', 'square', 'triangle'],
                },
                {
                    name: 'shapeColor',
                    type: 'input',
                    message: 'Enter shape color',
                },
            ])
            //DESIGNATING SHAPES
            .then(({ text, textColor, shapeType, shapeColor }) => {
                let shape;
                switch (shapeType) {
                    case 'circle':
                        shape = new Circle();
                        break;
                    case 'square':
                        shape = new Square();
                        break;
                    default:
                        shape = new Triangle();
                        break;
                }
                shape.setColor(shapeColor);

                //CREATING SVG
                const svg = new SVG();
                svg.setText(text, textColor);
                svg.setShape(shape);
                return writeFile('logo.svg', svg.render());
            })
            .then(() => {
                console.log('logo.svg generated');
            })
            .catch((error) => {
                console.log(error);
                console.log('You screwed something up');
            });
    }
}

module.exports = CLI;
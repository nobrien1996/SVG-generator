//SET REQUIREMENTS
const SVG = require('./svg');
const { Square } = require('./shapes');

//RENDER ELEMENT TEST
test('should render 300x200 svg element', () => {
    const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const svg = new SVG();
    expect(svg.render()).toEqual(expectedSvg);
});

//APPEND ELEMENT
test('should append text element', () => {
    const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
    const svg = new SVG();
    svg.setText('A', 'white');
    expect(svg.render()).toEqual(expectedSvg);
});

//SET TEXT MESSAGE AND COLOR
test('should set text message and color', () => {
    const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText('SVG', '#333');
    expect(svg.render()).toEqual(expectedSvg);
});

//ERROR IF MORE THAN 3 CHARACTERS
test('should throw if text is over 3 characters', () => {
    const expectedError = new Error('Text cannot be more than 3 characters');
    const svg = new SVG();
    expect(() => svg.setText('HELLO THERE', '#333')).toThrow(expectedError);
});

//INCLUDE SHAPE
test('should include shape', () => {
    const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText('SVG', '#333');
    const square = new Square();
    square.setColor('dodgerblue');
    svg.setShape(square);
    expect(svg.render()).toEqual(expectedSvg);
});
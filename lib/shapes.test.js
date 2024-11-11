const { Square, Triangle, Circle } = require('./shapes');


//CIRCLE TEST
describe('Circle', () => {
    test('should render svg for green circle', () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
        const circle = new Circle();
        circle.setColor('green');
        const actualSvg = circle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
    test('should accept fillColor param', () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />'
        const circle = new Circle();
        circle.setColor('blue');
        const actualSvg = circle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
});


//TRIANGLE TEST
describe('Triangle', () => {
    test('should render svg for green polygon', () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
        const triangle = new Triangle();
        triangle.setColor('bisque');
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test('should accept fillColor param', () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
        const triangle = new Triangle();
        triangle.setColor('purple');
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    })
})


//SQUARE TEST
describe('Square', () => {
    test('should render svg for blue polygon element', () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
        const square = new Square();
        square.setColor('dodgerblue');
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test('should accept fillColor param', () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="red" />';
        const square = new Square();
        square.setColor('red');
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});
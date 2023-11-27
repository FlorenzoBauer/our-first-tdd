const chai = require('chai');
const expect = chai.expect;
const {createBox, calculateArea, changeDimensions} = require('../box');


describe('boxTest', function() {
    it('should create a box with default values', function() {
      const box = createBox();
      expect(box.height).to.equal(100);
      expect(box.width).to.equal(100);
    });
  
    it('should create a box with specific values', function() {
      const box = createBox(80, 20);
      expect(box.height).to.equal(80);
      expect(box.width).to.equal(20);
    });

    it('should calculate its area', function(){
        const box = createBox(8, 2);
        const area = calculateArea(box);
        expect(area).to.equal(16);
    })
    it('should be able to change heighth and width', function() {
      const box = createBox(85, 95);
      const smallerBox = changeDimensions(box, 25, 35);

      expect(smallerBox.height).to.equal(25);
      expect(smallerBox.width).to.equal(35);
    });

  });
  


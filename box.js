function createBox(height = 100, width = 100) {
    return {
      height: height,
      width: width
    };
  }
  
  function calculateArea(box) {
    return box.height * box.width;
  }
  
  function changeDimensions(box, height, width){
    box.height = height;
    box.width = width;
    return box
  }

 module.exports = { createBox, calculateArea, changeDimensions };
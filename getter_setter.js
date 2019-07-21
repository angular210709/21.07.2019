
console.clear()
function c(msg)
{
  console.log(msg)
}


/*

c(p3)

var j = {
  printName(p) {
    console.log(this.name)
  }
}

j.printName.apply(p3)
*/





function Person(name, color, height)
{
  // var result = { }
  // this = { }
  this.name = name
  this.color = color
  //this.height = height

  // closure
  let _height = NaN
  this.getHeight = () => { return _height  } 
  this.setHeight = (newHeight) => { if (newHeight > 0)
                                  {
                                    _height = newHeight
                                  }}
  
  this.getColor = function () {
    return this.color
  }
  this.setHeight(height)
  
  // return result
  // return this
}


const p3 = new Person('gadi','black', 1.98)
const p4 = new Person('dana','red', 1.57)









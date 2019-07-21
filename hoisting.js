
console.log(x)

var x = 5


// HOISTING

function f1()
{
  f2()
}


f1()

function f2()
{
  console.log('f2')
}

f3() // error

////////////////////// DO NOT USE!!!!!!!!!!!!!!!!!
// no hoisting!!!
var f3 = function() {
  console.log('hello')
}

function f3()
{
  console.log('hello')
}

f3()

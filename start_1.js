console.log('hello js')

function c(msg)
{
  console.log()
}

c // prints out c function code

const arr = [ 1 , 2, 3 ]
arr.push(3) // adds in the end
arr.unshift(1) // adds in the start
arr.pop() // takes out in the end
arr.shift() // takes out in the start
arr.slice(3, 10) // takes out 3-10
arr.slice(1) // takes out from 1 till end

const arr2 = ['a', true, 123, [1,2,3]]

function print(x)
{
  //console.log(arguments[0]) -- without x
  console.log(`foreach ${x}`)
}

arr2.forEach( print )

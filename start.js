console.log('hello js')
var x = 5


function c(msg)
{
  console.log(msg)
}

x = 5
y = "5"
if (x !== y) // coercion
  {
    c("true")
  }
else
  {
    c("false")
  }
x = undefined
if (!x)
  {
    c("x")
  }

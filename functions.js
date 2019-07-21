function myfunc(number)
{
  c(number + 1)
}


function c( msg )
{
  console.log(msg)
}



// IIFE - anonymous
(function (x) {
  console.log("this is from IIFE" + x)
})(5)


// IIFE - abda
( ()=> { console.log(1)  })()


function c(msg)
{
  console.log(msg)
}

function printObject(obj)
{ 
	for (let n in obj)
  {
    console.log(`${n} : ${obj[n]}`)
  }
}

o = new Object()
o1 = { name : 'itay' }
o1.color = 'yellow'
o1["computer"] = 'dell'
c(o1)
printObject(o1)

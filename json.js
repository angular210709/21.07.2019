
console.clear()
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

const o = new Object()
const o1 = { name : 'itay' }
o1.color = 'yellow'
o1["computer"] = 'dell'
c(o1)
printObject(o1)

const o12= { name : 'itay',
             getName() {
               c ( this.name )
             },
            printName() {
              
            },
            'color' : 'yellow'
           }

printObject(o12)
o12.getName()


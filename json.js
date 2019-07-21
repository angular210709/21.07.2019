
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

var x = 5

const o12= { name : 'itay',
             getName() {
               return this.name
             },
            printName() {
              c ( this.name )
            },
            'color' : 'yellow',
            x
           }

printObject(o12)
o12.getName()


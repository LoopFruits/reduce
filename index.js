let books = [
    {
        title:'Eloquent JavaScript',
        price: 16.00,
        inventory: 5
    },
    {
        title: 'JavaScript: The Good Parts',
        price: 10.50,
        inventory: 30
    },
    {
        title: 'Learn JavaScipt Visually',
        price: 25.00,
        inventory: 2
    },
    {
        title: 'You don\'t know JS',
        price: 60.00,
        inventory: 8
    },
    {
        title: 'JavaScript: The Definitve Guide',
        price: 18.95,
        inventory: 0
    }
]

//Reduce is used when creating a summary or aggregation of values in an array

// const reducer = (accumulator, item) => {     //determines what happens durign a reduce function
    // console.log(accumulator, item)
    // let total = item.price * item.inventory
    // return accumulator+= total // indoreder for the reducer to transfer to the next item in the array we need to return it 
     
//}'

//let total = books.reduce(reducer,0)  // reduce can take a second variable 


const reducer = (accumulator, item) => {
    console.log(accumulator, item)
    return accumulator +", " + item.title
}

let total = books.reduce(reducer, '').substring(2)

// => Eloquent JavaScript, JavaScript: The Good Parts, Learn JavaScipt Visually, You don't know JS, JavaScript: The Definitve Guide



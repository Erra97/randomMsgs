function randomMsgGenerator () {
    const sign = ['sun','moon','honey']
    const todos = ['work','play games','go shopping']
    const feeling = ['good','sad','nice']

    switch(randNumber(3)) {
        case 1: 
            return `Your sign is ${sign[randNumber(sign.length-1)]}`            
        case 2:
            return `You have to ${todos[randNumber(todos.length-1)]}`            
        default:
            return `I feel ${feeling[randNumber(todos.length-1)]}`            
    }
}

const randNumber = (limit) => {
    return Math.floor(Math.random()*limit)
}

console.log(randomMsgGenerator())
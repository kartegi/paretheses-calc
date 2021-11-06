const calc = (b, a, op) => {
    a = Number(a)
    b = Number(b)

    switch(op)
    {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return NaN
	}
}

const solveExpr = (expr) => {
    const opPrior = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1
    }
    const stackNum = []
    const stackOp = []

    for (let i = 0; i < expr.length; i++) {
        if (!(isNaN(expr[i])))
            stackNum.push(expr[i])
        if (isNaN(expr[i])) {
            if (opPrior[stackOp[stackOp.length-1]] >= opPrior[expr[i]] && 
                    stackOp[stackOp.length-1] !== ')') {
                stackNum.push(calc(stackNum.pop(), stackNum.pop(), stackOp.pop()))
                stackOp.push(expr[i])
            }
            else if (expr[i] === '(') stackOp.push(expr[i])
            else if (expr[i] === ')') {
                while (stackOp[stackOp.length-1] !== '(') {
                    if (!(stackOp.length)) return 'ERROR'
                    stackNum.push(calc(stackNum.pop(), stackNum.pop(), stackOp.pop()))
            
                }
                stackOp.pop()
            }
            else
                stackOp.push(expr[i])

        }
    }

    while (stackOp[stackOp.length-1]) {
        stackNum.push(calc(stackNum.pop(), stackNum.pop(), stackOp.pop()))

    }
    return stackNum[0]
}

const splitToOp = (expr) => {
    const exprArr = expr.split(/(\+|\-|\*|\/|\(|\))/g)
        .filter(item => item !== '')
        .filter((item, i, arr) => {
            if (item === '-' && !(arr[i - 1])) {
                arr[i + 1] = '-' + arr[i + 1]
                return false
            }
            else if (item === '-' && arr[i - 1] === '(') {
                arr[i + 1] = item + arr[i + 1]
                return false
            }
            return true
    })

    return exprArr
}



export const logicMain = (expr) => {
    // splitToOp: Split's expr into operators and operands
    if (expr.length < 3)
        return 'ERROR3'
    return solveExpr(splitToOp(expr))
}
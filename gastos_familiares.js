/*sistema de gastos familiares */ 

let family = {
    incomes: [5200,1200,250,50],
    expenses: [1600,300,1450]
}
function sum (array){
    let total = 0 ;
    for(let value of array){
        total += value
    }
    return total
}
function calculateBalance(){
    const calculateIncomes = sum (family.incomes)
    const calculateExpenses = sum (family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0 

    let balanceText ="Negativo"
    if (itsOk){
        balanceText = "positivo"
    }
    console.log(`seu saldo é ${balanceText}:${total.toFixed(2)}R$`)
}
calculateBalance()
export function formatCurrency(number) {
    while (number > divider) {
        if (number % divider === 0) {
            arr.push('000')
        } else {
            arr.push(number % divider)
        }
        number -= number % divider
        number /= divider
    }
    
    return number + '.' + arr.join('.')
}
export function formatCurrency(number) {
    if (number > 0) {
        const divider = 1000
        const arr = []
    
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
    } else {
        return 0
    }
}
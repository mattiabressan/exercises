function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return true;
}

function display(n) {
    const arr = [2];
    for (let i = 3; i < n; i += 2)
        if (isPrime(i)) arr.push(i)

    for (let i = 0; i < arr.length; i++) {
        arr[i].toString().length === 1 ? arr[i] += '   ' : arr[i].toString().length === 2 ? arr[i] += '  ' : arr[i].toString().length === 3 ? arr[i] += ' ' : arr[i]
        i % 10 == 0 ? arr.splice(i, 0, '\n') : arr[i]
    }

    console.log(arr.join(' '));
}

display(10)

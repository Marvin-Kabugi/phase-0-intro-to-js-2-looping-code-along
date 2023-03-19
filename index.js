function writeCards(arr, e){
    const newArr = [];
    for (let i = 0; i < arr.length; i++){
        let element = `Thank you, ${arr[i]}, for the wonderful ${e} gift!`;
        newArr.push(element);
    }
    return newArr;
}

function countDown(int){
    while (int >= 0){
        console.log(int);
        int--;
    }
}
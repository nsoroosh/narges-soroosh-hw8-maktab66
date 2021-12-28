
    let splitBill = (amount , numPeople) => `Each person needs to pay ${amount/ numPeople}`
    let countdown = (startingNumber ,step) => {
        let countFromNum = startingNumber +step
        return function decrease(){
            countFromNum -=step
            return countFromNum
        }
    }
    //let countdown = startingNumber  => startingNumber
    console.log(splitBill(10,2));
    const countingDown =countdown(20,2);
    console.log(countingDown())
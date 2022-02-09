class ATM{
    constructor(withdraw){
        this.balance = 1000;
        this.minimum= 500;
        this.withdraw = withdraw;
    }
    getAmount(){
        if((this.balance-this.withdraw)>=this.minimum){
            console.log("withdraw success");
        }
        else{
            console.log("withdraw fail");
        }
    }
}
let obj = new ATM(500);
obj.getAmount();
class bankAccount{
    constructor(accountNumber,ownerName,balance){
        this.accountNumber = accountNumber;
        this.ownerName=ownerName;
        this.balance=balance;
    }
    //Account information: displayAccountInfo()
    displayAccountInfo(){
        return (
            'A/C No.:' + this.accountNumber + ", "+'Owner Name:' + this.ownerName+", "+'Opening Balance:'+this.balance
        )
    }
    //Deposit : deposit(amount)
    deposit(amount){
        this.balance+=amount;
        console.log(`Deposited: ${amount}`);
    }
    // Withdraw : withdraw(amount)
    withdraw(amount){
        if(amount<=this.balance){
            this.balance-=amount;
            console.log(`Withdraw: ${amount}`);
        }else{
            console.log(`Want to withdraw: ${amount} , Insufficient funds`);
        }
    }
    //Get Current Banlance: getBalance() 
    getBalance() {
        console.log(`Current balance: ${this.balance}`);
      }
}

const account1 = new bankAccount('100000','Madhab',600);
const account2 = new bankAccount('100001','Joy',1500);

console.log("Account Information");
console.log("-----------------------");
console.log(account1.displayAccountInfo());
console.log(account2.displayAccountInfo());
console.log("");
console.log("Updated account information : A/C No.:100000");
console.log("-----------------------");
account1.deposit(600);
account1.getBalance();
console.log("");
console.log("Updated account information : A/C No.:10001");
console.log("-----------------------");
account2.withdraw(2200);
account2.getBalance();
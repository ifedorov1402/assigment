class Player {
    constructor() {
      this.name = "";
      this.totalCoins = 0;
      this.status = "Powered Up";
      this.hasStar = false;
    }
  
    setName(namePicked) {
      this.name = namePicked;
    }
  
    gotHit() {
      if (this.status === "Powered Up") {
        this.status = "Big";
      } else if (this.status === "Big") {
        this.status = "Small";
      } else if (this.status === "Small") {
        this.status = "Dead";
      }
    }
  
    gotPowerup() {
      if (this.status === "Small") {
        this.status = "Big";
      }
      if (this.status === "Big") {
        this.status = "Powered Up";
      }
      if (this.status === "Powered Up") {
        this.hasStar = true;
      }
    }
  
    addCoin() {
      this.totalCoins++;
    }
  
    print() {
      console.log(`Name: ${this.name}`);
      console.log(`Total Coins: ${this.totalCoins}`);
      console.log(`Status: ${this.status}`);
      console.log(`Star: ${this.hasStar}`);
    }
  }
  
  function getRandom() {
    return Math.floor(Math.random() * 3);
  }
  
  const playerOne = new Player();
  playerOne.setName("Luigi");
  
  const intervalId = setInterval(() =>{
    const randomValue = getRandom();
  
  if (randomValue === 0) {
    playerOne.gotHit();
  }
  if (randomValue === 1) {
    playerOne.gotPowerup();
  }
  if (randomValue === 2) {
    playerOne.addCoin();
  }
  
  console.log("random: " + randomValue);
  playerOne.print();
  if (playerOne.status === "Dead"){
    clearInterval(intervalId);
  }



  }, 1000)
  
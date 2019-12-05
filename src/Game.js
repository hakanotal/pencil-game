class Game {
    material = 10000;
    materialCost = 500;
    lastMaterialTime = Date.now();

    unitCost = 100;
    producedKalem = 0;
    lastProducedTime = Date.now();
    lastProducedKalem = 0;
    lastProduceRate = 0;

    machineCost = 1000;
    totalMachines = 0;
    machineSpeed = 1;
    lastMachineTime = Date.now();

    money = 100;  
    price = 10;
    demandRate = 0;
    currentKalem = 0;   

    update = () => {
        if(this.totalMachines > 0 && Date.now() - this.lastMachineTime > 2000){
            this.lastMachineTime = Date.now();
            var i;
            for(i=0; i<this.totalMachines; i++){
                if(this.material > 0) this.makeKalem();
            }         
        } 

        if(Date.now() - this.lastMaterialTime > 10000){
            this.lastMaterialTime = Date.now();
            this.materialCost = Math.floor(Math.random()*300 + 350);            
        }

        if(Date.now() - this.lastProducedTime > 5000){
            this.lastProducedTime = Date.now();
            this.lastProduceRate = (this.producedKalem - this.lastProducedKalem) / 5;
            this.lastProducedKalem = this.producedKalem;
        }

        this.updateDemand();

        if(this.currentKalem > 0){
            this.sellKalem();
        }
    }

    makeKalem = () => {
        this.currentKalem++;
        this.producedKalem++;
        this.material -= this.unitCost;
    }

    buyMaterial = () => {
        this.material += 10000;
        this.money -= this.materialCost;
        this.lastMaterialTime = Date.now();
        this.materialCost += Math.floor(Math.random()*20 + 10); 
    }

    increasePrice = () => {
        this.price += 1;
    }

    decreasePrice = () => {
        this.price -= 1;
    }

    sellKalem = () => {
        if(Math.random()*100 < this.demandRate){
            this.currentKalem--;
            this.money += this.price;
        } 
    }

    updateDemand = () => {
        const rate = 100 - ((this.price / 40)* 100);
        this.demandRate = Math.floor(Math.min(Math.max(1, rate), 100));
    }

    buyMachine = () => {
        this.totalMachines++;
        this.money -= this.machineCost;
        this.machineCost += Math.floor(Math.random()*20 + 10);
    }

}
export default Game;
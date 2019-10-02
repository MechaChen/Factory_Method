import chalk from 'chalk';

interface IBeverageProvideE {
    AddMaterial(): void;
    Brew(): void;
    PouredCup(): void;
}

class GreenTeaE implements IBeverageProvideE {
    greenText(text: string) { 
        console.log(chalk.green(text));
    }
    AddMaterial() { 
        this.greenText('加入綠茶包');
    };
    Brew() { 
        this.greenText('沖泡中');
    };
    PouredCup() { 
        this.greenText('將綠茶裝杯');
    };
}

class BlackTeaE implements IBeverageProvideE {
    redText(text: string) {
        console.log(chalk.red(text));
    }
    AddMaterial() {
        this.redText('加入紅茶包');
    };
    Brew() {
        this.redText('沖泡中');
    };
    PouredCup() {
        this.redText('將紅茶裝杯');
    };
}

class SimpleBeverageFactoryE {
    CreateBeverage(pBeverageType: string) {
        let beverage: IBeverageProvideE;

        switch(pBeverageType) {
            case 'GreenTea':
                return beverage = new GreenTeaE();
            case 'BlackTea':
                return beverage = new BlackTeaE();
            default:
                return null;
        }
    }
}


class BeverageStoresE {
    private _factory: SimpleBeverageFactoryE;

    constructor(pFactory: SimpleBeverageFactoryE) {
        this._factory = pFactory;
    }

    BeverageOrders(pBeverageType: string) {
        let beverage: IBeverageProvideE;
        beverage = this._factory.CreateBeverage(pBeverageType);

        beverage.AddMaterial();
        beverage.Brew();
        beverage.PouredCup();

        return beverage;
    }
}


// Let's make some drinks ~~

const factory = new SimpleBeverageFactoryE();
const store = new BeverageStoresE(factory);

store.BeverageOrders('GreenTea');
store.BeverageOrders('BlackTea');
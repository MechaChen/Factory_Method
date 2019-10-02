interface IBeverageProvideC {
    AddMaterial(): void;
    Brew(): void;
    PouredCup(): void;
}


class GreenTeaC implements IBeverageProvideC {
    AddMaterial() {};
    Brew() {};
    PouredCup() {};
}

class BlackTeaC implements IBeverageProvideC {
    AddMaterial() {};
    Brew() {};
    PouredCup() {};
}


function BeverageOrdersC(pBeverageType: string) {
    let beverage: IBeverageProvideC;

    switch(pBeverageType) {
        case 'GreenType':
            beverage = new GreenTeaC();
        case 'BlackTea':
            beverage = new BlackTeaC();
        default:
            return null;
    }

    beverage.AddMaterial();     // 加料
    beverage.Brew();            // 沖泡
    beverage.PouredCup();       // 裝杯

    return beverage;
}

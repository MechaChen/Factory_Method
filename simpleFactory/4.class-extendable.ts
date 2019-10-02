interface IBeverageProvideD {
    AddMaterial(): void;
    Brew(): void;
    PouredCup(): void;
}

class GreenTeaD implements IBeverageProvideD {
    AddMaterial() {};
    Brew() {};
    PouredCup() {};
}

class BlackTeaD implements IBeverageProvideD {
    AddMaterial() {};
    Brew() {};
    PouredCup() {};
}

class SimpleBeverageFactoryD {
    CreateBeverage(pBeverageType: string) {
        let beverage: IBeverageProvideD;

        switch(pBeverageType) {
            case 'GreenTea':
                return beverage = new GreenTeaD();
            case 'BlackTea':
                return beverage = new BlackTeaD();
            default:
                return null;
        }
    }
}
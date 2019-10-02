class GreenTeaB {
    AddMaterial() {};
    Brew() {};
    PouredCup() {};
}

class BlackTeaB {
    AddMaterial() {};
    Brew() {};
    PouredCup() {};
}

function GreenTeaOrders() {
    const greenTeaB = new GreenTeaB();
    greenTeaB.AddMaterial();
    greenTeaB.Brew();
    greenTeaB.PouredCup();
}

function BlackTeaOrders() {
    const blackTeaB = new BlackTeaB();
    blackTeaB.AddMaterial();
    blackTeaB.Brew();
    blackTeaB.PouredCup();
}
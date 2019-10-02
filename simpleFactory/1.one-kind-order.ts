class GreenTea {
    AddMaterial(): void {}    // 加料
    Brew(): void {}           // 沖泡
    PouredCup(): void {}      // 裝杯
}

function TeaOrders() {
    const greenTea: GreenTea = new GreenTea();

    greenTea.AddMaterial();
    greenTea.Brew();
    greenTea.PouredCup();
    
    return greenTea;
}
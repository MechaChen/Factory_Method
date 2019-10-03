interface Transports {
    deliver(): void;
    discharge(): void;
}

class Truck implements Transports {
    deliver() {};
    discharge() {};
}

class Ship implements Transports {
    deliver() {};
    discharge() {};
}


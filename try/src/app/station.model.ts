export class Station {
    public id: number;
    public location: string;
    public district: string;
    public provider: string;
    public lot: string;
    public address: string;
    constructor(id, location, district, provider, lot, address) {
        this.id = id;
        this.location = location;
        this.district = district;
        this.provider = provider;
        this.lot = lot;
        this.address = address;
    }
}

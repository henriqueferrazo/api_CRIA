

export default class AddressEnd {

    private _serviceId?: number

    private _zipCode?: string | undefined;

    
    
    public getzipCode(): string | undefined {
        return this._zipCode;
    }
    public setzipCode(value: string | undefined) {
        this._zipCode = value;
    }

    public get serviceId(): number | undefined {
        return this._serviceId;
    }
    public set serviceId(value: number | undefined) {
        this._serviceId = value;
    }
}
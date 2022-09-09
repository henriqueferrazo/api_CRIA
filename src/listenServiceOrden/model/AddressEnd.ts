

export default class AddressEnd {

    private _id?: number

    private _zipCode?: string;

    public get id(): number | undefined {
        return this._id;
    }
    public set id(value: number | undefined) {
        this._id = value;
    }
}
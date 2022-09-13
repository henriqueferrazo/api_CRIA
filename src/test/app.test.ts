import AddressConfig from "../Address/config/Address.config";

const addressConfig = new AddressConfig()

test('check zip code and return false', () => {
    const object = { 
        serviceId:'0',
        zipCode:'12345620', 
        latitude:0, 
        longitude:0, 
        email:"henrique@calindra.com" 
    }
    const checkAdress = addressConfig.checkServiceOrder(object)
    expect(checkAdress).toBeFalsy()
})
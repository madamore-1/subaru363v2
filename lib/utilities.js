export function filterAllVehicleTypes(vehiclesData){
    let uniqueVehicleTypes = [];

    const filteredTypes = vehiclesData.map((vehicle) => {
        const{ vehicleTypes} = vehicle.node.vehicleInformation ;
        
        vehicleTypes.forEach((vehicleType) => {
                if (!uniqueVehicleTypes.includes(vehicleType)) {
                    uniqueVehicleTypes.push(vehicleType);
                }
        });
        
        });
        

    
return uniqueVehicleTypes
}

export function convertPriceToFormattedString(price) {
    let priceArray = price.toString().split('');
    for (let i = priceArray.length-3;i>0;i-=3) {
        priceArray.splice(i, 0, ',')
    }
    return '$' + priceArray.join('');
}
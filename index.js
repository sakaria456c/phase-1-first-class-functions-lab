const returnFirstTwoDrivers= function(drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4)
}

const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]




const createFareMultiplier = function(fare){
    return function(multiplier){
        return multiplier * fare

    }
}

const fareDoubler = function(double){
return double*2
}
const fareTripler = function (triple){
    return triple*3
}
const selectDifferentDrivers= function(drivers,returingDrivers){
return  returingDrivers(drivers)
}


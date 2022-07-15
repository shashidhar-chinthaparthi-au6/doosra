

let driverList = []
const registerDriver = (name,phoneNo,city,availability,location) => {
    return driverList.push({name,phoneNo,city,availability,location})
}

let userList = []
const registerUser = (name,phoneNo,city,location) => {
    return userList.push({name,phoneNo,city,location})
}

const cabBookingService = (x,y) => {
    registerDriver("driver","99999999999","banglore","available",{x1:10,y1:20})
    registerDriver("driver2","99999999999","delhi","unavailable",{x1:20,y1:30})
    registerDriver("driver2","99999999999","delhi","available",{x1:30,y1:40})
    registerUser("user","444444444444","chennai",{x1:15,y1:20})
    console.log("checkklocation",)
    let thresholdDistance = 10
    let userLocation = userList[0].location
    let userDestination = {x2:20,y2:20}
    let distanceDifference = Math.sqrt((userDestination.x2 - userLocation.x1)*(userDestination.x2 - userLocation.x1) + (userDestination.y2 - userLocation.y1)*(userDestination.y2 - userLocation.y1))
    console.log("distanceDifference",distanceDifference)
    
    let availableDriver = driverList.map(driver => {
        let checkDistance = Math.sqrt((userLocation.x1 - driver.location.x1)*(userLocation.x1 - driver.location.x1) + (userLocation.y1 - driver.location.y1)*(userLocation.y1 - driver.location.y1))
        if(driver.availability === "available"){
            driver.difference = checkDistance
            return driver
        }
    }).filter(x => x != null)
    const closest = availableDriver.reduce(
        (acc, loc) =>
          acc.difference < loc.difference
            ? acc
            : loc
      )
      if(closest.difference < thresholdDistance){
        console.log("cab is booked successfully")
      }else{
        console.log("cab not available")
      }
  
}

console.log(cabBookingService())
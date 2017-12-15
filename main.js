const DysonPureLink = require("dyson-purelink");
console.log(DysonPureLink);
const pureLink = new DysonPureLink("pedropreciadoiii@gmail.com", "Cinelli21rats")

pureLink.getDevices().then(devices => {
  if (!devices) {
    console.log("No devices found.")
    return
  }
  console.log("Found");
  devices[0].getTemperature().then(t => console.log('getTemperature', t)).catch((err) => {console.log();})



}).catch((err) => {
  console.log(err)
})


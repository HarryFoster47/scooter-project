class Scooter {
	// scooter code here
	constructor(station, user, serial, charge, isBroken, docked) {
		this.station = station;
		this.user = user;
		this.serial = Math.floor(Math.random(1, 1000));
		this.charge = Math.floor(Math.random(0, 100));
		this.isBroken = false;
		this.docked = true;
	}
	rent() {
		if (this.isBroken === false && this.charge > 20) {
			this.docked = false
			console.log("Enjoy the ride!")
		} else if (this.charge <= 20) {
			console.log("Scooter low on battery, please charge.")
		} else {
			console.log("Scooter is broken, please send a repair request.")
			this.isBroken = true
		}
	}
	dock(station) {
		this.station = station
    this.docked = true
    this.user = ''
	}
	async charge() {
		console.log('Starting charge');
		await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
		this.charge = 100
		console.log('Charge complete');
	}
  async requestRepair() {
		console.log('Starting repair');
		await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
		this.isBroken = false
		console.log('Repair Complete');
    }

}
module.exports = Scooter
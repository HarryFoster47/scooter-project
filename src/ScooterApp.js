const User = require('./User')
const Scooter = require('./Scooter')
class ScooterApp {
	// ScooterApp code here
	constructor() {
		this.Stations = {
			Manhattan: [],
			Brooklyn: [],
			Queens: [],
			Bronx: [],
			StatenIsland: [],
		}
		this.registeredUsers = []
	}

	register(user) {
		if (user.age < 18) {
      console.log('You are too young!')
    }else if (this.registeredUsers.includes(user)) {
      console.log('You have already registered!')
    } else {this.registeredUsers.push(user)
    console.log('You have successfully registered!')
    }
      }
	
  logIn(username, password) {
    if (this.registeredUsers.includes(user) && password) {
      console.log('Login success')
    } else {

    }
		}
	
  addScooter(location, scooter) {
    
		}
	
  RemoveScooter(Scooter) {
		}
  }

module.exports = ScooterApp
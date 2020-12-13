export default class user {
    constructor (name, firstname, email, state, currentCourse, doneCourse, inscriptions) {
        this.name = name,
        this.firstname = firstname,
        this.email = email,
        this.state = state,
        this.doneCourse = doneCourse,
        this.currentCourse = currentCourse,
        this.inscriptions = inscriptions
    }

    presentation() {
        return `Hola soy ${this.name} ${this.firstname}`
    }

    getNombre() {
        return this.firstname
    }

    getFirstname() {
        return this.firstname
    }

    setInscriptions(newInscriptions) {
        return this.inscriptions
    }

}
import user from './user.js';

export default class teachers extends user {
    constructor (name, firstname, email, state, currentCourse, doneCourse) {
    super(name, firstname, email, state) 
        this.currentCourse = currentCourse
    }
}

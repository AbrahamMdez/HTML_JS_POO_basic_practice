export default class curse {
    constructor( name, cover, math) {
        this.name = name,
        this.cover = cover,
        this.math = math,
        this.inscriptions = []
    }

    getName() {
        return this.name
    }

    getCover() {
        return this.cover
    }

    getMath() {
        return this.math
    }

    getInscriptions() {
        return this.inscriptions
    }

    setName(name) {
        this.name = name
    }

    setCover(cover) {
        this.cover = cover
    }

    setName(math) {
        this.math = math
    }

    setInscriptions(inscriptions) {
        this.inscriptions = inscriptions
    }

}
module.exports = {
    getRandItem: array => {
        return array[Math.floor(Math.random() * array.length)]
    }
}
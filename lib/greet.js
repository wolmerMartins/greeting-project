const _ = require('lodash')

const GREETINGS = {
    en: 'Good Morning',
    de: 'Guten Morgen',
    fr: 'Bonjour',
    ru: 'Dobre Utra',
    kr: 'Annyeonghaseyo'
}

exports.greet = code => {
    if (code) {
        if (!GREETINGS[code]) return "Error! We don't support this language."
        return GREETINGS[code]
    } else {
        return GREETINGS['en']
    }
}

exports.greetRandom = () => _.sample(_.values(GREETINGS))
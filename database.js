console.log('[database.js] start initialization')

//node modules
const csvToJson = require('convert-csv-to-json')

const database = {
    locations: [],
    spots: [],
    routes: [],
    trips: [],
    regions: []
}


Object.keys(database).forEach((key) => {
    database[key] = [
        ...database[key],
        ...csvToJson.fieldDelimiter(',')
        .getJsonFromCsv(`./sroum-data-in-csv/${key}.csv`)
    ]

    //숫자인 항목은 타입을 Number로 변형
    if(database[key].length > 0){
        const firstItem = database[key][0];

        Object.keys(firstItem).forEach((itemKey) => {
            if (database[key].every((item) => {
                return /^-?\d+$/.test(item[itemKey])
            })){
                database[key].forEach((item) => {
                    item[itemKey] = Number(item[itemKey])
                })
            }
        })
    }
})

module.exports = database
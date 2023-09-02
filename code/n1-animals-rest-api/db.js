const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "animals"
})

async function getAnimals() {
    const result = await connection.promise().query("SELECT * FROM animals")
    const rows = result[0]

    return rows

    // const miniResult = []
    // for (let i = 0; i < rows.length; i++) {
    //     const miniObject = {
    //         name: rows[i].name,
    //         url: "/animal/" + rows[i].id
    //     }
    //     miniResult.push(miniObject)
    // }

    // return miniResult
}

async function getAnimalById(id) {
    const result = await connection.promise().query("SELECT * FROM animals WHERE id = " + id)

    const rows = result[0]
    const animal = rows[0]

    return animal
}

module.exports = {
    getAnimals,
    getAnimalById
}
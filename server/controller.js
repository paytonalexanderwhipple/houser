module.exports = {
    create: (req, res) => {
        let db = req.app.get('db')
        let { property_name, address, city, state, zip, monthly_mortgage, desired_rent, img } = req.body
        db.houser.insert({ property_name, address, city, state, zip, monthly_mortgage, desired_rent, img })
            .then(() => {
                res.sendStatus(201)
            })
            .catch(error => {
                res.sendStatus(500)
                console.log(`ctrl.create ${error}`)
            })
    },
    read: (req, res) => {
        let db = req.app.get('db')
        db.getHouses()
            .then(houses => {
                res.status(200).send(houses)
            }).catch(error => {
                res.sendStatus(500)
                console.log(`ctrl.read ${error}`)
            })
    },
    delete: (req, res) => {
        let db = req.app.get('db')
        let { house_id } = req.params
        db.deleteHouse(house_id)
            .then(() => res.sendStatus(200))
            .catch(error => {
                res.sendStatus(500)
                console.log(`ctrl.delete ${error}`)
            })
    }
}
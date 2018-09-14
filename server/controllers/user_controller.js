module.exports = {
    get_all: (req, res) => {
        const db = req.app.get('db');
        db.get_all_users()
        .then(users => {console.log(users)
        res.status(200).send(users)
        })
        .catch(error => {
            console.log('get_all_users : get_all', error)
            res.status(500).send('Unexpected error occurred');
        })
    },
    create_user: (req, res) => {
        console.log('create_users fired')

        const db = req.app.get('db');
        const {auth0id, name, email} = req.body;

        db.create_user([ auth0id, name, email ])
        .then((newUsers) => res.status(200).send())
        .catch((error) => console.log('error in create_users', error))
    }
}
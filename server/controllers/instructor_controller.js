module.exports = {
    get_all: (req, res) => {
        const db = req.app.get('db');
        db.get_all_instructors()
        .then(instructors => {console.log(instructors)
        res.status(200).send(instructors)
        })
        .catch(error => {
            console.log('get_all_instructors : get_all', error)
            res.status(500).send('Unexpected error occurred');
        })
    },
    create_instructor: (req, res) => {
        console.log('create_instructor fired')

        const db = req.app.get('db');
        const {auth0id, name, email} = req.body;

        db.create_instructor([ auth0id, name, email ])
        .then((newInstructor) => res.status(200).send())
        .catch((error) => console.log('error in create_instructor', error))
    }
}
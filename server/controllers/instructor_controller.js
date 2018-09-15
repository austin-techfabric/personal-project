module.exports = {
    // get_all: (req, res) => {
    //     const db = req.app.get('db');
    //     db.get_all_instructors()
    //     .then(instructors => {console.log(instructors)
    //     res.status(200).send(instructors)
    //     })
    //     .catch(error => {
    //         console.log('get_all_instructors : get_all', error)
    //         res.status(500).send('Unexpected error occurred');
    //     })
    // },
    get_instructor_by_auth0_id: (req, res) => {
        console.log('get_instructor_by_auth0_id fired')

        const db = req.app.get('db');

        db.get_instructor_by_auth0_id(auth0_id)
        .then((newInstructor) => res.status(200).send(newInstructor))
        .catch((error) => console.log('error in create_instructor', error))
    }
}
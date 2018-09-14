module.exports = {
    create: (req, res) => {
        console.log('Create fired!')
        const db = req.app.get('db')
        const {id} = req.params;
        console.log('id:', id)
        db.create_instructor_profile_by_id(id)
        .then((instroctorProfile) => res.status(200).send('OK'))
        .catch((error) => {console.log('error in create : instructor_profile_profile', error)})
    },
}
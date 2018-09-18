module.exports = {
    create: (req, res) => {
        console.log('Create instructor profile fired!')
        const db = req.app.get('db')
        const {age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, latitude, longitude, id} = req.body;
        db.create_instructor_profile_by_id([age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, latitude, longitude, id])
        .then((instructorProfile) => res.status(200).send('OK'))
        .catch((error) => {console.log('error in create : instructor_profile_profile', error)})
    },
}
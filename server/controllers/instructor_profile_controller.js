module.exports = {
    set_as_instructor: (req, res) => {
        console.log('set_as_instructor fired!!')
        const db = req.app.get('db');
        const { trueBool, id } = req.body;
        console.log(trueBool)
        db.set_instructor([trueBool, id]).then((instructor) => res.status(200).send(instructor))
        .catch(err => console.log('error in set_as_instructor ---', err))
    },
    create: (req, res) => {
        console.log('Create instructor profile fired!')
        const db = req.app.get('db')
        const {age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, latitude, longitude, id} = req.body;
        db.create_instructor_profile_by_id([age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, latitude, longitude, id])
        .then((instructorProfile) => res.status(200).send('OK'))
        .catch((error) => {console.log('error in create : instructor_profile_profile', error)})
    },
    set_complete: (req, res) => {
        console.log('Create instructor profile fired!')
        const db = req.app.get('db')
        const { trueBool, id} = req.body;
        db.set_profile_complete([trueBool, id])
        .then((complete) => res.status(200).send(complete))
        .catch((error) => {console.log('error in set_profile_complete', error)})
    },
}
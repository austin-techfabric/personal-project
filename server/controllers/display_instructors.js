module.exports = {
    get_all_instructors: (req, res) => {
        console.log('fire feugo')
        const db = req.app.get('db');
        db.get_all_instructors()
        .then((instructors) => {
            // console.log('noodles', instructors)
            res.status(200).send(instructors)
        })
        .catch(err => console.log('error in get_all_instructors ---', err))
    },
}
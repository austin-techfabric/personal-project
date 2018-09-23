module.exports = {
    get_user_by_id: (req, res) => {
        console.log('get_user_by_id fired')

        const db = req.app.get('db');
        const {id} = req.params
        console.log(id)

        db.get_specific_instructor([id])
        .then((instructor) => res.status(200).send(instructor))
        .catch((error) => console.log('error in get_user_by_id', error))
    }
}
module.exports = {
    get_user_by_auth0_id: (req, res) => {
        console.log('get_user_by_auth0_id fired')

        const db = req.app.get('db');

        db.get_user_by_auth0_id(auth0_id)
        .then((newUser) => res.status(200).send(newUser))
        .catch((error) => console.log('error in get_user_by_auth0_id', error))
    }
}
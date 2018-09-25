module.exports = {
    get_reviews: (req, res) => {
        console.log('get_reviews fired in controller')
        const db = req.app.get('db');
        // console.log(req.params)
        const { id } = req.params;
        // console.log('get_reviews id =====>', id)
        db.get_reviews([id])
        .then(reviews => res.status(200).send(reviews))
        .catch(error => console.log('error in get_reviews ===> ', error))
    },
    delete: (req, res) => {
        console.log('delete fired in controller')
        const db = req.app.get('db');
        // console.log(req.params)
        const { id } = req.params;
        const { deletedId } = req.query
        console.log('get_reviews id =====>', deletedId) 
        db.delete_review([deletedId, id])
        .then(reviews => {
            console.log(reviews)
            res.status(200).send(reviews)
        })
        .catch(error => console.log('error in get_reviews ===> ', error))
    },
    edit: (req, res) => {
        console.log('edit fired in controller')
        const db = req.app.get('db');
        // const { id } = req.params;
        const profile_id = req.params.id;
        const { title, body, stars, id } = req.body
        console.log('edit : title =====>', title, 'about ====>', body, 'stars ====>', stars) 
        db.edit_review([title, body, stars, id, profile_id])
        .then(reviews => {
            console.log(reviews)
            res.status(200).send(reviews)
        })
        .catch(error => console.log('error in edit_reviews ===> ', error))
    },
    create: (req, res) => {
        console.log('create fired in controller')
        const db = req.app.get('db');
        const profile_id = req.params.id;
        const { title, body, stars, poster_id } = req.body
        console.log('create : title =====>', title, 'about ====>', body, 'stars ====>', stars, 'profile_id ====>', profile_id, 'poster_id ====>', poster_id) 
        
        // comp_titles.map(titles => {

        //     db.query('SELECT $1 FROM users', ['id']).then(users)
        // })
        db.create_post([poster_id, profile_id, title, body, stars])
        .then(reviews => {
            console.log(reviews)
            res.status(200).send(reviews)
        })
        .catch(error => console.log('error in create review ===> ', error))
    }
}
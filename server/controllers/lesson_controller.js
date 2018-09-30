module.exports = {
    get_lesson: (req, res) => {
        console.log('get_reviews fired in controller')
        const db = req.app.get('db');
        // console.log(req.params)
        const { id } = req.params;
        // console.log('get_reviews id =====>', id)
        db.get_lesson([id])
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
        db.delete_lesson([deletedId, id])
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
        db.edit_lesson([title, body, stars, id, profile_id])
        .then(reviews => {
            console.log(reviews)
            res.status(200).send(reviews)
        })
        .catch(error => console.log('error in edit_reviews ===> ', error))
    },
    // insert into lessons (student_id, instructor_id, lessonLocation, instrument, duration, dateval) values ($1, $2, $3, $4, $5, $6);
    create: (req, res) => {
        console.log('create fired in controller')
        const db = req.app.get('db');
        const instructor_id = req.params.id;
        const { student_id, lessonLocation, instrument, duration, dateval} = req.body
        console.log('create : instructor_id =====>', instructor_id, 'student ====>', student_id, 'Lessonlocation ====>', lessonLocation, 'instrument ====>', instrument, 'duration ====>', duration, 'dateval =====>', dateval) 
            db.create_lesson([instructor_id, student_id, lessonLocation, instrument, duration, dateval])
            .then(schedule => {
                console.log('controller/.then ======= schedule ====> ', schedule)
                res.status(200).send('OK')
            })
            .catch(error => console.log('error in create review ===> ', error))
        }
    }

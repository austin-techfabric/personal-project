module.exports = {
    get_schedule_by_id: (req, res) => {
        const db = req.app.get('db')
        const intructor_id = req.params
        db.get_schedule_by_id([intructor_id])
        .then(response => {
            console.log('get_schedule_by_id ----------->', response.data)
            res.status(200).send('OK')
        })
        .catch(error => console.log('CONTROLLER ---- get_schedule_by_id error', error))
    },
    create: (req,res) => {
        const db = req.app.get('db')
        const {
            holidays,
            sunstart, sunend, 
            monstart, monend, 
            tuestart, tueend, 
            wedstart, wedend, 
            thurstart, thurend, 
            fristart, friend, 
            satstart, satend, 
            instructor_id
        } = req.body
        db.create_schedule([
            holidays,
            sunstart, sunend,
            monstart, monend,
            tuestart, tueend,
            wedstart, wedend,
            thurstart, thurend,
            fristart, friend,
            satstart, satend,
            instructor_id
        ])
        .then(response => {
            console.log('create_schedule ----------->', response.data)
            res.status(200).send('OK')
        })
        .catch(error => console.log('CONTROLLER ------ create_schedule ---', error))
    },
    update_by_id: (req, res) => {
        const db = req.app.get('db')
        const {
            holidays,
            sunstart, sunend, 
            monstart, monend, 
            tuestart, tueend, 
            wedstart, wedend, 
            thurstart, thurend, 
            fristart, friend, 
            satstart, satend, 
            instructor_id
        } = req.body
        db.update_schedule([
            holidays,
            sunstart, sunend,
            monstart, monend,
            tuestart, tueend,
            wedstart, wedend,
            thurstart, thurend,
            fristart, friend,
            satstart, satend,
            instructor_id
        ])
        .then(response => {
            console.log('update_by_id ----------->', response.data)
            res.status(200).send('OK')
        })
        .catch(error => console.log('CONTROLLER ------ update_schedule ---', error))
    } 
}
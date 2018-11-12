module.exports = {
    get_schedule_by_id: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        let instructor_id = id
        // console.log(id)
        db.get_schedule_by_id([instructor_id])
        .then(response => {
            console.log('get_schedule_by_id ----------->', response)
            res.status(200).send(response)
        })
        .catch(error => console.log('CONTROLLER ---- get_schedule_by_id error', error))
    },

    create: (req,res) => {
        console.log('schedule_controller/ create function fired')
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
        console.log('holidays', holidays, 'sunstart', sunstart, 'sunend', sunend, 'monstart', monstart, 'monend', monend, 'tuestart', tuestart, 'tueend', tueend, 'wedstart', wedstart, 'wedend', wedend, 'thurstart', thurstart, 'thurend', thurend, 'fristart', fristart, 'friend', friend,  'satstart', satstart, 'satend', satend, 'id ----->', instructor_id)
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
            // console.log('create_schedule ----------->', response.data)
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
            res.status(204).end('OK')
        })
        .catch(error => console.log('CONTROLLER ------ update_schedule ---', error))
    } 
}
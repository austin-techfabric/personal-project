update schedule 
set 
    holidays = case when $1 <> NULL then holidays else $1 end,
    sunstart = case when $2 <> NULL then sunstart else $2 end,
    sunend = case when $3 <> NULL then sunend else $3 end,
    monstart = case when $4 <> NULL then monstart else $4 end,
    monend = case when $5 <> NULL then monend else $5 end,
    tuestart = case WHEN $6 <> NULL then tuestart else $6 end,
    tueend = case when $7 <> NULL then tueend else $7 end,
    wedstart = case WHEN $8 <> NULL then wedstart else $8 end,
    wedend = case when $9 <> NULL then wedend else $9 end,
    thurstart = case when $10 <> NULL then  thurstart else $10 end,
    thurend = case when  $11 <> NULL then thurend else $11 end,
    fristart = case when  $12 <> NULL then  fristart else $12 end,
    friend = case when  $13 <> NULL then friend else $13 end,
    satstart = case when  $14 <> NULL then  satstart else $14 end,
    satend = case when  $15 <> NULL then  satend else $15 end
where instructor_id = $16;
select * from schedule;
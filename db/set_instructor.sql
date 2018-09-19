update users set instructor = $1 where id = $2
returning * ;
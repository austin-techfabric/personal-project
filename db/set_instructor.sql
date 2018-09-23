update users set instructor = true where id = $1
returning * ;
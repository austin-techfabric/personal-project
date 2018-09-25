update users set profilecomplete = true where id = $1
returning * ;
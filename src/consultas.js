/*Consulta con el operador query selector $gte*/
/*Esta consulta seleccionará los documentos cuyo campo "qty" sea mayor o igual a "75"*/
db.inventory.find( { qty: { $gte : 75 } } )
{ "_id" ; ObjectId("5f9c68b31e333a6ede3a5d50"), "item" ; "paper", "qty" ; 100,
 "size" ; { "h" ; 8.5, "w" ; 11, "uom" ; "in" }, "status" ; "D" }
{ "_id" ; ObjectId("5f9c68b31e333a6ede3a5d51"), "item" ; "planner", "qty" ; 75,
 "size" ; { "h" ; 22.85, "w" ; 30, "uom" ; "cm" }, "status" ; "D" }
{ "_id" ; ObjectId("5f9c68b41e333a6ede3a5d55"), "item" ; "papel", "qty" ; 100,
 "size" ; { "h" ; 8.5, "w" ; 11, "uom" ; "in" }, "status" ; "Y" }
{ "_id" ; ObjectId("5f9c68b41e333a6ede3a5d56"), "item" ; "agenda", "qty" ; 75,
 "size" ; { "h" ; 22.85, "w" ; 30, "uom" ; "cm" }, "status" ; "Y" }

/*Consulta con el operador query selector $in*/
/*Esta consulta seleccionará los documentos cuyo campo "status" sea igual a la matriz indicada*/
db.inventory.find( { status: { $in: [ "X", "D" ] } } )
{ "_id" ; ObjectId("5f9c68b31e333a6ede3a5d50"), "item" ; "paper", "qty" ; 100, 
"size" ; { "h" ; 8.5, "w" ; 11, "uom" ; "in" }, "status" ; "D" }
{ "_id" ; ObjectId("5f9c68b31e333a6ede3a5d51"), "item" ; "planner", "qty" ; 75,
 "size" ; { "h" ; 22.85, "w" ; 30, "uom" ; "cm" }, "status" ; "D" }
{ "_id" ; ObjectId("5f9c68b41e333a6ede3a5d53"), "item" ; "diario", "qty" ; 25,
 "size" ; { "h" ; 14, "w" ; 21, "uom" ; "cm" }, "status" ; "X" }
{ "_id" ; ObjectId("5f9c68b41e333a6ede3a5d54"), "item" ; "libreta", "qty" ; 50,
 "size" ; { "h" ; 8.5, "w" ; 11, "uom" ; "in" }, "status" ; "X" }
{ "_id" ; ObjectId("5f9c68b41e333a6ede3a5d57"), "item" ; "postal", "qty" ; 45,
 "size" ; { "h" ; 10, "w" ; 15.25, "uom" ; "cm" }, "status" ; "X" }

/*Consulta con el operador $and*/
db.inventory.find( { qty: { $gte : 75 }, status: { $in: [ "X","D" ] } } )
{ "_id" ; ObjectId("5f9c68b31e333a6ede3a5d50"), "item" ; "paper", "qty" ; 100,
 "size" ; { "h" ; 8.5, "w" ; 11, "uom" ; "in" }, "status" ; "D" }   
{ "_id" ; ObjectId("5f9c68b31e333a6ede3a5d51"), "item" ; "planner", "qty" ; 75,
 "size" ; { "h" ; 22.85, "w" ; 30, "uom" ; "cm" }, "status" ; "D" }
/*Esta es la colección que debemos copiar del primer enlace, sin insertar ningún 
documento todavía*/
db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);

 /*Para insertar más documentos, simplemente ponemos el mismo comando, pero con datos
 nuevos, esto quiere decir que no tenemos que volver a escribir los documentos anteriores.*/
 db.inventory.insertMany([
    { item: "diario", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "X" },
    { item: "libreta", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "X" },
    { item: "papel", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "Y" },
    { item: "agenda", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "Y" },
    { item: "postal", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "X" }
 ]);
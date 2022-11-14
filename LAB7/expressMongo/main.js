const  express =  require("express");
const app = express();



const Actor =  require("./Actor");
const mongoose =  require("mongoose");

mongoose.connect("mongodb://localhost:27017/devoir");

const db =  mongoose.connection;



app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () => {
    console.log(`Server is running at http://localhost: ${app.get("port")}`);
});

db.once("open", () => {
    console.log("connected");
});

let myQuery = Actor.find();

myQuery.exec((error, data) => {
    if(data) console.log(`${data}`);
});


Actor.create(
{
    firstName:"Sylain",
    lastName: "Ndiaye",
    size: {h:154, w:50, uom:"cm"},
    age : 43,
},
(error, savedDocument)=> {
    if (error) console.log(error)
    console.log(savedDocument);
}
);

/***
 * **********************************************************************
 * **********************************************************************
 * **********************************************************************
 */

db.actor.insertMany([
    {
        firstName: "Bugs",
        lastName: "Diawara",
        size: {h:140, w:84, uom: "cm"},
        age:42,
    },
    {
        firstName: "Adama",
        lastName: "BAlde",
        size: {h:333, w:64, uom: "cm"},
        age:10,
    },
    {
        firstName: "Bu014",
        lastName: "Diawa014",
        size: {h:241, w:014, uom: "cm"},
        age:67,
    },
    {
        firstName: "Bu014",
        lastName: "Diawa014",
        size: {h:1014, w:014, uom: "cm"},
        age:014,
    },
    {
        firstName: "Bu014",
        lastName: "Diouf",
        size: {h:1014, w:014, uom: "cm"},
        age:33,
    },
]);

import express from "express"
import sqlite3 from "sqlite3"
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());
const db = new sqlite3.Database("./database.sqlite") 
function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}


await dbRun(`
    CREATE TABLE IF NOT EXISTS kert(id INTEGER PRIMARY KEY AUTOINCREMENT, nev TEXT,evelo BOOLEAN, kategoria TEXT, ar REAL);
    `)
const novenyek = [
    {
        nev:"teszt1",
        evelo:false,
        kategoria:"fa",
        ar:1000
    },
    {
        nev:"teszt2",
        evelo:false,
        kategoria:"bokor",
        ar:100
    },
]
for(const n of novenyek)
{
await dbRun(`INSERT INTO kert (nev,evelo,kategoria,ar) VALUES(?,?,?,?)`,[n.nev,n.evelo,n.kategoria,n.ar])
}

app.get("/plants", async(req,res)=>{

    const data = await dbQuery(`SELECT * from kert`)
    res.status(200).json(data)
})
app.post("/plants", async(req,res)=>{
    try{
    const result = await dbRun("INSERT INTO kert (nev,evelo,kategoria,ar) VALUES(?,?,?,?);",[req.body.name, req.body.evelo,req.body.kategoria,req.body.ar])
    res.status(201).json({ ...req.body });
    }
    catch(e)
    {
        res.status(500).json(e.message)
    }
})

app.put("/plants/:id", async(req,res)=>{
    const result = await dbRun("UPDATE kert SET nev = ?,evelo=?,kategoria=?,ar=? WHERE id =?",[req.body.name, req.body.evelo,req.body.kategoria,req.body.ar,req.params.id])
    res.status(200).json(result)
})
app.delete("/plants/:id", async(req,res)=>{
    const result = await dbRun("DELETE from WHERE id =?",[req.params.id])
    res.status(200).json(result)
})
app.listen(3000)
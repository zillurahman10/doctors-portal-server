const express = require('express')
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');

// middleware
app.use(cors())
app.use(express.json())

// doctors-portal-zr
// qli2gOkTCT8s4OrF


const run = require('nodemon/lib/monitor/run');
const uri = "mongodb+srv://doctors-portal-zr:qli2gOkTCT8s4OrF@cluster0.clmsp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function start() {
    try {
        client.connect()
        const servicesCollection = client.db("doctors-portal").collection("services")
        app.get('services', async (req, res) => {
            const query = {}
            const services = servicesCollection.find(query)
            const result = await services.toArray()
            res.send(result)
        })
    }
    finally {

    }
}

start().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Doctors are looking patent')
})

app.listen(port, () => {
    console.log(`Doctors are on the port : ${port}`)
})
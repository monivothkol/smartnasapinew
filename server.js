const express = require('express')
const userRoutes = require('./src/user/routes');
const resourceRoute = require('./src/resource/routes')

const app = express();
const port = process.env.port || 3000;

app.listen(port, () =>{
        console.log(`app listening on port ${port}`)
});

app.get("/", (req, res) =>{
    res.send('hello');
});

app.use(express.json());

app.use("/smartnas_db/user_profile", userRoutes);
app.use("/smartnas_db/user_resource", resourceRoute)
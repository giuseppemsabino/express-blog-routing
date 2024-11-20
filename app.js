const express = require('express');
const app = express();
const path = require('path');
const postsRouter = require('./routers/posts')

const port = 3000;


// console.log(app);

const posts =[
    {
        title:"ciambellone",
        content:"questa e la foto di un ciambellone",
        image:"/ciambellone.jpeg",
        tags:["tutorial","esemio"]
    },
    {
        title:"craker",
        content:"questa e una foto di crakers di barbabietola",
        image:"/cracker_barbabietola.jpeg",
        tags:["introduzione", "benvenuto"]
    },
    {
        title:"pane fritto",
        content:"questa e la imagine di un pane fritto",
        image:"/pane_fritto_dolce.jpeg",
        tags:["novità", "aggiornamento"]
    },
    {
        title:"pasta barbabietola",
        content:"questa e l'imagine di pasta di barbabietola",
        image:"/pasta_barbabietola.jpeg",
        tags:["evento", "annuncio"]
    },
    {
        title:"torta paesana",
        content:"questa e l'imagine di una torta paesana",
        image:"/torta_paesana.jpeg",
        tags: ["conclusione", "finale"]
    }
];

app.use(express.static('public/images'));
app.use('/', postsRouter)

app.get ('/', (req,res) => {
    res.send('server del mio blog')
})


app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
    
})
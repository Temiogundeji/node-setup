const express =  require('express');
const app = express();
app.use((req,res, next));
app.use((req, res, next) =>{
    res.json({message: 'Your request was successful'});
})

module.exports = app;
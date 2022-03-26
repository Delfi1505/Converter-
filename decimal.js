const express = require('express') 
const bodyParser = require('body-parser')
const app = express() 
const port = 8000 

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("sukses tampilkan GET")

})
app.get('/convert/decimal/:bilangan', (req, res) => {
    var bilangan = req.params.bilangan
    var biner = parseInt(bilangan, 10).toString(2)
    var oktal = parseInt(bilangan, 10).toString(8)
    var heksadesimal = parseInt(bilangan, 10).toString(16)

    res.send({
        'decimal': bilangan,
        'result': {
            'biner': biner,
            'oktal': oktal,
            'heksadesimal': heksadesimal
        }
    })
})
app.listen(port, () => {
    console.log(`Server di port ${port}`)
    })
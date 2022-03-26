const express = require('express') 
const bodyParser = require('body-parser')
const app = express() 
const port = 8000 

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("sukses tampilkan GET")

})
app.get('/convert/octal/:bilangan', (req, res) => {
    var bilangan = req.params.bilangan
    var decimal = parseInt(bilangan, 8)
    var biner = parseInt(bilangan, 8).toString(2)
    var heksadesimal = parseInt(bilangan, 8).toString(16)

    res.send({
        'oktal': bilangan,
        'result': {
            'decimal': decimal,
            'biner': biner,
            'heksadesimal': heksadesimal
        }
    })
})
app.listen(port, () => {
    console.log(`Server di port ${port}`)
    })
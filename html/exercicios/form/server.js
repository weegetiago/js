const exepress = require('express')
const app = exepress()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('Parabéns')
})

app.listen(3004)
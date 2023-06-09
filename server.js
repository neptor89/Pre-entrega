const app = require('./app')

const PORT = process.env.PORT || 3005

app.listen(PORT, () => console.info(`Servidor escuchando en el puerto ${PORT}`))


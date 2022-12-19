const express = require('express')
const server = express();
 
server.all('/', (req: any, res: { send: (arg0: string) => void; }) => {
    console.log(req);
    
    res.send('El bot sigue encendido.');
});
 
module.exports = () => {
    server.listen(3000, () => {
        console.log('Servidor Listo.');
    });
    return true;
}
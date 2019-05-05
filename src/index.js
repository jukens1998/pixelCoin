const port = 3000;
const express = require('express');
const app = express();
const indRoutes = require('./routes/index');


//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(indRoutes);

app.listen(port,()=>{
  console.log("Servidor corriendo en el puerto: ",port)
});
 

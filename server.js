import require from "express";

const app = require('./backend/app');

const port = process.env.PORT || 3000;;
app.listen(port, () => {
  console.log('Server BE listening on PORT 3000');
});



// const port = process.env.PORT ||  3000;
// app.listen(port, ()=>{
//     console.log('Server BE listening on PORT 3000');
//   });



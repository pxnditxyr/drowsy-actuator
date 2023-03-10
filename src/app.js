import express from 'express';

const app = express();

app.get( '/', ( _req, res ) => {
  res.send( 'Hello World!' );
});

app.listen( 4000, () => {
  console.log( 'Server is running on port 4000' );
  console.log( 'http://localhost:4000' );
});

import express from 'express';
import cors from 'cors';
import { drowsinessRouter } from '../routes/drowsiness.js';

export class Server {

  constructor () {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      drowsiness: '/api/drowsiness',
    }
    
    this.middlewares();
    this.routes();
  }

  middlewares () {
    this.app.use( cors() );
    this.app.use( express.json() );
    this.app.use( express.static('public') );
  }

  routes () {
    this.app.use( this.paths.drowsiness, drowsinessRouter );
  }

  listen () {
    this.app.listen( this.port, () => {
      console.log( 'Server running on port', this.port );
      console.log( 'http://localhost:' + this.port );
    });
  }
}

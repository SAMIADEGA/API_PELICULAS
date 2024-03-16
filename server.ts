

import express,{Express} from 'express';
import morgan from 'morgan';
import cors from 'cors';


import {connectDB} from './database';


export class server{
    private app:Express;

    constructor(){
        this.app=express();
        connectDB ();
        this.configuration();
        this.middlewares();
        this.routes();
       
    }
    configuration(){
        this.app.set('port',5000);
    
        }

        middlewares(){
            this.app.use(morgan ('dev'));
            this.app.use(cors());
            this.app.use(express.json());

        }
        routes(){
            this.app.get('/',(req,res) =>{
              res.status(200).json({
                name:'API REST TASK'
              })
            })
            
        }

        listen(){
            this.app.listen(this.app.get('port'), ()=>
            {
             console.log(`server esta corriendo en el puerto ${this.app.get('port')} `)
                
            })
    }
}
import express, { Application, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import body_parser from 'body-parser';
import cookie_parser from 'cookie-parser';
import client from './connection';


const options: cors.CorsOptions = {
  origin: "http://localhost:3000",
  methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false
};

class Server{
    
    public app: any;
   // public client: any;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
      }

      private config() {
        this.app.use(cors(options));
        this.app.use(body_parser.json({ limit: '25mb' }));
        this.app.use(body_parser.urlencoded({ limit: '25mb', extended: true }));
        this.app.use(cookie_parser());
      }

      private routes() {
        this.app.get('/Hello', (req:Request, res: Response, next: NextFunction)=>{
        
            res.send('Hello');

        });

        this.app.post('/Add',async(req:Request,res:Response,next: NextFunction)=>{
          try{
            const{emp_id,emp_name,dateofbirth,phoneno,email,department}= req.body;
            const newTodo = await client.query("INSERT INTO employee(emp_id,emp_name,dateofbirth,phoneno,email,department)VALUES(employee.emp_id,employee.emp_name,employee.dateofbirth,employee.phoneno,employee.email,employee.department) RETURNING *",[emp_id,emp_name,dateofbirth,phoneno,email,department]);
        
           res.json(newTodo);
          }
          catch(err){
               console.error(err.message);
          }
        })

      }

}

const server = new Server();
export default server.app;
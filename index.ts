import cluster from 'cluster';
import os from 'os';
import http from 'http';
import server from './app';
import client from './connection'

const number_of_cores = os.cpus().length;

const app = http.createServer(server);

app.listen(8080);

function connected() {
    if (cluster.isMaster) {
        console.log(`Project started at ${new Date()}, at 8080`);
      if (process.env.NODE_ENV) {
        for (let i = 0; i < number_of_cores; i += 1) {
          cluster.fork();
        //    console.log(`Worker ${process.pid} started at ${new Date()}`);
        }
  
        cluster.on('exit', () => {
            console.log("process exited");
        });
      }
    } else {
        // console.log(`Worker ${process.pid} started at ${new Date()}`);
    }
  }

  app.on('listen',connected);
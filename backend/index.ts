import { Server, ic } from 'azle';
import cors from "cors";
import express from 'express';

type Tevents = {
    id:number
    start_time:string;
    end_time:string;
    name:string;
    place:string;
}



const event: Tevents[]=[{
    id:1234,
    start_time:"4:00 pm",
    end_time:"6:30 pm",
    name:"Comida",
    place:"Cancha"
}
]


export default Server(() => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    // app.use((req, res, next) => {
    //     if (ic.caller().isAnonymous()) {
    //         res.status(401);
    //         res.send();
    //     } else {
    //         next();
    //     }
    // });

    app.post('/create', (req, res) => {
        const  event = events.find((event)=>event.id == req.body.id);
        if (event){
            res.status(400).json({msg:"El id ya esta en uso", data:event});
            return;
        }
        events = [...events,req.body]
        res.status(200).json({msg:"Evento añadido"});
    });

    app.get('/get',(req,res)=>{
        res.status(200).json({msg:"Eventos obtenidos con exito", data:events});
    });

    app.put('/update/:id')

    

    app.post('/test', (req, res) => {
        res.json(req.body);
    });

    app.get('/whoami', (req, res) => {
        res.statusCode = 200;
        res.send(ic.caller());
    });

    app.get('/health', (req, res) => {
        res.send().statusCode = 204;
    });

    return app.listen();
});

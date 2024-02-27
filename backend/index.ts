import { Server, ic } from 'azle';
import cors from "cors";
import express from 'express';

type Tevents = {
    id:number;
    start_time:string;
    end_time:string;
    name:string;
    place:string;
}


let events: Tevents[] = [{
    id:1234,
    start_time:"4:00 pm",
    end_time:"6:30 pm",
    name:"Comida",
    place:"Cancha"
}];

export default Server(() => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.post('/create', (req, res) => {
        const existingEvent = events.find(event => event.id === req.body.id);
        if (existingEvent) {
            res.status(400).json({ msg: "El id ya está en uso", data: existingEvent });
            return;
        }
        events.push(req.body);res.status(200).json({ msg: "Evento añadido" });
    });

    app.delete('/delete/:id', (req,res)=> {
        events = events.filter((e) => e.id !== parseInt(req.params.id));
        res.status(200).json({msg:"Evento eliminado"});
    });

    app.put('/update/:id', (req, res)=>{
        const event = events.find((event) => event.id === parseInt(req.params.id));
        if(!event){
            res.status(404).json({msg:"Evento no encontrado"});
            return;
        }

        const updatedEvent = {...event, ...req.body};
        events = events.map((e) => e.id === updatedEvent.id ? updatedEvent : e);
        res.status(200).json({msg:"El evento se ha actualizado "});
    });

    app.get('/get',(req,res)=>{
        res.status(200).json({msg:"Eventos obtenidos con éxito", data:events});
    });

    return app.listen();
});

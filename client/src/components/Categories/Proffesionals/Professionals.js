import { Link, useParams } from "react-router-dom";
import s from './Professionals.module.css'

function Professionals() {
  const { id } = useParams();
  console.log(id);

  const Workers = [
    {
      id: 0,
      name: "MEDICINA GENERAL",
      profesional: [
        {
          id: 1,
          worker: "Juan",
        },
        {
          id: 2,
          worker: "Luis",
        },
        {
          id: 3,
          worker: "Diego",
        },
      ],
    },
    {
      id: 1,
      name: "ODONTOLOGIA",
      profesional: [
        {
          id: 4,
          worker: "Alfredo",
        },
        {
          id: 5,
          worker: "Roberto",
        },
        {
          id: 6,
          worker: "Franco",
        },
      ],
    },
    {
      id: 2,
      name: "VETERINARIA",
      profesional: [
        {
          id: 7,
          worker: "Luis",
        },
        {
          id: 8,
          worker: "Angel",
        },
        {
          id: 9,
          worker: "Leo",
        },
      ],
    },
    {
      id: 3,
      name: "ADMINISTRACION",
      profesional: [
        {
          id: 10,
          worker: "Pepito",
        },
        {
          id: 11,
          worker: "Menganito",
        },
        {
          id: 12,
          worker: "Persona",
        },
      ],
    },
    {
      id: 4,
      name: "ACCOUNTING",
      profesional: [
        {
          id: 13,
          worker: "Godofredo",
        },
        {
          id: 14,
          worker: "Alexander",
        },
        {
          id: 15,
          worker: "Alex2",
        },
      ],
    },
    {
      id: 5,
      name: "MANAGEMENT",
      profesional: [
        {
          id: 16,
          worker: "Persona3",
        },
        {
          id: 17,
          worker: "Monica",
        },
        {
          id: 18,
          worker: "Taatiana",
        },
      ],
    },
    {
      id: 6,
      name: "ELECTRIC",
      profesional: [
        {
          id: 19,
          worker: "Juan",
        },
        {
          id: 20,
          worker: "Luis",
        },
        {
          id: 21,
          worker: "Diego",
        },
      ],
    },
    {
      id: 7,
      name: "MECHANICS",
      profesional: [
        {
          id: 22,
          worker: "Alfredo",
        },
        {
          id: 23,
          worker: "Roberto",
        },
        {
          id: 24,
          worker: "Franco",
        },
      ],
    },
    {
      id: 7,
      name: "ENVIRRONMENTAL",
      profesional: [
        {
          id: 25,
          worker: "Luis",
        },
        {
          id: 26,
          worker: "Angel",
        },
        {
          id: 27,
          worker: "Leo",
        },
      ],
    },
    {
      id: 8,
      name: "CLEANING",
      profesional: [
        {
          id: 28,
          worker: "Pepito",
        },
        {
          id: 29,
          worker: "Menganito",
        },
        {
          id: 30,
          worker: "Persona",
        },
      ],
    },
    {
      id: 9,
      name: "CARE ADULTS",
      profesional: [
        {
          id: 31,
          worker: "Godofredo",
        },
        {
          id: 32,
          worker: "Alexander",
        },
        {
          id: 33,
          worker: "Alex2",
        },
      ],
    },
    {
      id: 10,
      name: "PLUMBING",
      profesional: [
        {
          id: 34,
          worker: "Persona3",
        },
        {
          id: 35,
          worker: "Monica",
        },
        {
          id: 36,
          worker: "Taatiana",
        },
      ],
    },
    {
      id: 11,
      name: "TELEFONIA",
      profesional: [
        {
          id: 37,
          worker: "Persona3",
        },
        {
          id: 38,
          worker: "Monica",
        },
        {
          id: 39,
          worker: "Taatiana",
        },
      ],
    },
    {
      id: 12,
      name: "INTERNET",
      profesional: [
        {
          id: 40,
          worker: "Juan",
        },
        {
          id: 41,
          worker: "Luis",
        },
        {
          id: 42,
          worker: "Diego",
        },
      ],
    },
    {
      id: 13,
      name: "TELEVISION",
      profesional: [
        {
          id: 43,
          worker: "Alfredo",
        },
        {
          id: 44,
          worker: "Roberto",
        },
        {
          id: 45,
          worker: "Franco",
        },
      ],
    },
    {
      id: 14,
      name: "DISEÑO WEB",
      profesional: [
        {
          id: 46,
          worker: "Luis",
        },
        {
          id: 47,
          worker: "Angel",
        },
        {
          id: 48,
          worker: "Leo",
        },
      ],
    },
    {
      id: 15,
      name: "APLICACIONES",
      profesional: [
        {
          id: 49,
          worker: "Pepito",
        },
        {
          id: 50,
          worker: "Menganito",
        },
        {
          id: 51,
          worker: "Persona",
        },
      ],
    },
    {
      id: 16,
      name: "SITIOS WEB",
      profesional: [
        { 
          id: 52,
          worker: "Godofredo",
        },
        {
          id: 53,
          worker: "Alexander",
        },
        {
          id: 54,
          worker: "Alex2",
        },
      ],
    },
  ];

  let aux = Workers.filter((wr) => wr.id === parseInt(id));
  console.log(aux);
  return (
      <div className={s.cards}>
      <Link to="/home">Back to Home</Link>
     {
        aux[0].profesional.map((wr)=>{
          return (
            <div key={wr.id} className={s.cardsGeneral}>
            
            <h1>{wr.worker}</h1> 
            <div className={s.img}>
            <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="algunman"/>
            </div>  
            <h3>⭐⭐⭐⭐⭐</h3>
            <h2 className={s.description}>Descrption</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatum, unde sint itaque est, maxime odit numquam illo tempore minima fuga repellat laudantium ullam. Laborum voluptate aliquid nam quia officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatum, unde sint itaque est, maxime odit numquam illo tempore minima fuga repellat laudantium ullam. Laborum voluptate aliquid nam quia officia. </h3>
            </div>
            
          )
        })

      }
      

      </div>
      
      );
}

export default Professionals;

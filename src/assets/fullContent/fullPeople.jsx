// Sé que esto podría parecer trampa, pero quería ir más allá y traer TODOS los elementos. Como podéis ver en la página principal igualmente uso correctamente (creo) el fetch.
// La API de Star Wars es muy mala en algunos aspectos:
// ---------- No hay manera de acceder a una lista completa de los elementos, se quedan en 10. Sin embargo si añades los id a la url sí puedes ver uno a uno.
// ---------- Los uid parecen ordenados, pero en algunos datos como las starships están muy rotos, con números salteados e inexistentes
//            -- En los datos de people mismo (que hay 82) falta el número 17 y sin embargo está el 83.

// ---------- Afortunadamente el fetch a los grupos (people, planets...) devuelven las propiedades "total_records": X,  "total_pages": X,
//            -- por ejemplo en people son 82 y 9 respectivamente, así que los datos están ahí, pero lista solo 10. No he encontrado forma de acceder a esas páginas
//            -- ni a una url que liste todos los elementos completos, ni siquiera con el modificador ?expand=true

// He recurrido a una función que, obteniendo el "total_records" del elemento, puede hacer un bucle y dentro del mismo hacer un fetch de todos y cada uno de los elementos.
// ---------- A continuación dejo comentada la función que usé. Lo suyo es que, ya que funciona, lo use en la página, pero la API cada vez ralentiza más cada respuesta consecutiva
//            -- y si hay demasiadas llamadas se bloquea durante unos minutos (En la misma documentación de la API te informan del Rate Limiting y Rate Slowing).
//            -- En total ha tardado unos 6 minutos en traer la información de people, lo cual no es nada óptimo para la web; además he tenido que repetir varias veces porque
//            -- a mitad del bucle de repente la API no aceptaba más llamadas y lo rompía. Cuando he conseguido la información, la he pegado aquí para poder usarla. Espero que no sea
//            -- demasiado "tramposo" de mi parte.

// async function get() {
//     let fullPeople = []
//     try {
//         let response = await fetch('https://www.swapi.tech/api/people')
//         let data = await response.json()
//         if (response.ok) {
//             console.log(data.total_records);                         //Aquí me aseguraba que detectaba bien la cantidad de entradas
//             let id = 0                                               //No uso el mismo i del bucle para el id porque no todos existen ni son consecutivos
//             for (let i = 1; i <= data.total_records; i++) {
//                 try {
//                     id++
//                     let res = await fetch('https://www.swapi.tech/api/people/' + id)
//                     let dat = await res.json()
//                     if (res.ok) {
//                         fullPeople.push(dat.result)                  //Va agregando cada elemento al array fullPeople
//                         console.log(dat.result.uid)
//                     } else {
//                         i--                                          //Si no existe el elemento con ese id, vuelve un paso atrás para volver a probar...
//                     }                                                //...pero el id sigue sumando. Así me aseguro de que llega al final y que trae todo
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//             console.log("Todo el mundo: ", fullPeople);              //Me aseguro que el array es correcto
//         }
//     }
//     catch (error) {
//         console.log(error);
//     }
//  return fullPeople                                                   //Devuelvo el array completo, que es el que podéis ver justo debajo ↓↓↓
// }



export const fullPeople = [
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Luke Skywalker",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "blond",
            "height": "172",
            "eye_color": "blue",
            "mass": "77",
            "homeworld": "https://www.swapi.tech/api/planets/1",
            "birth_year": "19BBY",
            "url": "https://www.swapi.tech/api/people/1"
        },
        "_id": "5f63a36eee9fd7000499be42",
        "description": "A person within the Star Wars universe",
        "uid": "1",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "C-3PO",
            "gender": "n/a",
            "skin_color": "gold",
            "hair_color": "n/a",
            "height": "167",
            "eye_color": "yellow",
            "mass": "75",
            "homeworld": "https://www.swapi.tech/api/planets/1",
            "birth_year": "112BBY",
            "url": "https://www.swapi.tech/api/people/2"
        },
        "_id": "5f63a36eee9fd7000499be43",
        "description": "A person within the Star Wars universe",
        "uid": "2",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "R2-D2",
            "gender": "n/a",
            "skin_color": "white, blue",
            "hair_color": "n/a",
            "height": "96",
            "eye_color": "red",
            "mass": "32",
            "homeworld": "https://www.swapi.tech/api/planets/8",
            "birth_year": "33BBY",
            "url": "https://www.swapi.tech/api/people/3"
        },
        "_id": "5f63a36eee9fd7000499be44",
        "description": "A person within the Star Wars universe",
        "uid": "3",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Darth Vader",
            "gender": "male",
            "skin_color": "white",
            "hair_color": "none",
            "height": "202",
            "eye_color": "yellow",
            "mass": "136",
            "homeworld": "https://www.swapi.tech/api/planets/1",
            "birth_year": "41.9BBY",
            "url": "https://www.swapi.tech/api/people/4"
        },
        "_id": "5f63a36eee9fd7000499be45",
        "description": "A person within the Star Wars universe",
        "uid": "4",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Leia Organa",
            "gender": "female",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "150",
            "eye_color": "brown",
            "mass": "49",
            "homeworld": "https://www.swapi.tech/api/planets/2",
            "birth_year": "19BBY",
            "url": "https://www.swapi.tech/api/people/5"
        },
        "_id": "5f63a36eee9fd7000499be46",
        "description": "A person within the Star Wars universe",
        "uid": "5",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Owen Lars",
            "gender": "male",
            "skin_color": "light",
            "hair_color": "brown, grey",
            "height": "178",
            "eye_color": "blue",
            "mass": "120",
            "homeworld": "https://www.swapi.tech/api/planets/1",
            "birth_year": "52BBY",
            "url": "https://www.swapi.tech/api/people/6"
        },
        "_id": "5f63a36eee9fd7000499be47",
        "description": "A person within the Star Wars universe",
        "uid": "6",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Beru Whitesun lars",
            "gender": "female",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "165",
            "eye_color": "blue",
            "mass": "75",
            "homeworld": "https://www.swapi.tech/api/planets/1",
            "birth_year": "47BBY",
            "url": "https://www.swapi.tech/api/people/7"
        },
        "_id": "5f63a36eee9fd7000499be48",
        "description": "A person within the Star Wars universe",
        "uid": "7",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "R5-D4",
            "gender": "n/a",
            "skin_color": "white, red",
            "hair_color": "n/a",
            "height": "97",
            "eye_color": "red",
            "mass": "32",
            "homeworld": "https://www.swapi.tech/api/planets/1",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/8"
        },
        "_id": "5f63a36eee9fd7000499be49",
        "description": "A person within the Star Wars universe",
        "uid": "8",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Biggs Darklighter",
            "gender": "male",
            "skin_color": "light",
            "hair_color": "black",
            "height": "183",
            "eye_color": "brown",
            "mass": "84",
            "homeworld": "https://www.swapi.tech/api/planets/1",
            "birth_year": "24BBY",
            "url": "https://www.swapi.tech/api/people/9"
        },
        "_id": "5f63a36eee9fd7000499be4a",
        "description": "A person within the Star Wars universe",
        "uid": "9",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Obi-Wan Kenobi",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "auburn, white",
            "height": "182",
            "eye_color": "blue-gray",
            "mass": "77",
            "homeworld": "https://www.swapi.tech/api/planets/20",
            "birth_year": "57BBY",
            "url": "https://www.swapi.tech/api/people/10"
        },
        "_id": "5f63a36eee9fd7000499be4b",
        "description": "A person within the Star Wars universe",
        "uid": "10",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Anakin Skywalker",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "blond",
            "height": "188",
            "eye_color": "blue",
            "mass": "84",
            "homeworld": "https://www.swapi.tech/api/planets/1",
            "birth_year": "41.9BBY",
            "url": "https://www.swapi.tech/api/people/11"
        },
        "_id": "5f63a36eee9fd7000499be4c",
        "description": "A person within the Star Wars universe",
        "uid": "11",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Wilhuff Tarkin",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "auburn, grey",
            "height": "180",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/21",
            "birth_year": "64BBY",
            "url": "https://www.swapi.tech/api/people/12"
        },
        "_id": "5f63a36eee9fd7000499be4d",
        "description": "A person within the Star Wars universe",
        "uid": "12",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Chewbacca",
            "gender": "male",
            "skin_color": "unknown",
            "hair_color": "brown",
            "height": "228",
            "eye_color": "blue",
            "mass": "112",
            "homeworld": "https://www.swapi.tech/api/planets/14",
            "birth_year": "200BBY",
            "url": "https://www.swapi.tech/api/people/13"
        },
        "_id": "5f63a36eee9fd7000499be4e",
        "description": "A person within the Star Wars universe",
        "uid": "13",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Han Solo",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "180",
            "eye_color": "brown",
            "mass": "80",
            "homeworld": "https://www.swapi.tech/api/planets/22",
            "birth_year": "29BBY",
            "url": "https://www.swapi.tech/api/people/14"
        },
        "_id": "5f63a36eee9fd7000499be4f",
        "description": "A person within the Star Wars universe",
        "uid": "14",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Greedo",
            "gender": "male",
            "skin_color": "green",
            "hair_color": "n/a",
            "height": "173",
            "eye_color": "black",
            "mass": "74",
            "homeworld": "https://www.swapi.tech/api/planets/23",
            "birth_year": "44BBY",
            "url": "https://www.swapi.tech/api/people/15"
        },
        "_id": "5f63a36eee9fd7000499be50",
        "description": "A person within the Star Wars universe",
        "uid": "15",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Jabba Desilijic Tiure",
            "gender": "hermaphrodite",
            "skin_color": "green-tan, brown",
            "hair_color": "n/a",
            "height": "175",
            "eye_color": "orange",
            "mass": "1,358",
            "homeworld": "https://www.swapi.tech/api/planets/24",
            "birth_year": "600BBY",
            "url": "https://www.swapi.tech/api/people/16"
        },
        "_id": "5f63a36fee9fd7000499be51",
        "description": "A person within the Star Wars universe",
        "uid": "16",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Wedge Antilles",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "170",
            "eye_color": "hazel",
            "mass": "77",
            "homeworld": "https://www.swapi.tech/api/planets/22",
            "birth_year": "21BBY",
            "url": "https://www.swapi.tech/api/people/18"
        },
        "_id": "5f63a36fee9fd7000499be52",
        "description": "A person within the Star Wars universe",
        "uid": "18",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Jek Tono Porkins",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "180",
            "eye_color": "blue",
            "mass": "110",
            "homeworld": "https://www.swapi.tech/api/planets/26",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/19"
        },
        "_id": "5f63a36fee9fd7000499be53",
        "description": "A person within the Star Wars universe",
        "uid": "19",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Yoda",
            "gender": "male",
            "skin_color": "green",
            "hair_color": "white",
            "height": "66",
            "eye_color": "brown",
            "mass": "17",
            "homeworld": "https://www.swapi.tech/api/planets/28",
            "birth_year": "896BBY",
            "url": "https://www.swapi.tech/api/people/20"
        },
        "_id": "5f63a36fee9fd7000499be54",
        "description": "A person within the Star Wars universe",
        "uid": "20",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Palpatine",
            "gender": "male",
            "skin_color": "pale",
            "hair_color": "grey",
            "height": "170",
            "eye_color": "yellow",
            "mass": "75",
            "homeworld": "https://www.swapi.tech/api/planets/8",
            "birth_year": "82BBY",
            "url": "https://www.swapi.tech/api/people/21"
        },
        "_id": "5f63a36fee9fd7000499be55",
        "description": "A person within the Star Wars universe",
        "uid": "21",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Boba Fett",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "black",
            "height": "183",
            "eye_color": "brown",
            "mass": "78.2",
            "homeworld": "https://www.swapi.tech/api/planets/10",
            "birth_year": "31.5BBY",
            "url": "https://www.swapi.tech/api/people/22"
        },
        "_id": "5f63a36fee9fd7000499be56",
        "description": "A person within the Star Wars universe",
        "uid": "22",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "IG-88",
            "gender": "none",
            "skin_color": "metal",
            "hair_color": "none",
            "height": "200",
            "eye_color": "red",
            "mass": "140",
            "homeworld": "https://www.swapi.tech/api/planets/28",
            "birth_year": "15BBY",
            "url": "https://www.swapi.tech/api/people/23"
        },
        "_id": "5f63a36fee9fd7000499be57",
        "description": "A person within the Star Wars universe",
        "uid": "23",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Bossk",
            "gender": "male",
            "skin_color": "green",
            "hair_color": "none",
            "height": "190",
            "eye_color": "red",
            "mass": "113",
            "homeworld": "https://www.swapi.tech/api/planets/29",
            "birth_year": "53BBY",
            "url": "https://www.swapi.tech/api/people/24"
        },
        "_id": "5f63a36fee9fd7000499be58",
        "description": "A person within the Star Wars universe",
        "uid": "24",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Lando Calrissian",
            "gender": "male",
            "skin_color": "dark",
            "hair_color": "black",
            "height": "177",
            "eye_color": "brown",
            "mass": "79",
            "homeworld": "https://www.swapi.tech/api/planets/30",
            "birth_year": "31BBY",
            "url": "https://www.swapi.tech/api/people/25"
        },
        "_id": "5f63a36fee9fd7000499be59",
        "description": "A person within the Star Wars universe",
        "uid": "25",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Lobot",
            "gender": "male",
            "skin_color": "light",
            "hair_color": "none",
            "height": "175",
            "eye_color": "blue",
            "mass": "79",
            "homeworld": "https://www.swapi.tech/api/planets/6",
            "birth_year": "37BBY",
            "url": "https://www.swapi.tech/api/people/26"
        },
        "_id": "5f63a36fee9fd7000499be5a",
        "description": "A person within the Star Wars universe",
        "uid": "26",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Ackbar",
            "gender": "male",
            "skin_color": "brown mottle",
            "hair_color": "none",
            "height": "180",
            "eye_color": "orange",
            "mass": "83",
            "homeworld": "https://www.swapi.tech/api/planets/31",
            "birth_year": "41BBY",
            "url": "https://www.swapi.tech/api/people/27"
        },
        "_id": "5f63a36fee9fd7000499be5b",
        "description": "A person within the Star Wars universe",
        "uid": "27",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Mon Mothma",
            "gender": "female",
            "skin_color": "fair",
            "hair_color": "auburn",
            "height": "150",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/32",
            "birth_year": "48BBY",
            "url": "https://www.swapi.tech/api/people/28"
        },
        "_id": "5f63a36fee9fd7000499be5c",
        "description": "A person within the Star Wars universe",
        "uid": "28",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Arvel Crynyd",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "unknown",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/28",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/29"
        },
        "_id": "5f63a36fee9fd7000499be5d",
        "description": "A person within the Star Wars universe",
        "uid": "29",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Wicket Systri Warrick",
            "gender": "male",
            "skin_color": "brown",
            "hair_color": "brown",
            "height": "88",
            "eye_color": "brown",
            "mass": "20",
            "homeworld": "https://www.swapi.tech/api/planets/7",
            "birth_year": "8BBY",
            "url": "https://www.swapi.tech/api/people/30"
        },
        "_id": "5f63a36fee9fd7000499be5e",
        "description": "A person within the Star Wars universe",
        "uid": "30",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Nien Nunb",
            "gender": "male",
            "skin_color": "grey",
            "hair_color": "none",
            "height": "160",
            "eye_color": "black",
            "mass": "68",
            "homeworld": "https://www.swapi.tech/api/planets/33",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/31"
        },
        "_id": "5f63a36fee9fd7000499be5f",
        "description": "A person within the Star Wars universe",
        "uid": "31",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Qui-Gon Jinn",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "193",
            "eye_color": "blue",
            "mass": "89",
            "homeworld": "https://www.swapi.tech/api/planets/28",
            "birth_year": "92BBY",
            "url": "https://www.swapi.tech/api/people/32"
        },
        "_id": "5f63a36fee9fd7000499be60",
        "description": "A person within the Star Wars universe",
        "uid": "32",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Nute Gunray",
            "gender": "male",
            "skin_color": "mottled green",
            "hair_color": "none",
            "height": "191",
            "eye_color": "red",
            "mass": "90",
            "homeworld": "https://www.swapi.tech/api/planets/18",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/33"
        },
        "_id": "5f63a36fee9fd7000499be61",
        "description": "A person within the Star Wars universe",
        "uid": "33",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Finis Valorum",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "blond",
            "height": "170",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/9",
            "birth_year": "91BBY",
            "url": "https://www.swapi.tech/api/people/34"
        },
        "_id": "5f63a36fee9fd7000499be62",
        "description": "A person within the Star Wars universe",
        "uid": "34",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Padmé Amidala",
            "gender": "female",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "185",
            "eye_color": "brown",
            "mass": "45",
            "homeworld": "https://www.swapi.tech/api/planets/8",
            "birth_year": "46BBY",
            "url": "https://www.swapi.tech/api/people/35"
        },
        "_id": "5f63a36fee9fd7000499be63",
        "description": "A person within the Star Wars universe",
        "uid": "35",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Jar Jar Binks",
            "gender": "male",
            "skin_color": "orange",
            "hair_color": "none",
            "height": "196",
            "eye_color": "orange",
            "mass": "66",
            "homeworld": "https://www.swapi.tech/api/planets/8",
            "birth_year": "52BBY",
            "url": "https://www.swapi.tech/api/people/36"
        },
        "_id": "5f63a36fee9fd7000499be64",
        "description": "A person within the Star Wars universe",
        "uid": "36",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Roos Tarpals",
            "gender": "male",
            "skin_color": "grey",
            "hair_color": "none",
            "height": "224",
            "eye_color": "orange",
            "mass": "82",
            "homeworld": "https://www.swapi.tech/api/planets/8",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/37"
        },
        "_id": "5f63a36fee9fd7000499be65",
        "description": "A person within the Star Wars universe",
        "uid": "37",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Rugor Nass",
            "gender": "male",
            "skin_color": "green",
            "hair_color": "none",
            "height": "206",
            "eye_color": "orange",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/8",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/38"
        },
        "_id": "5f63a36fee9fd7000499be66",
        "description": "A person within the Star Wars universe",
        "uid": "38",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Ric Olié",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "183",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/8",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/39"
        },
        "_id": "5f63a36fee9fd7000499be67",
        "description": "A person within the Star Wars universe",
        "uid": "39",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Watto",
            "gender": "male",
            "skin_color": "blue, grey",
            "hair_color": "black",
            "height": "137",
            "eye_color": "yellow",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/34",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/40"
        },
        "_id": "5f63a36fee9fd7000499be68",
        "description": "A person within the Star Wars universe",
        "uid": "40",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Sebulba",
            "gender": "male",
            "skin_color": "grey, red",
            "hair_color": "none",
            "height": "112",
            "eye_color": "orange",
            "mass": "40",
            "homeworld": "https://www.swapi.tech/api/planets/35",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/41"
        },
        "_id": "5f63a36fee9fd7000499be69",
        "description": "A person within the Star Wars universe",
        "uid": "41",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Quarsh Panaka",
            "gender": "male",
            "skin_color": "dark",
            "hair_color": "black",
            "height": "183",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/8",
            "birth_year": "62BBY",
            "url": "https://www.swapi.tech/api/people/42"
        },
        "_id": "5f63a36fee9fd7000499be6a",
        "description": "A person within the Star Wars universe",
        "uid": "42",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Shmi Skywalker",
            "gender": "female",
            "skin_color": "fair",
            "hair_color": "black",
            "height": "163",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/1",
            "birth_year": "72BBY",
            "url": "https://www.swapi.tech/api/people/43"
        },
        "_id": "5f63a36fee9fd7000499be6b",
        "description": "A person within the Star Wars universe",
        "uid": "43",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Darth Maul",
            "gender": "male",
            "skin_color": "red",
            "hair_color": "none",
            "height": "175",
            "eye_color": "yellow",
            "mass": "80",
            "homeworld": "https://www.swapi.tech/api/planets/36",
            "birth_year": "54BBY",
            "url": "https://www.swapi.tech/api/people/44"
        },
        "_id": "5f63a36fee9fd7000499be6c",
        "description": "A person within the Star Wars universe",
        "uid": "44",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Bib Fortuna",
            "gender": "male",
            "skin_color": "pale",
            "hair_color": "none",
            "height": "180",
            "eye_color": "pink",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/37",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/45"
        },
        "_id": "5f63a36fee9fd7000499be6d",
        "description": "A person within the Star Wars universe",
        "uid": "45",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Ayla Secura",
            "gender": "female",
            "skin_color": "blue",
            "hair_color": "none",
            "height": "178",
            "eye_color": "hazel",
            "mass": "55",
            "homeworld": "https://www.swapi.tech/api/planets/37",
            "birth_year": "48BBY",
            "url": "https://www.swapi.tech/api/people/46"
        },
        "_id": "5f63a36fee9fd7000499be6e",
        "description": "A person within the Star Wars universe",
        "uid": "46",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Ratts Tyerel",
            "gender": "male",
            "skin_color": "grey, blue",
            "hair_color": "none",
            "height": "79",
            "eye_color": "unknown",
            "mass": "15",
            "homeworld": "https://www.swapi.tech/api/planets/38",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/47"
        },
        "_id": "5f63a36fee9fd7000499be6f",
        "description": "A person within the Star Wars universe",
        "uid": "47",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Dud Bolt",
            "gender": "male",
            "skin_color": "blue, grey",
            "hair_color": "none",
            "height": "94",
            "eye_color": "yellow",
            "mass": "45",
            "homeworld": "https://www.swapi.tech/api/planets/39",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/48"
        },
        "_id": "5f63a36fee9fd7000499be70",
        "description": "A person within the Star Wars universe",
        "uid": "48",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Gasgano",
            "gender": "male",
            "skin_color": "white, blue",
            "hair_color": "none",
            "height": "122",
            "eye_color": "black",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/40",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/49"
        },
        "_id": "5f63a36fee9fd7000499be71",
        "description": "A person within the Star Wars universe",
        "uid": "49",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Ben Quadinaros",
            "gender": "male",
            "skin_color": "grey, green, yellow",
            "hair_color": "none",
            "height": "163",
            "eye_color": "orange",
            "mass": "65",
            "homeworld": "https://www.swapi.tech/api/planets/41",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/50"
        },
        "_id": "5f63a36fee9fd7000499be72",
        "description": "A person within the Star Wars universe",
        "uid": "50",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Mace Windu",
            "gender": "male",
            "skin_color": "dark",
            "hair_color": "none",
            "height": "188",
            "eye_color": "brown",
            "mass": "84",
            "homeworld": "https://www.swapi.tech/api/planets/42",
            "birth_year": "72BBY",
            "url": "https://www.swapi.tech/api/people/51"
        },
        "_id": "5f63a36fee9fd7000499be73",
        "description": "A person within the Star Wars universe",
        "uid": "51",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Ki-Adi-Mundi",
            "gender": "male",
            "skin_color": "pale",
            "hair_color": "white",
            "height": "198",
            "eye_color": "yellow",
            "mass": "82",
            "homeworld": "https://www.swapi.tech/api/planets/43",
            "birth_year": "92BBY",
            "url": "https://www.swapi.tech/api/people/52"
        },
        "_id": "5f63a36fee9fd7000499be74",
        "description": "A person within the Star Wars universe",
        "uid": "52",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Kit Fisto",
            "gender": "male",
            "skin_color": "green",
            "hair_color": "none",
            "height": "196",
            "eye_color": "black",
            "mass": "87",
            "homeworld": "https://www.swapi.tech/api/planets/44",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/53"
        },
        "_id": "5f63a36fee9fd7000499be75",
        "description": "A person within the Star Wars universe",
        "uid": "53",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Eeth Koth",
            "gender": "male",
            "skin_color": "brown",
            "hair_color": "black",
            "height": "171",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/45",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/54"
        },
        "_id": "5f63a36fee9fd7000499be76",
        "description": "A person within the Star Wars universe",
        "uid": "54",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Adi Gallia",
            "gender": "female",
            "skin_color": "dark",
            "hair_color": "none",
            "height": "184",
            "eye_color": "blue",
            "mass": "50",
            "homeworld": "https://www.swapi.tech/api/planets/9",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/55"
        },
        "_id": "5f63a36fee9fd7000499be77",
        "description": "A person within the Star Wars universe",
        "uid": "55",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Saesee Tiin",
            "gender": "male",
            "skin_color": "pale",
            "hair_color": "none",
            "height": "188",
            "eye_color": "orange",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/47",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/56"
        },
        "_id": "5f63a36fee9fd7000499be78",
        "description": "A person within the Star Wars universe",
        "uid": "56",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Yarael Poof",
            "gender": "male",
            "skin_color": "white",
            "hair_color": "none",
            "height": "264",
            "eye_color": "yellow",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/48",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/57"
        },
        "_id": "5f63a36fee9fd7000499be79",
        "description": "A person within the Star Wars universe",
        "uid": "57",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Plo Koon",
            "gender": "male",
            "skin_color": "orange",
            "hair_color": "none",
            "height": "188",
            "eye_color": "black",
            "mass": "80",
            "homeworld": "https://www.swapi.tech/api/planets/49",
            "birth_year": "22BBY",
            "url": "https://www.swapi.tech/api/people/58"
        },
        "_id": "5f63a36fee9fd7000499be7a",
        "description": "A person within the Star Wars universe",
        "uid": "58",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Mas Amedda",
            "gender": "male",
            "skin_color": "blue",
            "hair_color": "none",
            "height": "196",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/50",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/59"
        },
        "_id": "5f63a36fee9fd7000499be7b",
        "description": "A person within the Star Wars universe",
        "uid": "59",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Gregar Typho",
            "gender": "male",
            "skin_color": "dark",
            "hair_color": "black",
            "height": "185",
            "eye_color": "brown",
            "mass": "85",
            "homeworld": "https://www.swapi.tech/api/planets/8",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/60"
        },
        "_id": "5f63a36fee9fd7000499be7c",
        "description": "A person within the Star Wars universe",
        "uid": "60",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Cordé",
            "gender": "female",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "157",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/8",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/61"
        },
        "_id": "5f63a36fee9fd7000499be7d",
        "description": "A person within the Star Wars universe",
        "uid": "61",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Cliegg Lars",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "183",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/1",
            "birth_year": "82BBY",
            "url": "https://www.swapi.tech/api/people/62"
        },
        "_id": "5f63a36fee9fd7000499be7e",
        "description": "A person within the Star Wars universe",
        "uid": "62",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Poggle the Lesser",
            "gender": "male",
            "skin_color": "green",
            "hair_color": "none",
            "height": "183",
            "eye_color": "yellow",
            "mass": "80",
            "homeworld": "https://www.swapi.tech/api/planets/11",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/63"
        },
        "_id": "5f63a36fee9fd7000499be7f",
        "description": "A person within the Star Wars universe",
        "uid": "63",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Luminara Unduli",
            "gender": "female",
            "skin_color": "yellow",
            "hair_color": "black",
            "height": "170",
            "eye_color": "blue",
            "mass": "56.2",
            "homeworld": "https://www.swapi.tech/api/planets/51",
            "birth_year": "58BBY",
            "url": "https://www.swapi.tech/api/people/64"
        },
        "_id": "5f63a36fee9fd7000499be80",
        "description": "A person within the Star Wars universe",
        "uid": "64",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Barriss Offee",
            "gender": "female",
            "skin_color": "yellow",
            "hair_color": "black",
            "height": "166",
            "eye_color": "blue",
            "mass": "50",
            "homeworld": "https://www.swapi.tech/api/planets/51",
            "birth_year": "40BBY",
            "url": "https://www.swapi.tech/api/people/65"
        },
        "_id": "5f63a36fee9fd7000499be81",
        "description": "A person within the Star Wars universe",
        "uid": "65",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Dormé",
            "gender": "female",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "165",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/8",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/66"
        },
        "_id": "5f63a36fee9fd7000499be82",
        "description": "A person within the Star Wars universe",
        "uid": "66",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Dooku",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "white",
            "height": "193",
            "eye_color": "brown",
            "mass": "80",
            "homeworld": "https://www.swapi.tech/api/planets/52",
            "birth_year": "102BBY",
            "url": "https://www.swapi.tech/api/people/67"
        },
        "_id": "5f63a36fee9fd7000499be83",
        "description": "A person within the Star Wars universe",
        "uid": "67",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Bail Prestor Organa",
            "gender": "male",
            "skin_color": "tan",
            "hair_color": "black",
            "height": "191",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/2",
            "birth_year": "67BBY",
            "url": "https://www.swapi.tech/api/people/68"
        },
        "_id": "5f63a36fee9fd7000499be84",
        "description": "A person within the Star Wars universe",
        "uid": "68",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Jango Fett",
            "gender": "male",
            "skin_color": "tan",
            "hair_color": "black",
            "height": "183",
            "eye_color": "brown",
            "mass": "79",
            "homeworld": "https://www.swapi.tech/api/planets/53",
            "birth_year": "66BBY",
            "url": "https://www.swapi.tech/api/people/69"
        },
        "_id": "5f63a36fee9fd7000499be85",
        "description": "A person within the Star Wars universe",
        "uid": "69",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Zam Wesell",
            "gender": "female",
            "skin_color": "fair, green, yellow",
            "hair_color": "blonde",
            "height": "168",
            "eye_color": "yellow",
            "mass": "55",
            "homeworld": "https://www.swapi.tech/api/planets/54",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/70"
        },
        "_id": "5f63a36fee9fd7000499be86",
        "description": "A person within the Star Wars universe",
        "uid": "70",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Dexter Jettster",
            "gender": "male",
            "skin_color": "brown",
            "hair_color": "none",
            "height": "198",
            "eye_color": "yellow",
            "mass": "102",
            "homeworld": "https://www.swapi.tech/api/planets/55",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/71"
        },
        "_id": "5f63a36fee9fd7000499be87",
        "description": "A person within the Star Wars universe",
        "uid": "71",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Lama Su",
            "gender": "male",
            "skin_color": "grey",
            "hair_color": "none",
            "height": "229",
            "eye_color": "black",
            "mass": "88",
            "homeworld": "https://www.swapi.tech/api/planets/10",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/72"
        },
        "_id": "5f63a36fee9fd7000499be88",
        "description": "A person within the Star Wars universe",
        "uid": "72",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Taun We",
            "gender": "female",
            "skin_color": "grey",
            "hair_color": "none",
            "height": "213",
            "eye_color": "black",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/10",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/73"
        },
        "_id": "5f63a36fee9fd7000499be89",
        "description": "A person within the Star Wars universe",
        "uid": "73",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Jocasta Nu",
            "gender": "female",
            "skin_color": "fair",
            "hair_color": "white",
            "height": "167",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/9",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/74"
        },
        "_id": "5f63a36fee9fd7000499be8a",
        "description": "A person within the Star Wars universe",
        "uid": "74",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "R4-P17",
            "gender": "female",
            "skin_color": "silver, red",
            "hair_color": "none",
            "height": "96",
            "eye_color": "red, blue",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/28",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/75"
        },
        "_id": "5f63a36fee9fd7000499be8b",
        "description": "A person within the Star Wars universe",
        "uid": "75",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Wat Tambor",
            "gender": "male",
            "skin_color": "green, grey",
            "hair_color": "none",
            "height": "193",
            "eye_color": "unknown",
            "mass": "48",
            "homeworld": "https://www.swapi.tech/api/planets/56",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/76"
        },
        "_id": "5f63a36fee9fd7000499be8c",
        "description": "A person within the Star Wars universe",
        "uid": "76",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "San Hill",
            "gender": "male",
            "skin_color": "grey",
            "hair_color": "none",
            "height": "191",
            "eye_color": "gold",
            "mass": "unknown",
            "homeworld": "https://www.swapi.tech/api/planets/57",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/77"
        },
        "_id": "5f63a36fee9fd7000499be8d",
        "description": "A person within the Star Wars universe",
        "uid": "77",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Shaak Ti",
            "gender": "female",
            "skin_color": "red, blue, white",
            "hair_color": "none",
            "height": "178",
            "eye_color": "black",
            "mass": "57",
            "homeworld": "https://www.swapi.tech/api/planets/58",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/78"
        },
        "_id": "5f63a36fee9fd7000499be8e",
        "description": "A person within the Star Wars universe",
        "uid": "78",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Grievous",
            "gender": "male",
            "skin_color": "brown, white",
            "hair_color": "none",
            "height": "216",
            "eye_color": "green, yellow",
            "mass": "159",
            "homeworld": "https://www.swapi.tech/api/planets/59",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/79"
        },
        "_id": "5f63a36fee9fd7000499be8f",
        "description": "A person within the Star Wars universe",
        "uid": "79",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Tarfful",
            "gender": "male",
            "skin_color": "brown",
            "hair_color": "brown",
            "height": "234",
            "eye_color": "blue",
            "mass": "136",
            "homeworld": "https://www.swapi.tech/api/planets/14",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/80"
        },
        "_id": "5f63a36fee9fd7000499be90",
        "description": "A person within the Star Wars universe",
        "uid": "80",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Raymus Antilles",
            "gender": "male",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "188",
            "eye_color": "brown",
            "mass": "79",
            "homeworld": "https://www.swapi.tech/api/planets/2",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/81"
        },
        "_id": "5f63a36fee9fd7000499be91",
        "description": "A person within the Star Wars universe",
        "uid": "81",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Sly Moore",
            "gender": "female",
            "skin_color": "pale",
            "hair_color": "none",
            "height": "178",
            "eye_color": "white",
            "mass": "48",
            "homeworld": "https://www.swapi.tech/api/planets/60",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/82"
        },
        "_id": "5f63a36fee9fd7000499be92",
        "description": "A person within the Star Wars universe",
        "uid": "82",
        "__v": 2
    },
    {
        "properties": {
            "created": "2025-07-08T00:03:07.319Z",
            "edited": "2025-07-08T00:03:07.319Z",
            "name": "Tion Medon",
            "gender": "male",
            "skin_color": "grey",
            "hair_color": "none",
            "height": "206",
            "eye_color": "black",
            "mass": "80",
            "homeworld": "https://www.swapi.tech/api/planets/12",
            "birth_year": "unknown",
            "url": "https://www.swapi.tech/api/people/83"
        },
        "_id": "5f63a36fee9fd7000499be93",
        "description": "A person within the Star Wars universe",
        "uid": "83",
        "__v": 2
    }
]
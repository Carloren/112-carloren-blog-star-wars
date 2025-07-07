export async function getPeople() {
    try {
        let response = await fetch('https://www.swapi.tech/api/people')
        let data = await response.json()
        if (response.ok) {
            localStorage.setItem("people", JSON.stringify(data.results))
            return (data.results)
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function getPerson(id) {
    try {
        let response = await fetch("https://www.swapi.tech/api/people/" + id)
        let data = await response.json()
        if (response.ok) {
            localStorage.setItem("person" + data.result.uid, JSON.stringify(data.result.properties))
            return (data.result)
        }
    }
    catch (error) {
        console.log(error);
    }
}

// export function getPerson(id) {
//     fetch("https://www.swapi.tech/api/people/" + id)
//         .then(res => res.json())
//         .then(data => {
//             localStorage.setItem("person" + data.result.uid, JSON.stringify(data.result.properties))
//             return data.result
//         })
//         .catch(err => console.error(err))

// }
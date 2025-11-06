import { DivCenter } from "../components/containers/containers"


export function Profile() {

    const codeStats =
        `  const steve={
    code: ["Javascript","php","Java","python"],
    askMeAbout: ["web dev","tecnologia","pc master race", "videojuegos"],
    technologies: {
        frontEnd: ["React","Vue","Laravel"],
        backEnd: ["Nest","Epress","Laravel"],
        dataBase: ["Mysql", "SqlServer", "Informix"],
        state: ["Redux","Pinia"],
        test: ["Jest"],
        orm: ["sequelize","typeorm"],
    },
    architecture: ["Single page applications"],
    funFact: "There are two ways to write error-free programs; only the third one works",
    currentOccupation: ["Full stack developer for a company"],
    challenge: "LightClient, NeoFetch"
    }`
    
    return (
        <>
            <DivCenter>
                <h1>Hola chum, Soy Steve</h1>

                <p>
                    Ingeniero en sistemas al que le gusta crear programas que puedan ayudar a otros o simplemente para aprender sobre algo
                </p>

                <pre>
                    {
                        codeStats
                    }
                </pre>

                <h1>Te interesa algun proyecto ? Contacta conmigo</h1>

                <h1>Experiencia</h1>

                <p>
                    Bansi SA
                    2022-2024
                </p>

                <p>
                    Grupo Carsol
                    2024-2025
                </p>

                <p>
                    HighPower
                    2025 - Actual
                </p>

                <p>
                    Desarrollador full stack
                </p>

                <p>
                    Tecnologia que uso
                </p>

                <p>
                    React
                </p>
                
            </DivCenter>
        </>
    )
}
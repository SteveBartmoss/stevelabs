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
            </DivCenter>
        </>
    )
}
import { DivCenter, MainContainer, Panel } from "../components/containers/containers";

export function Home() {
    const codeStats =
        `const steve={
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
            <MainContainer>
                <Panel>
                    <h1>Stevelabs</h1>

                    <p>
                        Software simple.<br />
                        Diseñado con intención.
                    </p>
                </Panel>

                <Panel>
                    <h2>Proyectos</h2>

                    <div>
                        <h3>Cronos.js</h3>
                        <p>
                            Librería de fechas enfocada en claridad, no en complejidad.
                        </p>

                        <h3>NeoFetch</h3>
                        <p>
                            Un wrapper de fetch. Simple pero funcional.
                        </p>
                    </div>

                </Panel>

                <Panel>
                    <h2>Sobre mí</h2>

                    <p>
                        Me interesa construir software que sea fácil de leer,
                        fácil de mantener y que perdure con el tiempo.
                    </p>


                    <pre>
                        {
                            codeStats
                        }
                    </pre>
                </Panel>

                <Panel>
                    <h2>Experiencia</h2>

                    <div>
                        <p>
                            HighPower<br />
                            <small>2025 – Actualidad</small>
                        </p>

                        <p>
                            Grupo Carsol<br />
                            <small>2024 – 2025</small>
                        </p>

                        <p>
                            Bansi SA<br />
                            <small>2022 – 2024</small>
                        </p>
                    </div>

                </Panel>

                <Panel>
                    <p style={{ opacity: 0.5 }}>
                        Construido por humanos.
                    </p>
                </Panel>
            </MainContainer>
        </>
    )
}
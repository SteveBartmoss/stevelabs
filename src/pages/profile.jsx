

export function Profile(){

    const codeStats = 
    `const steve={
        lenguajes: [Javascript,php,Java,python],
        frameWorsk: [Nests,Express,Laravel,Vue],
        librerias: [React, Redux,Pinia,Jest],
        dataBase: [Mysql,SlqServer,Informix],
    }`
    return(
        <>
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
        </>
    )
}
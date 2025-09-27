import './containers.css'

export function DivHome({children}){
    return(
        <div className="div-home">
            {children}
        </div>
    )
}

export function DivCenter({children}){
    return(
        <div className="div-center">
            {children}
        </div>
    )
}

export function DivRow({children}){
    return(
        <div className="div-row">
            {children}
        </div>
    )
}
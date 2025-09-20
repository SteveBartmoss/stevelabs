import './card.css'

export function Card({children}){
    return(
        <div className="basic-card">
            {children}
        </div>
    )
}
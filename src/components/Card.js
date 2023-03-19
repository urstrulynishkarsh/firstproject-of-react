import './Card.css'

function Card(props){
    return <div className="hello">
        {props.children},
        {/* {props.className} */}
    </div>
}
export default Card;
function MeetupItems(props){

    return <div className ='card' key ={props.id} id = {props.id}>
        <div className = 'cardName'>{props.name}</div>
        <div className = 'cardCode'>{props.state_code}</div>
        <div className = 'latitude'>{props.latitude}</div>
        <button className = 'btn'>Add to Fav</button>
        
    </div>
}

export default MeetupItems;
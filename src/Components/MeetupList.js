import MeetupItems from "./MeetupItems";
function MeetupList(props){
return (
    <div className = 'classLis'>
 {props.meetups.map((meetup) => {
               return <div className= 'classList'>
                   <span key = {meetup.id}>
                   <MeetupItems 
                   id = {meetup.id}
                   state_code= {meetup.state_code}
                   name = {meetup.name}
                   latitude = {meetup.latitude}
                   />
                   </span>
                   </div>
           })}
           </div>
           );
  
}
export default MeetupList;
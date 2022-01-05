import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
const localizer = momentLocalizer(moment);
let backgroundColor = '#9370DB'
const eventStyleGetter = (event, start, end, isSelected) => ({
  style: {
    backgroundColor: isSelected ? '#4B0082' : '#DDA0DD'
  }
});

export default function CustomerCalendar({user}) {
  const [eventList, setEventList] = useState([])
  
  useEffect(()=>{
  fetch('/events')
  .then(resp => resp.json())
  .then(data=>{
     setEventList(data)
  });
},[]);
 
  
  return (
    <div>
    
      <div className="calendar">
      <Calendar
        localizer={localizer}  
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 , backgroundColor: backgroundColor}}
        eventPropGetter={eventStyleGetter}
      />
     </div>
     <div className="eventList">
     <h2>Upcoming Events:</h2>
     {eventList.map((event)=><div key={event.id}><ul>{event.title}</ul> <ul>Time: {event.start} - {event.end}</ul> <ul>Location: {event.description}</ul></div>)
     }
     </div>
     
    </div>
  );
}

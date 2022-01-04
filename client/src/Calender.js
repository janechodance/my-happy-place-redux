import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
const localizer = momentLocalizer(moment);

let color = '#4B0082'
let backgroundColor = '#9370DB'


const eventStyleGetter = (event, start, end, isSelected) => ({
  style: {
    backgroundColor: isSelected ? '#4B0082' : null
  }
});

export default function MyCalendar() {
  const [eventList, setEventList] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    vendor_id: '',
    tittle: '',
    start: '',
    end: '',
    description: ''
  });
  useEffect(()=>{
  fetch('/events')
  .then(resp => resp.json())
  .then(data=>{
     setEventList(data)
  });
},[]);
  function handleFormDataChange(event){
    setFormData({...formData, [event.target.name]: event.target.value});
  }
  return (
    <div>
     <button onClick={()=>setShowForm(!showForm)}>Add events</button>
     {showForm? <form>
                <label> Event Name: </label>
                <label>
                <input
                    type='text'
                    name='tittle'
                    value={formData.tittle}
                    onChange={handleFormDataChange}
                    placeholder="Event Name"
                />
                </label>
                <label> Start Time: </label>
                <label>
                <input
                    type='datetime-local'
                    name='start'
                    value={formData.start}
                    onChange={handleFormDataChange}
                />
                </label>
                <label> End Time: </label>
                <label>
                <input
                    type='datetime-local'
                    name='end'
                    value={formData.end}
                    onChange={handleFormDataChange}
                />
                </label>
                <label> Location: </label>
                <label>
                <input
                    type='text'
                    name='description'
                    value={formData.description}
                    onChange={handleFormDataChange}
                    placeholder="Location"
                />
                </label>
     </form> : null}
  
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
     {eventList.map((event)=><div key={event.id}><ul>{event.title}</ul> <ul>Time: {event.start} - {event.end}</ul> <ul>Location: {event.description}</ul></div>)}
     </div>
     
    </div>
  );
}

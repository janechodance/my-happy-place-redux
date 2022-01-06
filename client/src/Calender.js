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

export default function MyCalendar({user}) {
  const [eventList, setEventList] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [eventId, setEventId]= useState()
  const [update, setUpdate] =useState(false)
  const [formData, setFormData] = useState({
    vendor_id: user.vendor.id,
    title: '',
    start: '',
    end: '',
    description: ''
  });
  const [updateFormData, setUpdateFormData] = useState({
    vendor_id: user.vendor.id,
    title: '',
    start: '',
    end: '',
    description: ''
  })
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
  function handleSubmit(event){
    event.preventDefault();
    console.log(formData)
    fetch('/events',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data=>setEventList([...eventList, data]))

    setFormData({
      vendor_id: user.vendor.id,
      title: '',
      start: '',
      end: '',
      description: ''
    })
  }
  function handleDelete(id){
    fetch(`events/${id}`, {
      method: 'DELETE'
    })
    .then(setUpdate(!update))

  }
  function updateClick(event){
    console.log(event)
    setUpdateFormData({
      vendor_id: user.vendor.id,
      title: event.title,
      start: event.start,
      end: event.end,
      description: event.description
    })
    setShowUpdateForm(!showUpdateForm)
    setEventId(event.id)
  }
  function handleUpdateFormDataChange(event){
    setUpdateFormData({...updateFormData, [event.target.name]: event.target.value});
  }
  function handleUpdate(event){
    event.preventDefault()
    console.log(updateFormData)
    fetch(`/events/${eventId}`,{
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateFormData)
    })
    .then(resp => resp.json())
    .then(data=>{console.log(data)
    setUpdateFormData({
      vendor_id: user.vendor.id,
      title: '',
      start: '',
      end: '',
      description: ''
    });
    setEventList(allEvents=>{
      const events= [...allEvents]
      return events.map((oneEvent)=>{
        if (oneEvent.id=== eventId){
          return updateFormData
        }else{
          return oneEvent
        }
      })
    });
    }) 
  }
  
  return (
    <div>
    {user.is_vendor?<button onClick={()=>setShowForm(!showForm)}>Add events</button>:null}
     {showForm? <form onSubmit={handleSubmit}>
                <label> Event Name: </label>
                <label>
                <input
                    type='text'
                    name='title'
                    value={formData.title}
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
                <input
                    type='submit'
                />
     </form> : null}
      <div className="float-container">
      <div className="calendar" >
      <Calendar
        localizer={localizer}  
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 , backgroundColor: backgroundColor}}
        eventPropGetter={eventStyleGetter}
      />
     </div>
     <div className="events">
     <h2>Upcoming Events:</h2>
     {eventList.map((event)=><div key={event.id}><ul>{event.title}</ul> <ul>Time: {event.start} - {event.end}</ul> <ul>Location: {event.description}</ul>
     {event.vendor_id ===user.vendor.id? <div><button onClick={()=>handleDelete(event.id)}>Delete</button>
     <button onClick={()=>updateClick(event)}>Update</button></div>:null}</div>)}
     {showUpdateForm? <form onSubmit={handleUpdate}>
                <label> Event Name: </label>
                <label>
                <input
                    type='text'
                    name='title'
                    value={updateFormData.title}
                    onChange={handleUpdateFormDataChange}
                    placeholder="Event Name"
                />
                </label>
                <label> Start Time: </label>
                <label>
                <input
                    type='datetime-local'
                    name='start'
                    value={updateFormData.start}
                    onChange={handleUpdateFormDataChange}
                />
                </label>
                <label> End Time: </label>
                <label>
                <input
                    type='datetime-local'
                    name='end'
                    value={updateFormData.end}
                    onChange={handleUpdateFormDataChange}
                />
                </label>
                <label> Location: </label>
                <label>
                <input
                    type='text'
                    name='description'
                    value={updateFormData.description}
                    onChange={handleUpdateFormDataChange}
                    placeholder="Location"
                />
                </label>
                <input
                    type='submit'
                />
     </form> : null}
     </div>
     </div>
     
    </div>
  );
}

import React, { useState, useEffect } from 'react'

const EditEventForm = props => {
  const [events, setEvent] = useState(props.currentEvent)

  useEffect(
    () => {
      setEvent(props.currentEvent)
    },
    [props]
  )

  const handleInputChange = event => {
    const { name, value } = event.target
    setEvent({ ...events, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateEvent(events.id, events)
      }}
    >
      <label>Event Title</label>
      <input type="text" name="title" value={events.title} onChange={handleInputChange} placeholder="Title" />
      <label>Start Date</label>
      <input type="date" name="start" value={events.start} onChange={handleInputChange} />
      <label>End Date</label>
      <input type="date" name="end" value={events.end} onChange={handleInputChange} />
      <button>Update Event</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
    </form>
  )
}

export default EditEventForm

import React, { useState } from 'react'

const AddEventForm = props => {
	const initialFormState = { id: null, title: '', start: '', end: '', allDay: false }
	const [events, setEvent] = useState(initialFormState)

	const handleInputChange = event => {
		console.log(event.target.value)
		const { name, value } = event.target
		setEvent({ ...events, [name]: value })
	}

	return (
		<form onSubmit={event => {
			event.preventDefault()
			if (!events.title || !events.start) return

			props.addEvent(events)
			setEvent(initialFormState)
		}}>
			<label>Event Title</label>
			<input type="text" name="title" value={events.title} onChange={handleInputChange} placeholder="Title" />
			<label>Start Date</label>
			<input type="date" name="start" value={events.start} onChange={handleInputChange} />
			<label>End Date</label>
			<input type="date" name="end" value={events.end} onChange={handleInputChange} />
			<button>Add new Event</button>
		</form>
	)
}
export default AddEventForm

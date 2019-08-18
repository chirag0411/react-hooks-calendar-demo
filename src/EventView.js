import React, { useState, Fragment } from 'react'
import AddEventForm from './forms/AddEventForm'
import EditEventForm from './forms/EditEventForm'
import moment from 'moment'
import EventTableView from './view/EventTableView'
import EventBigCalendarView from './view/EventBigCalendarView'

const EventView = () => {
    //const Event Data
    const eventData = [
        { id: 1, title: 'Demo1', start: '2019-08-15', end: '2019-08-15', allDay: false },
        { id: 2, title: 'Demo2', start: '2019-08-16', end: '2019-08-17', allDay: false },
        { id: 3, title: 'Demo3', start: '2019-08-25', end: '2019-08-28', allDay: false },
        { id: 4, title: 'Demo4', start: '2019-09-15', end: '2019-09-15', allDay: false },
        { id: 5, title: 'Demo5', start: '2019-09-16', end: '2019-09-17', allDay: false },
    ]

    const initialFormState = { id: null, title: '', start: '', end: '', allDay: false }

    // Setting state
    const [events, setEvents] = useState(eventData)
    const [currentEvent, setCurrentEvent] = useState(initialFormState)
    const [editing, setEditing] = useState(false)

    // CRUD operations
    const addEvent = event => {
        event.id = events.length + 1
        setEvents([...events, event])
    }

    const deleteEvent = id => {
        setEditing(false)
        setEvents(events.filter(event => event.id !== id))
    }

    const updateEvent = (id, updatedEvent) => {
        setEditing(false)
        if (updatedEvent.id > events.length) {
            setEvents([...events, updatedEvent])
        } else {
            setEvents(events.map(event => (event.id === id ? updatedEvent : event)))
        }

    }

    const editRow = (event, isDirect) => {
        if (isDirect) {
            setEditing(true)
            setCurrentEvent({ id: event.id, title: event.title, start: event.start, end: event.end, allDay: false })
        }
        else {
            setEditing(true)
            setCurrentEvent({ id: events.length + 1, title: '', start: moment(event.start).format("YYYY-MM-DD"), end: moment(event.end).format("YYYY-MM-DD"), allDay: false })
        }
    };

    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    <h2>View React Big Calendar</h2>
                    <EventBigCalendarView events={events} editRow={editRow} />
                </div>
            </div>
            <br />
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Event</h2>
                            <EditEventForm
                                editing={editing}
                                setEditing={setEditing}
                                currentEvent={currentEvent}
                                updateEvent={updateEvent}
                            />
                        </Fragment>
                    ) : (
                            <Fragment>
                                <h2>Event</h2>
                                <AddEventForm addEvent={addEvent} />
                            </Fragment>
                        )}
                </div>
                <div className="flex-large">
                    <h2>View events</h2>
                    <EventTableView events={events} editRow={editRow} deleteEvent={deleteEvent} />
                </div>
            </div>
        </div>
    )
}

export default EventView

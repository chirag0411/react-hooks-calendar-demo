import React from 'react'

const EventTableView = props => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.events.length > 0 ? (
        props.events.map(event => (
          <tr key={event.id}>
            <td>{event.title}</td>
            <td>{event.start}</td>
            <td>{event.end}</td>
            <td>
              <button onClick={() => { props.editRow(event, true) }} className="button muted-button">
                Edit
              </button>
              <button onClick={() => props.deleteEvent(event.id)} className="button muted-button">
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No events</td>
          </tr>
        )}
    </tbody>
  </table>
)

export default EventTableView

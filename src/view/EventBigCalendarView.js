import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)
const EventBigCalendarView = props => {
  return (
    <div style={{ height: 700 }}>
      <Calendar
        events={props.events}
        step={30}
        localizer={localizer}
        defaultView='month'
        views={['month']}
        defaultDate={new Date()}
        selectable
        onSelectEvent={event => props.editRow(event, true)}
        onSelectSlot={(slotInfo) => props.editRow(slotInfo, false)}
      />
    </div>
  )
}

export default EventBigCalendarView
import React from 'react'
import style from './component.module.scss'
import { IEvent } from '../../../interfaces/IEvent'

const CardEvent = ({event}: {event: IEvent}) => {
  return (
    <div className={style.component}>
      <img src={event.imageUrl} alt={event.name} />
      <div>
        <h6>{event.name}</h6>
        <p>{event.description.substring(0, 176)}...</p>
      </div>
    </div>
  )
}

export default React.memo(CardEvent)

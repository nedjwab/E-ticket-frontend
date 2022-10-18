import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEvents, selectEvents } from '../../features/events/eventSlice';

export default function Event() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <div className="w-100">
      <h1 className="text-center mt-5 mb-2 pt-5 mt-md-1 fw-bold fs-2">Events</h1>
      <h2 className="text-center mt-2 mb-3 fw-bold opacity-50 fs-5">Please select an Event</h2>
      <div className="card mb-3 details-container">
        {events.map((event) => (
          <div key={event.id} className="cards">
            <img src={event.photo} alt={event.name} />
            <Link to={`/events/${event.id}`} className="link">{event.name}</Link>
            <div className="card-body">
              <p className="cancelled-flights contents">
                {' '}
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

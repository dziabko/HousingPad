export const createReservation = reservation => (
  $.ajax({
    method: 'POST',
    url: `api/reservations`,
    data: {
      reservation
    }
  })
);

export const fetchReservations = () => (
  $.ajax({
    method: 'GET',
    url: 'api/reservations'
  })
);

export const fetchReservationOfUser = id => (
    $.ajax({
        method: 'GET',
        url: `api/reservations/${id}`,
    })
);
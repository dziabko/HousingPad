export const fetchHomes = filters => (
    $.ajax({
        method: 'GET',
        url: 'api/homes',
        data: filters
    })
);

// export const getCurrentUser = () => {
//     $.ajax({
//         method: 'GET',
//         url: `/api/user`
//     })
// };

export const getCurrentUser = () => (
    $.ajax({
        method: 'GET',
        url: '/api/user'
    })
);

export const fetchCoords = params => (
    $.ajax({
        method: 'GET',
        url: `api/homes/get_homes_by_lat_long/${params.lat}/${params.lng}`,
    })
);

export const fetchHome = id => (
    $.ajax({
        method: 'GET',
        url: `api/homes/${id}`,
    })
);

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: {review}
    })
);

export const createHost = data => (
    $.ajax({
        method: 'POST',
        url: 'api/homes',
        data: data,
        processData: false,
        contentType: false
    })
);

export const homepreferences = (data) => (
    $.ajax({
        method: 'POST',
        url: 'api/homepreferences',
        data: {data}
    })
);

export const sendImageToController = (formPayLoad) => {

    $.ajax({
        method: 'POST',
        url: 'api/homes',
        processData: false,
        contentType: false,
        data: formPayLoad
    })
}
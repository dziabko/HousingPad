export const fetchUser =  id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const getCurrentUser = () => (
  $.ajax({
    method: 'GET',
    url: `/api/user`
  })
);

export const getRecommendation = () => (
  $.ajax({
    method: 'GET',
    url: `/api/recommendation`
  })
);

export const updateUser = (user) => {
  return $.ajax({
      method: 'POST',
      url: '/api/updateuser',
      data: {user}
  });
};

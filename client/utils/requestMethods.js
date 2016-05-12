import axios from 'axios';

exports.loadTeacherData = (callback) => {
  const id = 5;
  const url = `http://52.38.194.99/api/teachers/${id}`;
  return axios({
    url,
    timeout: 20000,
    method: 'get',
    // responseType: 'json',
    data: id,
  })
  .then((response) => {
    callback(null, response.data);
  })
  .catch((error) => {
    callback(error, null);
  });
};

exports.loadStudentData = (callback) => {
  const id = 30;
  const url = `http://52.38.194.99/api/students/${id}`;
  return axios({
    url,
    timeout: 20000,
    method: 'get',
    // responseType: 'json',
    data: id,
  })
  .then((response) => {
    console.log(response.data);
    callback(null, response.data);
  })
  .catch((error) => {
    callback(error, null);
  });
};

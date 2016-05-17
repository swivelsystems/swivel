import axios from 'axios';

exports.loadTeacherData = (callback) => {
  const id = 5;
  const url = `http://www.swivelsystems.org/api/teachers/home/${id}`;
  return axios({
    url,
    timeout: 20000,
    method: 'get',
    // responseType: 'json',
    data: id,
  })
  .then((response) => {
    const data = response.data;
    console.log(data);
    callback(null, data);

    return data.courses.map((course, index) => (
      axios({
        url: `http://www.swivelsystems.org/api/teachers/course/${course.id}`,
        timeout: 20000,
        method: 'get',
        data: course.id,
      })
      .then((res) => {
        data.courses[index].students = res.data.students;
        callback(null, data);
      })
    ));
  })
  .catch((error) => {
    callback(error, null);
  });
};

exports.loadStudentData = (callback) => {
  const id = 30;
  const url = `http://www.swivelsystems.org/api/students/${id}`;
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

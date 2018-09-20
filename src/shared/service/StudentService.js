import Vue from 'vue'

export default {
  getStudentList (pageIndex, pageSize) {
    let config = {
      params: {
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    }
    return Vue.http.get('students', config)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  addStudent (name, address) {
    let params = {
      name: name,
      address: address
    }
    return Vue.http.post('students', params)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  getStudentById (id) {
    let config = {
      params: {
        id: id
      }
    }
    return Vue.http.get('student', config)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  updateStudent (id, name, address) {
    let params = {
      id: id,
      name: name,
      address: address
    }
    return Vue.http.put('student', params)
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  deleteStudent (id) {
    let config = {
      params: {
        id: id
      }
    }
    return Vue.http.delete('student', config)
      .then(response => response.data)
      .catch(error => console.log(error))
  }
}

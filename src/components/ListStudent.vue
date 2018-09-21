<template>
   <div class="container">
     <h2>List student</h2>
     <table class="table">
       <thead>
       <tr>
         <th>STT</th>
         <th>Id</th>
         <th>Name</th>
         <th>Email</th>
       </tr>
       </thead>
       <tbody>
       <tr v-for="(student, index) in students" :key="index" @click="chooseStudent(student.id)">
         <td>{{index}}</td>
         <td>{{student.id}}</td>
         <td>{{student.name}}</td>
         <td>{{student.email}}</td>
       </tr>
       </tbody>
     </table>
     <div v-if="show" id="submit-review">
       <h2>Submit a Review</h2>
       <hr/>

       <form>
         <div class="form-group">
           <label for="email">Email:</label>
           <input type="email" class="form-control" id="email"
                  v-model="review.passportNumber"
                  placeholder="Enter your email address">
         </div>

         <div class="form-group">
           <label for="name">Name:</label>
           <input type="text" class="form-control" id="name"
                  v-model="review.name"
                  placeholder="Enter your name">
         </div>

         <div class="form-group">
           <label for="review">Review:</label>
           <textarea class="form-control" id="review" rows="5"
                     v-model="review.message"
                     placeholder="Write your message here..."></textarea>
         </div>

         <div class="form-group">
           <label for="rating">Rating</label>
           <select class="form-control" id="rating" v-model.number="review.rating">
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
           </select>
         </div>

         <button type="submit" @click="onSubmit()" class="btn btn-info">Submit</button>
       </form>
     </div>
   </div>
</template>

<script>
  // import StudentService from '../shared/service/StudentService'
  import axios from 'axios'

export default {
  name: 'ListStudent',
  data () {
    return {
      students: [
        {
          id: 1,
          name: 'Anhvv1',
          email: 'Anhvv1@gmail.com'
        },
        {
          id: 2,
          name: 'Anhvv2',
          email: 'Anhvv2@gmail.com'
        },
        {
          id: 3,
          name: 'Anhvv3',
          email: 'Anhvv3@gmail.com'
        },
        {
          id: 4,
          name: 'Anhvv4',
          email: 'Anhvv4@gmail.com'
        }
      ],
      totalItems: 0,
      itemsPerPage: 10,
      currentPage: 1,
      show: false,
      review: {
        passportNumber: null,
        name: null,
        rating: null,
        message: null
      }
    }
  },
  created () {
    this.getStudents()
  },
  methods: {
    getStudents () {
      axios.get('http://localhost:8080/api/students/').then((response) => {
        this.students = response.data
      })
        .catch((e) => {
          console.error(e)
        })
      // StudentService.getStudentList(this.currentPage, this.itemsPerPage)
      //   .then(response => {
      //     console.log(response)
      //     this.students = response
      //     // this.totalItems = response.totalItems
      //   })
    },
    onSubmit () {
      console.log('Submit review')
      axios.post('http://localhost:8080/api/students/', this.review).then((response) => {
        this.getStudents()
        this.show = false
      })
        .catch((e) => {
          console.error(e)
        })
    },
    chooseStudent (id) {
      console.log('click view ' + id)
      this.show = true
    }
  }
}
</script>

<style scoped>

</style>

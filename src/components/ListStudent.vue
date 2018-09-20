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
       <tr v-for="(student, index) in students" :key="index">
         <td>{{index}}</td>
         <td>{{student.id}}</td>
         <td>{{student.name}}</td>
         <td>{{student.email}}</td>
       </tr>
       </tbody>
     </table>
   </div>
</template>

<script>
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
      ]
    }
  }
}
</script>

<style scoped>

</style>

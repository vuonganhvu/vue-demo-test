<template>
  <header id="header">
    <nav class="navbar navbar-light bg-dark text-dark">
      <span class="navbar-brand font-weight-bold">
        Student
      </span>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/listStudent" class="nav-link" active-class="active" exact>Students</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/student" class="nav-link" active-class="active">Submit Reviews</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

 .active {
   font-weight: 600;
   text-decoration: underline;
   color: blueviolet;
 }
</style>

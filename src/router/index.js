import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListStudent from '@/components/ListStudent'
import Student from '@/components/Student'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListStudent',
      component: ListStudent
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/listStudent',
      name: 'ListStudent',
      component: ListStudent
    },
    {
      path: '*',
      name: 'ListStudent',
      component: ListStudent
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    }
  ]
})

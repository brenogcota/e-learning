<template>

  <Header />
  
  <main class="_home pb-3 bg-white dark:bg-black text-gray-700 dark:text-gray-50" :class="dark ? 'dark' : 'light'">
    
    <section class="mx-32 my-12"  v-for="item in [1,2,3]" :key="item">
        <h3 class="my-4">Principais escolhas para <strong>Breno</strong></h3>

        <div class="flex">
            <div class="w-64 my-1 mx-2 cursor-pointer" v-for="course in courses" :key="course.ud">
                <router-link :to="'/course/'+course.name+'/lessons/'+course.lessons[0].title+'/'+course.lessons[0].videos[0].name">
                    <img class="rounded-md" src="https://media-exp1.licdn.com/dms/image/C4E0DAQHvZeucavYjqw/learning-public-crop_288_512/0/1631691409001?e=1632517200&v=beta&t=D79ly7KkaO8Rk7bht4lrMJ2Hqmg4S-uy7HoXRciN3B4"/>
                    <span class="text-sm text-gray-600">Curso</span>
                    <h4 class="text-lg">{{ course.name }}</h4>
                    <span class="text-xs text-gray-500">De: {{ course.user.name }}</span>
                </router-link>
            </div>
        </div>
    </section>

  </main>

  <Footer />

  <router-view></router-view>
</template>

<script>
import Header from './subcomponents/Header.vue'
import Footer from './subcomponents/Footer.vue'

export default {
  name: 'LessonPage',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      courses: null
    }
  },
  created() {
    const api = this.$store.state.api
    fetch(`${api}/course`)
      .then(res => res.json())
      .then(data => {
        this.courses = data
      })
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>

  <Header />
  
  <main class="_home pb-3 bg-white dark:bg-black text-gray-700 dark:text-gray-50" :class="dark ? 'dark' : 'light'">
    
    <section class="flex">
      <Lessons v-bind:lessons="lessons" v-bind:course="course" v-bind:lesson="lesson" v-bind:current="current" />
      <Lesson v-bind:course="courseContent" />
    </section>

  </main>

  <Footer />

  <router-view></router-view>
</template>

<script>
import Header from './subcomponents/Header.vue'
import Footer from './subcomponents/Footer.vue'
import Lessons from './subcomponents/Lessons.vue'
import Lesson from './subcomponents/Lesson.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Lessons,
    Lesson
  },
  data() {
    return {
      apiUrl: 'http://localhost:3002',
      show: false,
      dark: false,
      lesson: '',
      current: '',
      course: '',
      lessons: null,
      courseContent: null
    }
  },
  methods: {
    toggle: function (key){
      this.[key] = !this.[key]
    },
    toggleTheme() {
      this.dark = !this.dark
    },
    getLessons() {
      this.lesson = this.$route.params.lesson
      this.current = this.$route.params.id
      this.course = this.$route.params.course
    },
    getCourse() {
      const api = this.apiUrl
      fetch(`${api}/course/${this.course}`)
        .then(res => res.json())
        .then(data => {
          const { name, id, author, details, lessons } = data

          this.lessons = lessons
          this.courseContent = { id, name, author, details }
        })
    },
    theme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) || window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        this.dark = true
      }
    }
  },
  created() {
    this.theme()
    this.getLessons()
    this.getCourse()
  },
  watch: {
    dark(themeDark) {
      if(themeDark) {
        localStorage.setItem('theme', 'dark')
        return
      }
      localStorage.setItem('theme', 'light')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.border-radius-50 {
  border-radius: 50%;
}
.gradient {
  background: linear-gradient(to right, red, purple);
  padding: 0.075rem;
}
</style>

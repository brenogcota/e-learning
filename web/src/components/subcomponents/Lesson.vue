
<template>
    <section v-if="!!course" class="w-4/6 min-h-screen max-h-screen overflow-y-scroll">
        <iframe v-if="!!videoLesson" width="100%" height="365" :src="videoLesson" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <div class=" border-b">
            <ul class="flex justify-between px-6 bg-white">
                <li @click="setTabActive('overview')" class="flex items-center p-2 cursor-pointer" :class="isActive('overview') ? 'border-b-2 border-blue-400' : 'opacity-80' ">
                    <svg class="color-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" :fill="isActive('overview') ? '#3792CB' : 'currentColor'" width="24" height="24" focusable="false">
                        <path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H4V6h16v12zm-7-7H6v5h7v-5zm-1 4H7v-3h5v3zm2-2h4v1h-4v-1zm0 2h4v1h-4v-1zm0-4h4v1h-4v-1zm4-1H6V8h12v2z"></path>
                    </svg>
                    <span class="ml-1 text-sm text-blue-400" :class="isActive('overview') ? 'text-blue-400' : ''">Visão geral</span>
                </li>
                <li @click="setTabActive('doubts')" class="flex items-center p-2 cursor-pointer" :class="isActive('doubts') ? 'border-b-2 border-blue-400' : 'opacity-80' ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" :fill="isActive('doubts') ? '#3792CB' : 'currentColor'" width="24" height="24" focusable="false">
                        <path d="M2 11h20v2H2v-2zm0 7h13v-2H2v2zM2 6v2h20V6H2z"></path>
                    </svg>
                    <span class="ml-1 text-sm" :class="isActive('doubts') ? 'text-blue-400' : ''">Dúvidas</span>
                </li>
                <li @click="setTabActive('comments')" class="flex items-center p-2 cursor-pointer" :class="isActive('comments') ? 'border-b-2 border-blue-400' : 'opacity-80' ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" :fill="isActive('comments') ? '#3792CB' : 'currentColor'" width="24" height="24" focusable="false">
                        <path d="M21 8H8a1 1 0 00-1 1v10a1 1 0 001 1h10l4 3V9a1 1 0 00-1-1zm-1 11.11L18.52 18H9v-8h11v9.11zM12 15h5v1h-5v-1zm-8-2h1v2H3a1 1 0 01-1-1V4a1 1 0 011-1h13a1 1 0 011 1v2h-2V5H4v8zm14 0h-7v-1h7v1z"></path>
                    </svg>
                    <span class="ml-1 text-sm" :class="isActive('comments') ? 'text-blue-400' : ''">Comentários</span>
                </li>
            </ul>
        </div>

        <div :class="isActive('overview') ? 'block' : 'hidden'">
            <div class="py-3 px-6 mt-4">
                <p class="text-sm mb-4">Instrutor</p>

                <div class="flex">
                    <img :src="course.author.image" class="w-20 h-20 bg-gray-300 rounded-full object-cover" :alt="course.author.name" />
                    <div class="mx-3">
                        <strong>{{ course.author.name }}</strong>
                        <p>{{ course.author.occupation }}</p>
                    </div>
                </div>
            </div>

            <div class="py-3 px-6 mt-4">
                <h2 class="mb-4 text-2xl">Detalhes do curso</h2>
                <span class="text-gray-400 mb-4">{{ course.details.duration }}   {{ course.details.level }}   Atualizado: {{ course.details.lastUpdate }}</span>

                <p class="my-3 text-gray-600">{{ course.details.description }}</p>

                <h3 class="text-sm mb-4 text-xl">Objetivos de aprendizagem</h3>
                
                <ol class="list-disc ml-6">
                    <li v-for="resume in course.details.resume" :key="resume">{{ resume }}</li>
                </ol>
            </div>
        </div>

        <div class="py-3 px-6 mt-4" :class="isActive('doubts') ? 'block' : 'hidden'">Dúvidas</div>
        <div class="py-3 px-6 mt-4" :class="isActive('comments') ? 'block' : 'hidden'">Comentários</div>


        <Footer />
    </section>

</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'Lesson',
  components: {
    Footer
  },
  data() {
      return {
          tabActive: 'overview'
      }
  },
  props: ['course'],
  methods: {
      setTabActive: function(tab) {
          this.tabActive = tab
      },
      isActive: function(tab) {
          return this.tabActive == tab
      }
  },
  computed: {
    videoLesson () {
        return this.$store.state.videoLesson
    }      
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

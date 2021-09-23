<template>
  <section v-if="lessons" class="bg-gray-800 text-white w-2/6 min-h-screen max-h-screen overflow-y-scroll">
    <header class="p-2 font-bold">Conteúdo</header>
    <div class="p-2 cursor-pointer bg-gray-700">
        <h6 class="flex text-xs mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                <path d="M1.29 8.71a1 1 0 010-1.41L6.59 2l1.29 1.29L4.17 7H14v2H4.17l3.71 3.71L6.59 14z"></path>
            </svg>
            <span class="ml-1">Voltar à rota de aprendizagem</span>
        </h6>
        <h4 class="ml-5">Become a Node Developer</h4>
    </div>

    <ul v-for="lesson in lessons"  :key="lesson.id" class="border-t border-b border-gray-500">
        <div @click="toggleAccordion" :class="isCurrent('courseLesson', lesson) ? 'active' : ''" class="flex items-center justify-between p-2 cursor-pointer">
            <p>{{ lesson.title }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#666" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        </div>
        <div class="_lessons" :class="isCurrent('courseLesson', lesson) ? 'open' : ''">
            <li v-for="video in lesson.videos" :key="video.id" @click="nextStep(lesson.title, video.name, video.url)" class="p-2 cursor-pointer px-3 bg-gray-900" :class="isCurrent('currentClass', video) ? 'opacity-1 border' : 'opacity-40'">
                <p class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" :fill="video.view ? 'green' : 'currentColor'" width="16" height="16" focusable="false">
                        <path d="M15 3L6.57 13.72A.7.7 0 016 14a.72.72 0 01-.56-.27L1 8.07 2.36 7 6 11.72 13.68 2z"></path>
                    </svg>
                    <span class="ml-2">{{ video.name }}</span>
                    <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" :fill="video.saved ? 'green' : 'currentColor'" width="16" height="16" focusable="false">
                        <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1zM5 12V3h6v9l-3-2z"></path>
                    </svg>
                </p>
                <span class="text-xs">{{ msToTime(video.time) }}</span>
            </li>
        </div>
    </ul>

  </section>
</template>

<script>

export default {
  name: 'Lessons',
  data() {
    return {
      courseLesson: this.lesson,
      currentClass: this.current
    }
  },
  props: ['course', 'lesson', 'current', 'lessons'],
  methods: {
    toggleAccordion: function (e){
      const el = e.target.closest('div')
      el.classList.toggle('active')

      const { nextSibling } = el
      nextSibling.classList.toggle('open')
    },
    msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    },
    isCurrent: function (type, current) {
      if(type == 'courseLesson') return this[type].toLowerCase().replaceAll('-', ' ') == current.title.toLowerCase()

      if(this[type].toLowerCase().replaceAll('-', ' ') == current.name.toLowerCase()) {
        this.$store.dispatch('nextVideo', current.url)
        return true
      }
    },
    nextStep: function(nextLesson, nextClass, nextVideo) {
        nextLesson = this.slugfy(nextLesson)
        nextClass = this.slugfy(nextClass)

        this.courseLesson = nextLesson
        this.currentClass = nextClass

        this.$store.dispatch('nextVideo', nextVideo)
        return window.location.hash = `/course/${this.course}/lessons/${nextLesson}/${nextClass}`
    },
    slugfy: function(value) {
        return value.toLowerCase().replaceAll(/%20| |\//g, '-')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
._lessons {
    display: none;
}
._lessons.open {
    display: block;
}
.active svg {
    transform: rotate(180deg);
}
</style>

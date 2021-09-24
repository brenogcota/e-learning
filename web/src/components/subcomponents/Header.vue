<template>
  <header class="flex justify-between items-center px-12 py-2 border-b border-gray-100">
    <a class="text-gray-500 text-lg cursor-pointer">e-Learning</a>

    <div class="flex justify-between items-center bg-gray-200 px-2">
        <img class="opacity-40 cursor-pointer" src="../../assets/search.svg"/>
        <input 
            class="p-1 bg-transparent outline-none"
            type="text" 
            placeholder="Pesquisar competências"/>
    </div>

    <nav>
        <ul class="flex justify-between items-center text-gray-500 text-sm">
            <li class="mx-2 cursor-pointer"><router-link to="/"><img class="mx-auto opacity-40" src="../../assets/home.svg" /> <span>Início</span></router-link></li>
            <li class="mx-2 cursor-pointer"><img class="mx-auto opacity-40" src="../../assets/learn.svg" /> <span>Aprendizado</span></li>
            <li class="mx-2 cursor-pointer"><img class="mx-auto opacity-40" src="../../assets/notification.svg" /> <span>Notificações</span></li>
            <li class="mx-2 cursor-pointer"><img class="mx-auto w-6 h-6 rounded-full" src="https://media-exp1.licdn.com/dms/image/C4D03AQEB4eCHfIQhWg/profile-displayphoto-shrink_100_100/0/1605400211649?e=1637798400&v=beta&t=C1_8jtGGw0GZotdOh_oBbIv7WMe7pX0hsSSVPnSiQhw" /> <span>Eu</span></li>
        </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

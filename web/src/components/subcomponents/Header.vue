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
            <li class="mx-2 cursor-pointer"><img class="mx-auto opacity-40" src="../../assets/home.svg" /> <span>Início</span></li>
            <li class="mx-2 cursor-pointer"><img class="mx-auto opacity-40" src="../../assets/learn.svg" /> <span>Aprendizado</span></li>
            <li class="mx-2 cursor-pointer"><img class="mx-auto opacity-40" src="../../assets/notification.svg" /> <span>Notificações</span></li>
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

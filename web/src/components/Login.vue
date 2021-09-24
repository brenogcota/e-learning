<template>

  <main class=" pb-3 bg-white dark:bg-black text-gray-700 dark:text-gray-50" :class="dark ? 'dark' : 'light'">
    
    <section class="mx-32 my-12 flex flex-col justify-center items-center">
        <h4 class="my-4">e-Learning</h4>

        <div class="flex flex-col text-center">
            <h2 class="m-1 text-3xl">Entrar</h2>
            <p class="m-1 mb-6">Entre com o mesmo endereço de e-mail que você utiliza no LinkedIn.com ou com seu e-mail corporativo</p>

            <input class="m-1 p-1 border-2 border-gray-200 outline-none" type="text" placeholder="Seu nome" />
            <button class="m-1 p-1 text-gray-400 border-2 border-gray-200 bg-blue-500 opacity-70 hover:opacity-100">CONTINUAR</button>

            <router-link to="/signup">
                Novo no e-Learn? <strong class="text-blue-500">Cadastre-se</strong>
            </router-link>
        </div>
    </section>

  </main>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      data: null
    }
  },
  created() {
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

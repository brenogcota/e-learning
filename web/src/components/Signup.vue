<template>

  <main class=" pb-3 bg-white dark:bg-black text-gray-700 dark:text-gray-50" :class="dark ? 'dark' : 'light'">
    
    <section class="mx-32 my-12 flex flex-col justify-center items-center">
        <h4 class="my-4">e-Learning</h4>

        <div class="flex flex-col text-center">
            <h2 class="m-1 mb-6 text-3xl">Aproveite sua vida profissional ao máximo</h2>
        
            <input @change="uploadImage($event)" class="m-1 p-1" type="file" name="file" id="file" />
            <div class="m-1 w-24 h-24 bg-gray-200 border-gray-400 border-2 border-dashed rounded">
                <img class="w-100" :src="image"/>
            </div>

            <input class="m-1 p-1 border-2 border-gray-200 outline-none" type="text" placeholder="Seu nome" />
            <input class="m-1 p-1 border-2 border-gray-200 outline-none" type="text" placeholder="Ocupação" />
            <button class="m-1 p-1 text-gray-400 border-2 border-gray-200 bg-blue-500 opacity-70 hover:opacity-100">CADASTRAR</button>

            <router-link to="/login">
                Não é novo por aqui? <strong class="text-blue-500">Entrar</strong>
            </router-link>
        </div>
    </section>

  </main>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'Signup',
  data() {
    return {
      image: 'https://cdn.iconscout.com/icon/free/png-256/gallery-187-902099.png'
    }
  },
  created() {
  },
  methods: {
    uploadImage: function(event) {
        const api = this.$store.state.api
        let data = new FormData();
        data.append('name', 'file');
        data.append('file', event.target.files[0]); 

        fetch(`${api}/user/avatar`, {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then(data => {
            this.image = api + data.image.url
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

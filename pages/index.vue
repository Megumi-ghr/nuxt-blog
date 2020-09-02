
<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-blog
      </h1>
      <h2>index</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>title</th>
              <!--<th>created_at</th>-->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in posts" :key="index">
              <td>{{ item.title }}</td>
              <!--<td>202009021443</td>-->
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <NuxtLink to="/post/new">
          Post
        </NuxtLink>
      </div>
      
      <!--
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      -->
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  data: function() {
    return {
      title: ""
    }
  },
  computed: {
    ...mapState(["posts"])
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<!--
<templete>
  <div>
    <h1>indexページ</h1>
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>created_at</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>test</td>
          <td>202009021443</td>
        </tr>
      </tbody>
    </table>
  </div>
</templete>
-->
<template>
  <div>
    <nav id="menus" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li>
              <a class="nav-link active" aria-current="page" href="/think">Think</a>
            </li>
            <li>
              <a class="nav-link active" aria-current="page" href="/want">Want</a>
            </li>
            <li>
              <a class="nav-link active" aria-current="page" href="/loadmap">LoadMap</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view id="app-main-content"></router-view>
  </div>
</template>
<script>
import request from "request";

export default {
  name: "App",
  components: {},
  mounted() {
    request(
      "http://localhost:8082/api/hello",
      function (error, response, body) {
        window.console.log("error:", error);
        window.console.log("statusCode:", response && response.statusCode);
        window.console.log("body:", body);
      }
    );
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#menus {
  position: sticky;
  top: 0;
}

#app-main-content {
  padding: 20px;
}
</style>
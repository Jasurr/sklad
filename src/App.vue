<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item
            v-for="link in links"
            :key="link.title"
            :index="link.title"
          >
            <router-link :to="link.url" tag="span"
              >{{ link.title }}
            </router-link>
          </el-menu-item>
          <el-menu-item index="1" v-if="isUserLogined" @click="logout">
            <router-link to="/"  tag="span">Logout</router-link>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-alert
        :title="error"
        type="error"
        show-icon
        v-if="error"
        class="el-col-9 el-col-offset-8"
      ></el-alert>
    </el-container>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  computed: {
    links() {
      if (this.isUserLogined) {
        return [{ title: "List of goods", url: "/" }];
      }
      return [
        { title: "Login", url: "/login" },
        { title: "Registration", url: "/registration" }
      ];
    },
    isUserLogined() {
      return this.$store.getters.isUserLogined;
    },
    error() {
      return this.$store.getters.error;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  },
  created() {
    this.$store.dispatch("clearError");
  }
};
</script>
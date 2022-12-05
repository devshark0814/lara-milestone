<template>
  <v-app>
    <v-navigation-drawer app color="primary">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 white--text"> MileStone </v-list-item-title>
          <v-list-item-subtitle class="white--text"> management </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="menu in menus" :key="menu.title" link  @click="jump(menu.link)">
          <v-list-item-icon>
            <v-icon class="white--text">{{ menu.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="secondary">
      <!-- -->
    </v-app-bar>

    <!-- アプリケーションのコンポーネントに基づいてコンテンツのサイズを決定 -->
    <v-main>
      <!-- アプリケーションに適切なgutterを提供 -->
      <v-container fluid>
        <!-- vue-routerを使用する場合 -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { title: "Dashboard", icon: "mdi-view-dashboard", link: "/" },
        { title: "Gantt", icon: "mdi-view-dashboard", link: "/gantt" },
      ],
    };
  },

  methods: {
    jump(url) {
      this.$router.push(url);
    }
  },
};
</script>
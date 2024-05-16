<script setup></script>
<template>
  <v-app class="v-app">
    <v-container fluid fill-height>
      <v-row class="grid-box" align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <div class="text-center">
            <img height="70" contain src="@/assets/alt_logo.png" />
          </div>
          <RouterView />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<style scoped>
.grid-box {
  height: 100vh;
}
.v-app {
  background-color: #fafbfc;
}
</style>
<style>
/* 子コンポーネントに適応させるCSS */
.sign-card {
  max-width: 500px;
}
</style>

<script setup></script>
<template>
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
</template>
<style scoped>
.grid-box {
  height: 100vh;
}
.zoom-in-enter-active {
  animation: zoom-in 0.5s;
}

@keyframes zoom-in {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
</style>

<script setup>
// コンポーネント
import CHeader from '@/components/HeaderComponent.vue'
import CMenu from '@/components/MenuComponent.vue'
</script>
<template>
  <v-app class="v-app">
    <c-header></c-header>
    <v-main>
      <c-menu></c-menu>
      <v-card class="ma-5">
        <RouterView />
      </v-card>
    </v-main>
  </v-app>
</template>

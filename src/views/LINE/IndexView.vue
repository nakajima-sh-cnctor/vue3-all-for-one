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
      <div class="pa-5">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>

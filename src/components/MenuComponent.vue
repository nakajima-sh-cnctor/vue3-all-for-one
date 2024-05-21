<script setup>
import { ref } from 'vue'
import { useService } from '@/stores/service'

const drawer = ref(true)
const rail = ref(true)
</script>
<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
    class="bg-primary"
  >
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-menu" color="primary" @click.stop="rail = !rail">
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="(item, i) in useService().serviceList"
        :key="i"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

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
      <template v-for="(item, i) in useService().serviceList" :key="i">
        <v-list-item
          v-if="!item.group"
          :prepend-icon="item.icon"
          :to="item.to"
          :title="item.title"
          :value="item.value"
          slim
        ></v-list-item>
        <v-list-group :value="item.value" v-else>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :prepend-icon="item.icon"
              :title="item.title"
              slim
            ></v-list-item>
          </template>
          <v-list-item
            v-for="(groupitem, i) in item.group"
            :key="i"
            :to="groupitem.to"
            :title="groupitem.title"
            :value="groupitem.value"
          ></v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

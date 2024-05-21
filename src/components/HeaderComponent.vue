<script setup>
import { useAuthStore } from '@/stores/auth'
const account = useAuthStore().user
const items = [
  { title: 'プロファイル変更', icon: 'mdi-lock-reset' },
  { title: 'マニュアル', icon: 'mdi-file-document' },
  { title: 'サインアウト', icon: 'mdi-shield-lock-outline' }
]
</script>
<template>
  <v-app-bar :elevation="3">
    <div class="d-flex mx-5">
      <v-app-bar-title><img height="40" contain src="@/assets/alt_logo.png" /> </v-app-bar-title>
      <h1 class="px-5 text-h5 d-flex align-center">Demo Store</h1>
    </div>
    <v-spacer></v-spacer>
    <template v-slot:append>
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-list lines="one" v-bind="props" class="account">
            <v-list-item link>
              <v-list-item-title class="font-weight-bold">{{
                account.accountname
              }}</v-list-item-title>
              <v-list-item-subtitle>{{ account.email }}</v-list-item-subtitle>
              <template v-slot:append>
                <v-avatar color="primary">
                  <v-btn icon="mdi-account" variant="text"></v-btn>
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-subtitle> 権限 </v-list-item-subtitle>
            <v-btn
              class="my-1 chips"
              color="primary"
              variant="outlined"
              rounded="xl"
              density="comfortable"
              block
            >
              管理者
            </v-btn>
          </v-list-item>
          <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
            <template v-slot:append>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>
<style scped>
.chips {
  text-align: center;
  width: 100%;
}
.account {
  width: 300px;
}
</style>

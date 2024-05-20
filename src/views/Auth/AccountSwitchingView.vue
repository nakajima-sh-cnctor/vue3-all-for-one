<script setup>
// import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
const accountList = useAuthStore().accountList
</script>
<template>
  <v-card class="mx-auto my-3 pa-5 sign-card">
    <v-card-title>アカウント名</v-card-title>
    <v-divider></v-divider>
    <v-card-item>
      <v-list :items="accountList" class="account-list"></v-list>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-item>
      <div class="d-flex">
        <v-btn class="pa-0" color="primary" variant="text">サインインに戻る</v-btn>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </div>
    </v-card-item>
  </v-card>
</template>
<style scoped>
.account-list {
  height: 340px;
}
</style>

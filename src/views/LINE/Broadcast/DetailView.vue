<script setup>
import { useBroadcast } from '@/stores/broadcast'
</script>
<template>
  <div>
    <v-card-title class="font-weight-bold">メッセージ配信</v-card-title>
    <!-- TODO:戻るボタンとオーディエンスボタンを配置する -->
    <v-card-item>
      <div class="d-flex">
        <router-link :to="{ name: 'Broadcast' }">
          <v-btn color="primary" variant="text">
            <v-icon>mdi-keyboard-backspace</v-icon>
            一覧に戻る
          </v-btn>
        </router-link>
        <v-btn color="primary" variant="flat" class="mx-3"> オーディエンス作成 </v-btn>
        <v-btn color="primary" variant="flat"> 分析をみる </v-btn>
      </div>
    </v-card-item>
    <v-card-item>
      <v-table>
        <tbody>
          <tr v-for="item in useBroadcast().detail" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-item>
  </div>
</template>

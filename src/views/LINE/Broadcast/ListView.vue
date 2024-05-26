<script setup>
import { reactive, computed } from 'vue'
import { useBroadcast } from '@/stores/broadcast'

const tabs = reactive([
  { name: '配信予約中', value: 'reservation' },
  { name: '下書き', value: 'draft' },
  { name: '配信済み', value: 'done' },
  { name: '配信エラー', value: 'error' }
])

const itemsPerPage = 3
const pageCount = computed(() => Math.ceil(useBroadcast().desserts.length / itemsPerPage))
</script>
<template>
  <div>
    <v-card-title class="font-weight-bold">メッセージ配信</v-card-title>
    <v-card-item>
      <v-tabs v-model="useBroadcast().tab" color="primary">
        <v-tab v-for="(item, index) in tabs" :key="index" :value="item.value">{{
          item.name
        }}</v-tab>
      </v-tabs>
      <v-tabs-window v-model="useBroadcast().tab">
        <v-card-item>
          <v-data-table
            v-model:page="useBroadcast().page"
            :headers="useBroadcast().headers"
            :items="useBroadcast().desserts"
            :items-per-page="itemsPerPage"
            no-data-text="データがありません"
          >
            <template v-slot:bottom>
              <div class="text-center pt-2">
                <v-divider></v-divider>
                <v-pagination v-model="useBroadcast().page" :length="pageCount"></v-pagination>
              </div>
            </template>
          </v-data-table>
        </v-card-item>
      </v-tabs-window>
    </v-card-item>
  </div>
</template>

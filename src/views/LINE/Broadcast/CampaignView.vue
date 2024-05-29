<script setup>
import { ref, computed } from 'vue'
import { useCampaing } from '@/stores/campaing'

// コンポーネント
import CTextField from '@/components/OverrideVuetify/TextFieldComponent.vue'
import CCaption from '@/components/CaptionComponent.vue'

const search = ref('')
const itemsPerPage = 3

const pageCount = computed(() => Math.ceil(useCampaing().desserts.length / itemsPerPage))
</script>
<template>
  <div>
    <div class="d-flex align-center pa-3">
      <v-card-title class="font-weight-bold">キャンペーン</v-card-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn color="primary" variant="flat">
          <v-icon>mdi-plus-thick</v-icon>
          新規作成
        </v-btn>
      </div>
    </div>
    <v-card-item>
      <c-caption caption="検索">
        <div class="d-flex">
          <c-text-field v-model="search"></c-text-field>
          <v-btn color="secondary" class="ma-3" variant="flat" height="40" @click="search = ''">
            クリア
          </v-btn>
        </div>
      </c-caption>
    </v-card-item>
    <v-card-item>
      <v-data-table
        :headers="useCampaing().headers"
        :items="useCampaing().desserts"
        :search="search"
        no-data-text="データがありません"
      >
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.operation>
          <v-btn color="secondary" variant="text" icon="mdi-pencil"> </v-btn>
        </template>
        <template v-slot:bottom>
          <div class="text-center pt-2">
            <v-divider></v-divider>
            <v-pagination v-model="useCampaing().page" :length="pageCount"></v-pagination>
          </div>
        </template>
      </v-data-table>
    </v-card-item>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// コンポーネント
import CTextField from '@/components/OverrideVuetify/TextFieldComponent.vue'
import CCaption from '@/components/CaptionComponent.vue'

// store
import { useRichVideo } from '@/stores/richvideo'

const search = ref('')
const itemsPerPage = 3
const page = ref(1)

const pageCount = computed(() => Math.ceil(useRichVideo().desserts.length / itemsPerPage))
</script>
<template>
  <div>
    <div class="d-flex align-center pa-3">
      <v-card-title class="font-weight-bold">リッチビデオメッセージ一覧</v-card-title>
      <v-spacer></v-spacer>
      <div>
        <router-link :to="{ name: 'RichvideoCreate' }">
          <v-btn color="primary" variant="flat">
            <v-icon>mdi-plus-thick</v-icon>
            新規作成
          </v-btn>
        </router-link>
      </div>
    </div>
    <v-card-item>
      <p class="supplement-m">動画を使って視覚的にアピールできるメッセージです。</p>
    </v-card-item>
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
        v-model:page="page"
        :headers="useRichVideo().headers"
        :items="useRichVideo().desserts"
        :search="search"
        :items-per-page="itemsPerPage"
        no-data-text="データがありません"
      >
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.video="{ item }">
          <v-img :src="item.video" class="my-2" width="50" height="50"></v-img>
        </template>

        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.operation>
          <div>
            <v-btn color="secondary" variant="text" icon="mdi-pencil"> </v-btn>
            <v-btn color="secondary" variant="text" icon="mdi-trash-can-outline"> </v-btn>
          </div>
        </template>
        <template v-slot:bottom>
          <div class="text-center pt-2">
            <v-divider></v-divider>
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </template>
      </v-data-table>
    </v-card-item>
  </div>
</template>

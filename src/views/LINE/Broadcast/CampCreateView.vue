<script setup>
import { useCampaing } from '@/stores/campaing'
// コンポーネント
import CTextField from '@/components/OverrideVuetify/TextFieldComponent.vue'
import CCaption from '@/components/CaptionComponent.vue'
</script>
<template>
  <div>
    <div class="d-flex align-center pa-3">
      <v-card-title class="font-weight-bold">キャンペーン作成</v-card-title>
      <v-spacer></v-spacer>
      <div>
        <router-link :to="{ name: 'Campaign' }">
          <v-btn color="primary" variant="text">
            <v-icon>mdi-keyboard-backspace</v-icon>
            一覧に戻る
          </v-btn>
        </router-link>
      </div>
    </div>
    <v-card-item class="d-flex flex-row-reverse">
      <v-btn color="primary" variant="flat" min-width="100"> 保存 </v-btn>
    </v-card-item>
    <v-card-item>
      <c-caption caption="キャンペーン名">
        <c-text-field v-model="useCampaing().detail.name"></c-text-field>
      </c-caption>
    </v-card-item>
  </div>
</template>

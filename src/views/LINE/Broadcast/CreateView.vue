<script setup>
// コンポーネント
import CTextField from '@/components/OverrideVuetify/TextFieldComponent.vue'
import CCaption from '@/components/CaptionComponent.vue'
import CTextarea from '@/components/OverrideVuetify/TextareaComponent.vue'

import { useBroadcast } from '@/stores/broadcast'
</script>
<template>
  <v-card-title class="font-weight-bold">応答メッセージ作成</v-card-title>
  <v-card-item class="d-flex flex-row-reverse">
    <v-btn color="secondary" variant="flat" min-width="100"> 下書き保存 </v-btn>
    <v-btn color="secondary" variant="flat" min-width="100" class="mx-3"> テスト配信 </v-btn>
    <v-btn color="primary" variant="flat" min-width="100"> 配信 </v-btn>
  </v-card-item>
  <v-card-item>
    <c-caption caption="配信先">
      <div class="supplement-m">
        友だちの行動や属性などを基にターゲットを絞り込み、メッセージ配信の効果を高めることができます。
      </div>
      <v-btn-toggle
        v-model="useBroadcast().reqdata.destination"
        class="my-3"
        variant="outlined"
        color="primary"
        density="compact"
        divided
      >
        <v-btn>すべての友だち</v-btn>
        <v-btn>絞り込み</v-btn>
      </v-btn-toggle>
    </c-caption>
    <div v-if="useBroadcast().reqdata.destination == 1">
      <c-caption caption="配信先名（任意）" class="my-3">
        <div class="supplement-m">
          管理用にフィルター名を設定できます。フィルター名はメッセージリストに表示されます。
        </div>
        <c-text-field v-model="useBroadcast().reqdata.target_name"></c-text-field>
      </c-caption>
      <!-- TODO:オーディエンスは仕様が不明瞭なので後回し -->
      <c-caption caption="オーディエンス" class="my-3"></c-caption>
      <!-- TODO:属性は仕様が不明瞭なので後回し -->
      <c-caption caption="属性で絞り込み" class="my-3"></c-caption>
    </div>
    <c-caption caption="配信日時" class="my-3">
      <v-radio-group v-model="useBroadcast().reqdata.delivery_type">
        <v-radio color="primary" value="soon">
          <template v-slot:label> 今すぐ配信 </template>
        </v-radio>
        <v-radio color="primary" value="datetime">
          <template v-slot:label>
            <c-text-field
              v-model="useBroadcast().reqdata.delivery_date"
              type="date"
              hide-details="auto"
              :disabled="useBroadcast().reqdata.delivery_type != 'datetime'"
            ></c-text-field>
            <c-text-field
              v-model="useBroadcast().reqdata.delivery_time"
              type="time"
              hide-details="auto"
              class="mx-2"
              :disabled="useBroadcast().reqdata.delivery_type != 'datetime'"
            ></c-text-field>
          </template>
        </v-radio>
      </v-radio-group>
    </c-caption>
    <v-divider></v-divider>
    <c-caption caption="高度な設定" class="my-3">
      <div v-for="(item, index) in useBroadcast().advanced" :key="index">
        <v-checkbox
          v-model="item.status"
          :label="item.label"
          color="primary"
          hide-details="auto"
          density="compact"
        ></v-checkbox>
        <div v-if="index == 'upper_limit' && useBroadcast().advanced.upper_limit.status">
          <c-text-field v-model="useBroadcast().advanced.upper_limit.value"></c-text-field>
        </div>
        <div v-if="index == 'ac_test' && useBroadcast().advanced.ac_test.status">実装を後回し</div>
        <div v-if="index == 'campaign' && useBroadcast().advanced.campaign.status">
          実装を後回し
        </div>
      </div>
    </c-caption>
    <v-divider></v-divider>
    <!-- TODO：複数設定可能だが、他の機能との兼ね合いで今回は1件のみにしておく -->
    <c-caption caption="メッセージ設定">
      <c-textarea></c-textarea>
    </c-caption>
  </v-card-item>
</template>

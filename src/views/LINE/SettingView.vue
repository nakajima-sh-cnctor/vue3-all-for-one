<script setup>
import { ref } from 'vue'

// ストア
import { useLineConfig } from '@/stores/lineconfig'

// コンポーネント
import CTextField from '@/components/OverrideVuetify/TextFieldComponent.vue'
import CCaption from '@/components/CaptionComponent.vue'
import CQrdialog from '@/components/QRcodeDialogComponent.vue'

const show = ref(false)
</script>
<template>
  <div>
    <div class="d-flex align-center pa-3">
      <v-card-title class="font-weight-bold">LINE設定</v-card-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn color="secondary" variant="flat">
          <v-icon>mdi-cached</v-icon>
          データ更新
        </v-btn>
        <v-btn color="primary" variant="flat" class="mx-2">
          <v-icon>mdi-content-save-outline</v-icon>
          保存
        </v-btn>
      </div>
    </div>
    <v-divider></v-divider>
    <v-card-item>
      <c-caption caption="Webhook URL">
        <div class="d-flex">
          <c-text-field
            v-model="useLineConfig().config.webhook_url"
            readonly
            bg-color="#F5F7F8"
          ></c-text-field>
          <v-btn color="primary" class="ma-3" variant="flat" height="40">
            <v-icon>mdi-clipboard-text-multiple-outline</v-icon>
            コピー
          </v-btn>
        </div>
      </c-caption>
      <c-caption caption="チャネルアクセストークン">
        <c-text-field v-model="useLineConfig().config.access_token"></c-text-field>
      </c-caption>
      <c-caption caption="チャネルID">
        <c-text-field v-model="useLineConfig().config.channel_id"></c-text-field>
      </c-caption>
      <c-caption caption="チャネルシークレット">
        <c-text-field
          v-model="useLineConfig().config.channel_secret"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        ></c-text-field>
      </c-caption>
      <c-caption caption="LIFF ENDPOINT URL">
        <div class="d-flex">
          <c-text-field
            v-model="useLineConfig().config.liff_endpoint_url"
            bg-color="#F5F7F8"
            readonly
          ></c-text-field>
          <v-btn color="primary" class="ma-3" variant="flat" height="40">
            <v-icon>mdi-clipboard-text-multiple-outline</v-icon>
            コピー
          </v-btn>
        </div>
      </c-caption>
      <c-caption caption="LIFF ID">
        <c-text-field></c-text-field>
      </c-caption>
      <c-caption caption="LINE公式アカウントURL">
        <div class="my-3">
          <a :href="useLineConfig().config.line_url" class="text-primary font-weight-bold">
            {{ useLineConfig().config.line_url }}
          </a>
        </div>
      </c-caption>
      <c-caption class="my-7" caption="LINE公式アカウントQRコード">
        <c-qrdialog :generate-text="useLineConfig().config.line_url"></c-qrdialog>
      </c-caption>
    </v-card-item>
  </div>
</template>

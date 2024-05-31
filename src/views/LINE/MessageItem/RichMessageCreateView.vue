<script setup>
import { ref, onMounted } from 'vue'

// store
import { useRichMessage } from '@/stores/richmessage'

// コンポーネント
import CTextField from '@/components/OverrideVuetify/TextFieldComponent.vue'
import CTextarea from '@/components/OverrideVuetify/TextareaComponent.vue'
import CSelect from '@/components/OverrideVuetify/SelectComponent.vue'
import CCaption from '@/components/CaptionComponent.vue'

const fileInput = ref(null)
const expandedPanels = ref([])

onMounted(() => {
  expandedPanels.value = 0
})

// ファイル入力をトリガーする関数
const triggerFileInput = () => {
  fileInput.value.click()
}

// ファイルが選択されたときの処理
</script>
<template>
  <div class="d-flex align-center pa-3">
    <v-card-title class="font-weight-bold">リッチメッセージ作成</v-card-title>
    <v-spacer></v-spacer>
    <div>
      <router-link :to="{ name: 'RichMessage' }">
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
    <c-caption caption="タイトル" class="my-3">
      <div class="supplement-m">プッシュ通知とチャットリストに表示されます。</div>
      <c-text-field></c-text-field>
    </c-caption>
    <v-divider class="my-5"></v-divider>
    <v-card-subtitle class="font-weight-bold"> メッセージ設定 </v-card-subtitle>
    <div class="d-flex">
      <div class="ma-2">
        <v-img
          v-if="useRichMessage().image"
          :src="useRichMessage().image"
          :width="300"
          :height="300"
          aspect-ratio="16/9"
          cover
        ></v-img>
        <v-img></v-img>
      </div>

      <div class="ma-2">
        <c-caption caption="画像" class="my-3">
          <div class="supplement-m">背景画像をアップロードしてください</div>
          <v-btn
            class="my-2"
            color="primary"
            variant="flat"
            min-width="100"
            @click="triggerFileInput"
          >
            選択
          </v-btn>
          <input
            type="file"
            ref="fileInput"
            @change="useRichMessage().onFileChange"
            accept="image/*"
            style="display: none"
          />
        </c-caption>
        <c-caption caption="テンプレート" class="my-3">
          <!-- TODO：ここの機能は複雑な為後回し -->
          <v-btn class="my-2" color="primary" variant="flat" min-width="100"> 選択 </v-btn>
        </c-caption>
      </div>
    </div>
    <v-expansion-panels v-model="expandedPanels" class="my-5" elevation="0">
      <v-expansion-panel>
        <v-expansion-panel-title class="font-weight-bold text-primary"> A </v-expansion-panel-title>
        <v-expansion-panel-text>
          <c-caption caption="タイプ" class="my-3">
            <c-select v-model="useRichMessage().type" :items="useRichMessage().typelist"></c-select>
          </c-caption>
          <div v-if="useRichMessage().type == 2">
            <c-caption caption="テキスト" class="my-3">
              <p class="supplement-m">
                ユーザーがリッチメッセージをタップすると、このテキストがトークルームに送信されます。<br />
                応答メッセージのキーワードと一致するテキストを設定しておくと、そのキーワードを受信したときに、事前に設定しておいたメッセージを自動で返信できます。
              </p>
              <c-textarea></c-textarea>
            </c-caption>
          </div>
          <div v-else>
            <c-caption caption="URL" class="my-3">
              <c-text-field></c-text-field>
            </c-caption>
            <c-caption caption="アクションラベル" class="my-3">
              <p class="supplement-m">
                このテキストは音声読み上げ機能に使用され、未対応の端末では表示されます。
              </p>
              <c-textarea></c-textarea>
            </c-caption>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card-item>
</template>

<script setup>
import { ref } from 'vue'

// store
import { useRichVideo } from '@/stores/richvideo'

// コンポーネント
import CTextField from '@/components/OverrideVuetify/TextFieldComponent.vue'
import CCaption from '@/components/CaptionComponent.vue'
import CCombobox from '@/components/OverrideVuetify/ComboboxComponent.vue'

const fileInput = ref(null)
const video = ref(null)

// ファイル入力をトリガーする関数
const triggerFileInput = () => {
  useRichVideo().video = video.value
  fileInput.value.click()
}

// ファイルが選択されたときの処理
</script>
<template>
  <div class="d-flex align-center pa-3">
    <v-card-title class="font-weight-bold">リッチビデオメッセージ作成</v-card-title>
    <v-spacer></v-spacer>
    <div>
      <router-link :to="{ name: 'Richvideo' }">
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
          v-if="useRichVideo().thumbnailUrl"
          :src="useRichVideo().thumbnailUrl"
          :width="300"
          :height="300"
          aspect-ratio="16/9"
          cover
        ></v-img>
        <!-- 動画ファイルの詳細情報を表示 -->
        <div v-if="useRichVideo().fileName">ファイル名: {{ useRichVideo().fileName }}</div>
        <div v-if="useRichVideo().videoDuration">
          再生時間: {{ useRichVideo().formatDuration() }}
        </div>
      </div>

      <div class="ma-2">
        <c-caption caption="動画" class="my-3">
          <div class="supplement-m">動画を使って視覚的にアピールできるメッセージです。</div>
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
            @change="useRichVideo().onFileChange"
            accept="video/*"
            style="display: none"
          />
          <!-- 動画タグ（サムネイル生成用、表示しない） -->
          <video ref="video" style="display: none"></video>
        </c-caption>
        <c-caption caption="アクションボタン" class="my-3">
          <v-btn-toggle
            v-model="useRichVideo().actionflg"
            class="my-3"
            variant="outlined"
            color="primary"
            density="compact"
            divided
          >
            <v-btn>表示しない</v-btn>
            <v-btn>表示する</v-btn>
          </v-btn-toggle>
          <!-- TODO: テキストを入力して文言を自由に設定 -->
          <c-combobox
            v-if="useRichVideo().actionflg"
            v-model="useRichVideo().actionbtn"
            :items="useRichVideo().actionlist"
            hide-details
          ></c-combobox>
          <div class="supplement-m">テキストを入力して文言を自由に設定</div>
        </c-caption>
      </div>
    </div>
  </v-card-item>
</template>

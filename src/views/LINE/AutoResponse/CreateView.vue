<script setup>
import { ref } from 'vue'
import { useAutoResponse } from '@/stores/autoresponse'

// コンポーネント
import CTextField from '@/components/OverrideVuetify/TextFieldComponent.vue'
import CCaption from '@/components/CaptionComponent.vue'
import CTextarea from '@/components/OverrideVuetify/TextareaComponent.vue'

const getAutoResponse = useAutoResponse().detail

const word = ref('')
const addKeyword = () => {
  getAutoResponse.keyword.push(word.value)
  word.value = ''
}
</script>
<template>
  <div>
    <div class="d-flex align-center pa-3">
      <v-card-title class="font-weight-bold">応答メッセージ作成</v-card-title>
      <v-spacer></v-spacer>
      <div>
        <router-link :to="{ name: 'AutoResponse' }">
          <v-btn color="primary" variant="text">
            <v-icon>mdi-keyboard-backspace</v-icon>
            一覧に戻る
          </v-btn>
        </router-link>
      </div>
    </div>
    <v-divider></v-divider>
    <v-card-item class="d-flex flex-row-reverse">
      <v-btn color="primary" variant="flat" min-width="100"> 保存 </v-btn>
    </v-card-item>
    <v-card-item>
      <c-caption caption="ステータス">
        <v-btn-toggle
          v-model="getAutoResponse.status"
          class="my-3"
          variant="outlined"
          color="primary"
          density="compact"
          divided
        >
          <v-btn>有効</v-btn>
          <v-btn>無効</v-btn>
        </v-btn-toggle>
      </c-caption>
      <c-caption caption="タイトル">
        <c-text-field></c-text-field>
      </c-caption>
      <c-caption caption="応答ステータス">
        <v-btn-toggle
          v-model="getAutoResponse.restype"
          class="my-3"
          variant="outlined"
          color="primary"
          density="compact"
          divided
        >
          <v-btn>一律応答</v-btn>
          <v-btn>キーワード</v-btn>
        </v-btn-toggle>
        <div class="supplement-m" v-if="getAutoResponse.restype == 0">
          すべてのメッセージに対して返信されます
        </div>
        <div class="supplement-m" v-if="getAutoResponse.restype == 1">
          キーワードと完全一致するメッセージを受信したときに返信されます。<br />
          ※複数のキーワードを登録している場合は、いずれかのキーワードと完全一致したときに返信されます。
          <div class="d-flex">
            <c-text-field v-model="word" hide-details="auto"></c-text-field>
            <v-btn color="primary" class="ma-3" variant="flat" height="40" @click="addKeyword">
              追加
            </v-btn>
          </div>
          <v-chip
            v-for="(item, index) in getAutoResponse.keyword"
            :key="index"
            color="primary"
            closable
          >
            {{ item }}
          </v-chip>
        </div>
      </c-caption>
      <c-caption caption="オプション設定" class="my-6">
        <v-checkbox
          v-model="getAutoResponse.option"
          label="スケジュールを設定する"
          color="primary"
          hide-details="auto"
        ></v-checkbox>
        <template v-if="getAutoResponse.option">
          <div class="supplement-m">
            特定の期間または時間に返信する場合にチェックを入れてください。<br />
            チャットの応答時間を利用する場合は、チェックを入れる必要はありません。
          </div>
          <v-radio-group v-model="getAutoResponse.sukejurutype">
            <v-radio
              color="primary"
              v-for="(item, index) in getAutoResponse.sukejuru"
              :key="index"
              :value="index"
            >
              <template v-slot:label>
                <c-text-field
                  v-model="item.from"
                  :type="index"
                  hide-details="auto"
                  :disabled="getAutoResponse.sukejurutype != index"
                ></c-text-field>
                <span class="px-2">〜</span>
                <c-text-field
                  v-model="item.to"
                  :type="index"
                  hide-details="auto"
                  :disabled="getAutoResponse.sukejurutype != index"
                ></c-text-field>
                <span class="px-2" v-if="index == 'time'">毎日</span>
              </template>
            </v-radio>
          </v-radio-group>
        </template>
      </c-caption>
      <c-caption caption="メッセージ設定">
        <c-textarea></c-textarea>
      </c-caption>
    </v-card-item>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import useVuelidate from '@vuelidate/core'
import { validEmail } from '@/plugins/validatorRule'
// コンポーネント
import CTextField from '@/components/OverrideVuetify/TextFieldComponent.vue'

const showComponent = ref(false)
const loading = ref(false)

// 入力項目
const formValue = reactive({
  email: ''
})

onMounted(() => {
  showComponent.value = true
})

// バリデーション処理
const v$ = reactive(
  useVuelidate(
    {
      email: validEmail()
    },
    formValue
  )
)

// 認証コード送信処理
const submit = async () => {
  const validError = await v$.value.$validate()
  if (!validError) return
  loading.value = true
  // TODO: store authのaction（認証コード送信処理）を呼び出す
  setTimeout(() => (loading.value = false), 1500)
}
</script>
<template>
  <v-expand-transition>
    <v-card class="mx-auto my-3 pa-5 sign-card" v-show="showComponent">
      <v-card-title class="text-center">パスワードリセット</v-card-title>
      <v-card-item>
        <c-text-field
          v-model="formValue.email"
          placeholder="メールアドレス"
          prepend-inner-icon="mdi-account-circle-outline"
          :error-messages="v$.email.$errors.map((e) => e.$message)"
          @input="v$.email.$touch"
          @blur="v$.email.$touch"
        >
        </c-text-field>
        <p class="supplement-m">メールでパスワードリセット用のURLを送信します。</p>
      </v-card-item>
      <v-card-item>
        <div class="d-flex">
          <v-btn class="pa-0" color="primary" variant="text">サインインに戻る</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submit" :loading="loading">
            <v-icon left>mdi-email-outline</v-icon>
            認証コード送信
          </v-btn>
        </div>
      </v-card-item>
    </v-card>
  </v-expand-transition>
</template>

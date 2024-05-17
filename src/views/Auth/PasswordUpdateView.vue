<script setup>
import { reactive, ref, onMounted } from 'vue'
import useVuelidate from '@vuelidate/core'
import { validPassword } from '@/plugins/validatorRule'

// 入力項目
const formValue = reactive({
  password: ''
})

const showComponent = ref(false)
const loading = ref(false)

onMounted(() => {
  showComponent.value = true
})

// バリデーション処理
const v$ = reactive(
  useVuelidate(
    {
      password: validPassword()
    },
    formValue
  )
)
// 認証処理
const submit = async () => {
  const validError = await v$.value.$validate()
  if (!validError) return
  loading.value = true
  // TODO: store authのaction（ログイン処理）を呼び出す
  setTimeout(() => (loading.value = false), 1500)
}
</script>
<template>
  <v-expand-transition>
    <v-card class="mx-auto my-3 pa-5 sign-card" v-show="showComponent">
      <v-card-title class="text-center">新しいパスワードを入力してください</v-card-title>
      <v-card-item>
        <v-text-field
          v-model="formValue.password"
          placeholder="パスワード"
          prepend-inner-icon="mdi-shield-key-outline"
          variant="outlined"
          density="compact"
          type="password"
          required
          single-line
          :error-messages="v$.password.$errors.map((e) => e.$message)"
          @input="v$.password.$touch"
          @blur="v$.password.$touch"
          class="my-3"
        ></v-text-field>
      </v-card-item>
      <v-card-item>
        <div class="d-flex">
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submit" :loading="loading">
            <v-icon left>mdi-lock-reset</v-icon>
            パスワードを変更
          </v-btn>
        </div>
      </v-card-item>
    </v-card>
  </v-expand-transition>
</template>

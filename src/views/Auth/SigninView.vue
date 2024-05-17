<script setup>
import { reactive, ref, onMounted } from 'vue'
import useVuelidate from '@vuelidate/core'
import { validEmail, validPassword } from '@/plugins/validatorRule'
// コンポーネント
import CTextField from '@/components/OverrideVuetify/TextFieldComponent.vue'
// 入力項目
const formValue = reactive({
  email: '',
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
      email: validEmail(),
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
  setTimeout(() => (loading.value = false), 1500)
  // TODO: store authのaction（ログイン処理）を呼び出す
}
</script>
<template>
  <v-expand-transition>
    <v-card class="mx-auto my-3 pa-5 sign-card" v-show="showComponent">
      <v-card-title class="text-center">サインイン</v-card-title>
      <v-card-item>
        <c-text-field
          v-model="formValue.email"
          placeholder="メールアドレス"
          prepend-inner-icon="mdi-account-circle-outline"
          :error-messages="v$.email.$errors.map((e) => e.$message)"
          @input="v$.email.$touch"
          @blur="v$.email.$touch"
        ></c-text-field>

        <c-text-field
          v-model="formValue.password"
          placeholder="パスワード"
          prepend-inner-icon="mdi-shield-key-outline"
          type="password"
          :error-messages="v$.password.$errors.map((e) => e.$message)"
          @input="v$.password.$touch"
          @blur="v$.password.$touch"
        ></c-text-field>
      </v-card-item>
      <v-card-item>
        <div class="d-flex">
          <v-btn class="pa-0" color="primary" variant="text">パスワードを忘れた場合</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submit" :loading="loading">
            <v-icon left>mdi-login</v-icon>
            サインイン
          </v-btn>
        </div>
      </v-card-item>
    </v-card>
  </v-expand-transition>
</template>

<style scoped></style>

<script setup>
import { reactive, ref, defineEmits, defineProps } from 'vue'
import useVuelidate from '@vuelidate/core'
import { validEmail, validPassword } from '@/plugins/validatorRule'

// 入力項目
const formValue = reactive({
  email: '',
  password: ''
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
</script>
<template>
  <v-container fluid fill-height>
    <v-row class="grid-box" align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <div class="text-center">
          <img height="70" contain src="@/assets/alt_logo.png" transition="fab-transition" />
        </div>
        <v-card class="mx-auto my-3 pa-5" style="max-width: 500px">
          <v-card-title class="text-center">サインイン</v-card-title>
          <v-card-item>
            <v-text-field
              v-model="formValue.email"
              placeholder="メールアドレス"
              prepend-inner-icon="mdi-account-circle-outline"
              variant="outlined"
              density="compact"
              required
              single-line
              :error-messages="v$.email.$errors.map((e) => e.$message)"
              @input="v$.email.$touch"
              @blur="v$.email.$touch"
              class="my-3"
            ></v-text-field>

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
              <v-btn class="pa-0" color="primary" variant="text">パスワードを忘れた場合</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary">
                <v-icon left>mdi-login</v-icon>
                サインイン
              </v-btn>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.grid-box {
  height: 100vh;
}
</style>

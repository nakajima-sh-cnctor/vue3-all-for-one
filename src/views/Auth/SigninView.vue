<script setup></script>
<template>
  <v-container fluid fill-height>
    <v-row class="grid-box" align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <div class="text-center">
          <img height="70" contain src="@/assets/alt_logo.png" transition="fab-transition" />
        </div>
        <v-card class="mx-auto my-3" style="max-width: 500px">
          <v-card-title>サインイン</v-card-title>
          <v-card-item>
            <v-text-field
              placeholder="メールアドレス"
              prepend-inner-icon="mdi-account-circle-outline"
              variant="outlined"
              density="compact"
              required
              single-line
            ></v-text-field>

            <v-text-field
              placeholder="パスワード"
              prepend-inner-icon="mdi-shield-key-outline"
              variant="outlined"
              density="compact"
              type="password"
              required
              single-line
            ></v-text-field>
          </v-card-item>
          <v-card-item>
            <div class="d-flex">
              <v-btn class="pa-0" color="primary" variant="text">パスワードを忘れた場合</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" border>
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

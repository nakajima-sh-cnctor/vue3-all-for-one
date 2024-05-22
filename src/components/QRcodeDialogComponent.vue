<script setup>
import { reactive } from 'vue'
import VueQrcode from '@chenfengyuan/vue-qrcode'

defineProps({
  generateText: {
    type: String
  }
})

const option = reactive({
  width: 200,
  height: 200,
  color: {
    dark: '#009688',
    light: '#ffffff'
  }
})
</script>
<template>
  <v-dialog max-width="400">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn color="primary" class="my-3" variant="flat" v-bind="activatorProps">
        <v-icon>mdi-qrcode</v-icon>
        QRコードを表示
      </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="LINE公式アカウント">
        <v-card-item class="text-center">
          <vue-qrcode
            v-if="generateText"
            :value="generateText"
            :options="option"
            tag="img"
          ></vue-qrcode>
        </v-card-item>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="閉じる" @click="isActive.value = false" color="primary"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

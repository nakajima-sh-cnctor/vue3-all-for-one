import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useRichMessage = defineStore('richMessageStore', () => {
  /**
   * State
   * リッチメッセージ情報
   * @type{object}
   */
  const headers = reactive([
    { key: 'image', title: '画像' },
    {
      align: 'start',
      key: 'name',
      title: 'タイトル'
    },
    { key: 'action', title: 'アクション' },
    { key: 'create', title: '作成日時' },
    { key: 'operation', title: '操作' }
  ])

  const desserts = reactive([])

  const image = ref('https://cdn.vuetifyjs.com/images/parallax/material.jpg')

  const typelist = [
    {
      title: 'リンク',
      value: 0
    },
    {
      title: 'クーポン',
      value: 1
    },
    {
      title: 'テキスト',
      value: 2
    }
  ]

  const type = ref(0)

  /**
   * リッチメッセージ情報取得処理
   * @returns {Promise<void>}
   */

  /**
   * リッチメッセージ情報更新処理
   * @param {string} richMessage
   * @returns {Promise<void>}
   */

  /**
   * 画像情報取得処理
   * @returns {Promise<void>}
   */
  const onFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        image.value = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  return {
    headers,
    desserts,
    image,
    typelist,
    type,
    onFileChange
  }
})

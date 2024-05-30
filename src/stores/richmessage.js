import { reactive } from 'vue'
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

  /**
   * リッチメッセージ情報取得処理
   * @returns {Promise<void>}
   */

  /**
   * リッチメッセージ情報更新処理
   * @param {string} richMessage
   * @returns {Promise<void>}
   */

  return {
    headers,
    desserts
  }
})

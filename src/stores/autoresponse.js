import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAutoResponse = defineStore('autoResponseStore', () => {
  /**
   * State
   * 一覧のヘッダー情報
   * @type{object}
   */
  const headers = reactive([
    {
      align: 'start',
      key: 'name',
      sortable: false,
      title: '自動応答名'
    },
    { key: 'keyword', title: 'キーワード' },
    { key: 'action', title: 'アクション' },
    { key: 'status', title: 'ステータス' },
    { key: 'create', title: '作成日時' },
    { key: 'operation', title: '操作' }
  ])

  /**
   * State
   * データ
   * @type{object}
   */
  let desserts = reactive([])

  /**
   * 自動応答設定情報取得処理
   * @returns {Promise<void>}
   */

  /**
   * 自動応答設定情報更新処理
   * @param {string} autoResponse
   * @returns {Promise<void>}
   */

  return {
    headers,
    desserts
  }
})

import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useService = defineStore('serviceStore', () => {
  /**
   * State
   * サービス情報
   * @type{object}
   */
  const service = ref('')

  let serviceList = reactive([])

  /**
   * LINEサービス情報取得処理
   * @returns {Promise<void>}
   */
  const getLineService = () => {
    serviceList.splice(0)
    serviceList.push(
      {
        value: 'line-config',
        title: 'LINE設定',
        icon: 'mdi-cog-outline',
        to: '/admin/line/setting'
      },
      {
        value: 'auto-response',
        title: 'メッセージ応答',
        icon: 'mdi-message-reply',
        to: '/admin/line/auto-response'
      }
    )
  }

  /**
   * サービス情報更新処理
   * @param {string} service
   * @returns {Promise<void>}
   */

  return {
    service,
    serviceList,
    getLineService
  }
})

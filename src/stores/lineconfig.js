import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useLineConfig = defineStore('lineConfigStore', () => {
  /**
   * State
   * ライン設定情報
   * @type{object}
   */
  const config = reactive({
    webhook_url: '',
    access_token: '',
    channel_id: '',
    channel_secret: '',
    endpoint: '',
    liff_id: '',
    line_url: 'https://line.me/R/ti/p/@xxxxxxx'
  })

  /**
   * ライン設定情報取得処理
   * @returns {Promise<void>}
   */

  /**
   * ライン設定情報更新処理
   * @param {string} config
   * @returns {Promise<void>}
   */

  return {
    config
  }
})

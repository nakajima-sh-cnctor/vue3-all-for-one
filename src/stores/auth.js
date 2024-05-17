import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  /**
   * State
   * 認証情報
   * @type{object}
   */
  const jwt = ref('')
  let user = {}

  /**
   * ログイン処理
   * @param {string} email
   * @param {string} password
   * @param {boolean} rore
   * @returns {Promise<void>}
   */

  /**
   * 認証コード送信処理
   * @param {string} email
   * @returns {Promise<void>}
   */

  /**
   * パスワード更新処理
   * @param {string} password
   * @returns {Promise<void>}
   */

  return {
    jwt,
    user
  }
})

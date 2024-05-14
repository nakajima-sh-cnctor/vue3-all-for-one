import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const jwt = ref('')
  let user = {}

  /**
   * 認証情報
   * @type{object}
   */

  /**
   * ログイン処理
   * @param {string} email
   * @param {string} password
   * @param {boolean} rore
   * @returns {Promise<void>}
   */

  /**
   * パスワードリセット
   * @param {string} email
   * @returns {Promise<void>}
   */

  return {
    jwt,
    user
  }
})

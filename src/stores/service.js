import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useService = defineStore('serviceStore', () => {
  /**
   * State
   * サービス情報
   * @type{object}
   */
  const service = ref('')

  let serviceList = reactive([
    { value: 'home', title: 'Home', icon: 'mdi-home-city' },
    { value: 'account', title: 'My Account', icon: 'mdi-account' },
    { value: 'users', title: 'Users', icon: 'mdi-account-group-outline' }
  ])

  /**
   * サービス情報取得処理
   * @returns {Promise<void>}
   */

  /**
   * サービス情報更新処理
   * @param {string} service
   * @returns {Promise<void>}
   */

  return {
    service,
    serviceList
  }
})

import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCampaing = defineStore('campaingStore', () => {
  /**
   * State
   * サービス情報
   * @type{object}
   */
  const headers = reactive([
    {
      align: 'start',
      key: 'name',
      sortable: false,
      title: 'キャンペーン名'
    },
    { key: 'count', title: 'メッセージ数' },
    { key: 'operation', title: '操作' }
  ])
  const desserts = reactive([])
  const page = ref(1)
  const detail = reactive({
    id: '',
    name: ''
  })

  return {
    headers,
    desserts,
    detail,
    page
  }
})

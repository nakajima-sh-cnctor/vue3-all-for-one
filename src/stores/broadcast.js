import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBroadcast = defineStore('broadcastStore', () => {
  /**
   * State
   * 一覧のヘッダー情報(headers)
   * @type{object}
   *
   */
  const headers = reactive([
    {
      align: 'start',
      key: 'name',
      sortable: false,
      title: '配信名'
    },
    { key: 'status', title: 'ターゲット' },
    { key: 'status', title: '高度な設定' },
    { key: 'delivery', title: '配信日時' },
    { key: 'update', title: '更新日時' }
  ])

  const tab = ref(null)
  const page = ref(1)

  /**
   * computed
   */
  const desserts = computed(() => {
    // TODO: 本来はAPIにtabの情報を渡してデータを取得する
    let data = []
    page.value = 1
    if (tab.value === 'reservation') {
      data = []
    } else if (tab.value === 'draft') {
      data = []
    }

    return data
  })

  return {
    headers,
    tab,
    page,
    desserts
  }
})

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

  const detail = reactive([
    {
      name: 'ステータス',
      value: '配信済み'
    },
    {
      name: '配信日時',
      value: '2021/10/01 12:00'
    },
    {
      name: 'LINE VOOMに投稿',
      value: 'オン'
    },
    {
      name: '配信メッセージ数',
      value: 'オフ'
    },
    {
      name: 'A/Bテスト',
      value: 'オフ'
    },
    {
      name: 'キャンペーン',
      value: 'オフ'
    },
    {
      name: 'ターゲット',
      value: 'すべてのお友だち'
    },
    {
      name: '配信人数',
      value: '0'
    },
    {
      name: '更新日時',
      value: '2024/05/24 18:09'
    },
    {
      name: '最終更新者',
      value: 'NakajimaShunsuke'
    },
    {
      name: '配信ID',
      value: '501093204'
    }
  ])

  const reqdata = reactive({
    destination: '',
    target_name: '',
    delivery_type: 0,
    delivery_date: '',
    delivery_time: ''
  })

  const advanced = reactive({
    voom: {
      status: false,
      label: 'LINE VOOMに投稿'
    },
    upper_limit: {
      status: false,
      label: '配信メッセージ数の上限を指定',
      value: null
    },
    ac_test: {
      status: false,
      label: 'A/Bテストを作成',
      value: 0
    },
    campaign: {
      status: false,
      label: 'キャンペーンを設定',
      value: 0
    }
  })

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
    detail,
    advanced,
    reqdata,
    desserts
  }
})

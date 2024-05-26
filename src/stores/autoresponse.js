import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAutoResponse = defineStore('autoResponseStore', () => {
  /**
   * State
   * 一覧のヘッダー情報(headers)
   * @type{object}
   *
   * データ(desserts)
   * @type{object}
   *
   * ディティール(detail)
   * ステータス(status)
   * @type{flag}
   *
   * 応答ステータス(restype)
   * @type{一律応答, キーワード応答}
   *
   * キーワード(keyword)
   * @type{object}
   *
   * オプション設定(option)
   * @type{flag}
   *
   * スケジュールタイプ(sukejurutype)
   * @type{string}
   *
   * スケジュール(sukejuru)
   * @type{object}
   *
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

  let desserts = reactive([])

  const detail = reactive({
    restype: 0,
    status: 0,
    keyword: '',
    option: false,
    sukejurutype: 'date',
    sukejuru: {
      date: {
        from: '',
        to: ''
      },
      time: {
        from: '',
        to: ''
      }
    }
  })

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
    desserts,
    detail
  }
})

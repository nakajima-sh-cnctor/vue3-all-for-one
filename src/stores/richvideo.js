import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useRichVideo = defineStore('richVideoStore', () => {
  /**
   * State
   * リッチビデオ情報
   * @type{object}
   */
  const headers = reactive([
    { key: 'thumbnail', title: 'サムネイル' },
    {
      align: 'start',
      key: 'name',
      title: 'タイトル'
    },
    { key: 'action', title: 'アクションボタン' },
    { key: 'create', title: '作成日時' },
    { key: 'operation', title: '操作' }
  ])

  const desserts = reactive([])

  const video = ref(null)

  const fileInput = ref(null)
  const thumbnailUrl = ref('https://cdn.vuetifyjs.com/images/parallax/material.jpg')

  const fileName = ref('')
  const videoDuration = ref(0)

  const actionflg = ref(0)
  const actionbtn = ref('')
  const actionlist = [
    '詳細はこちら',
    'インストールする',
    '購入する',
    '予約する',
    '応募する',
    '申し込む',
    '参加する',
    '投票する',
    'お店を探す',
    'お問い合わせはこちら',
    '資料を請求する',
    'ほかの動画をみる'
  ]

  /**
   * リッチビデオ情報取得処理
   * @returns {Promise<void>}
   */

  /**
   * リッチビデオ情報更新処理
   * @param {string} richVideo
   * @returns {Promise<void>}
   */

  /**
   * 画像情報取得処理
   * @returns {Promise<void>}
   */
  const onFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      fileName.value = file.name

      const videoElement = video.value
      const url = URL.createObjectURL(file)

      videoElement.src = url
      videoElement.load()

      videoElement.addEventListener('loadeddata', () => {
        videoElement.currentTime = 2 // 2秒目のフレームをキャプチャ
        videoDuration.value = videoElement.duration // 動画の再生時間を取得
      })

      videoElement.addEventListener('seeked', () => {
        const canvas = document.createElement('canvas')
        canvas.width = videoElement.videoWidth
        canvas.height = videoElement.videoHeight
        const ctx = canvas.getContext('2d')
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
        thumbnailUrl.value = canvas.toDataURL('image/png')
        URL.revokeObjectURL(url) // メモリリークを防ぐためにオブジェクトURLを解放
      })
    }
  }

  const formatDuration = () => {
    const minutes = Math.floor(videoDuration.value / 60)
    const secs = Math.floor(videoDuration.value % 60)
    console.log(`${minutes}:${secs < 10 ? '0' : ''}${secs}`)
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
  }

  return {
    headers,
    desserts,
    video,
    fileInput,
    thumbnailUrl,
    fileName,
    videoDuration,
    actionflg,
    actionlist,
    actionbtn,
    onFileChange,
    formatDuration
  }
})

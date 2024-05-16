import { email, required, minLength, maxLength, helpers } from '@vuelidate/validators'

// バリデーションメッセージ一覧
// 必須
const requiredMessage = (value) => `${value}は必須入力です。`
// メールアドレス
const emailMessage = () => `このメールアドレスは有効なメールアドレスではありません。`
// 最低文字数
const minLengthMessage = (value, length) => `${value}は${length}文字以上必要です`
// 最大文字数
const maxLengthMessage = (value, length) => `${value}は${length}文字以内で入力が必要です`
// 有効パスワード
const passwordMessage = () =>
  `パスワードは半角英数字で、大文字、小文字、数字を全て含む必要があります。 `

// バリデーション一覧

// メールアドレス
export const validEmail = () => ({
  required: helpers.withMessage(requiredMessage('メールアドレス'), required),
  email: helpers.withMessage(emailMessage(), email)
})

// password
export const validPassword = () => ({
  required: helpers.withMessage(requiredMessage('パスワード'), required),
  minLengthValue: helpers.withMessage(minLengthMessage('パスワード', 8), minLength(8)),
  maxLengthValue: helpers.withMessage(maxLengthMessage('パスワード', 20), maxLength(20)),
  password: helpers.withMessage(
    passwordMessage(),
    helpers.regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~@#$%^&*+=`|{}:;!.?"()\[\]-])[A-Za-z\d~@#$%^&*+=`|{}:;!.?"()\[\]-]*$/
    )
  )
})

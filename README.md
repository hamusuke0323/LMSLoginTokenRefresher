# LMSLoginTokenRefresher

この拡張機能は、ある大学のLMSにおいてログイントークンの有効期限が切れることによる「不正なログインです。」というエラーを防ぎます。

Google Chrome系の拡張機能です。

elms.u-aizu.ac.jpでしか動きません。

## コードの説明 (content.js)
単純にログインボタンが押されたらログインページをGETしてそこから最新のログイントークンをとってきてformのinputをそれに置き換えるだけです。


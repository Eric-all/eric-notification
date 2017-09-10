import Notification from './components/notice'

export default Notification

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('notification', Notification)
}

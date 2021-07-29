import DefinedButton from '../components/de/DefinedButton.vue'
import DefinedLink from '../components/de/DefinedLink.vue'
import DefinedText from '../components/de/DefinedText.vue'

const components = [
  DefinedButton,
  DefinedLink,
  DefinedText,
]

export const useDefinedElements = (app) => {
  // 全局配置
  // app.config.globalProperties.$DE_CONFIG = option

  // 组件注册
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
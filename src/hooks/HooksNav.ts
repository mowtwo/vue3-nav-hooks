import { inject } from "vue";

interface NavConfig {
  hide: () => void
  show: () => void
  toggle: () => void
}

export default function useNavHooks() {
  const {
    hide,
    show,
    toggle,
  } = inject<NavConfig>('$$navConfig')!
  return {
    hide,
    show,
    toggle,
  }
}
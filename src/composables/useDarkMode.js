import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'theme', // persistent
})

const toggleDark = useToggle(isDark)

export function useDarkMode() {
  return { isDark, toggleDark }
}

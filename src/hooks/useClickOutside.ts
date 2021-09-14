import { onMounted, onUnmounted, Ref, ref } from 'vue'

export default function useMousePosition(
  node: Ref<null | HTMLElement>,
  callback: () => void,
) {
  const nodeRef = ref(node)

  const clickHandler = (e: MouseEvent) => {
    if (nodeRef.value && !nodeRef.value.contains(e.target as HTMLElement))
      callback()
  }

  onMounted(() => {
    document.addEventListener('click', clickHandler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', clickHandler)
  })
}

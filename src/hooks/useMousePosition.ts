import {ref, onMounted, onUnmounted,  reactive, toRefs} from 'vue'

export default function useMousePosition() {
    let position = reactive({x: 0, y: 0})

    const update = (e: MouseEvent) => {
        position.x = e.clientX
        position.y = e.clientY
    }
    onMounted(() => {
        window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    })
    return {...toRefs(position)}
}
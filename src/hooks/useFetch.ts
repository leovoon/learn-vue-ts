import { reactive, toRefs, onMounted } from 'vue'

export default function useFetch<T>(url: string) {
  const state = reactive({
    loading: true,
    loaded: false,
    result: <T | null> null,
    error: null,
  })

  //set a delay timeout function
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const fetchData = async () => {
    state.result = null
    state.loading = true
    state.loaded = false
    state.error = null

    try {
      await delay(1000)
      const response = await fetch(url)      
      const data = await response.json()
      state.result = data
      state.loaded = true
      state.error = data.status === 'error' ? data.message : null
    } catch (error: any) {
      state.error = error
      throw state.error
    } finally {
      state.loading = false
    }
  }

  onMounted(() => {
    fetchData()
  })
  
  
  return { ...toRefs(state), refetch: fetchData}
}

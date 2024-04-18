import AppStore from './module/AppStore'

function useStore () {
  return {
    appStore: AppStore()
  }
}

export default useStore

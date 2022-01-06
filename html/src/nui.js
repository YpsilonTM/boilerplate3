import axios from "axios"

const NUI = {
  OnNuiEvent(type, func) {
    window.addEventListener('message', (e) => {
      if (e.data.type == type) {
        func(e.data)
      }
    })
  },

  OnKeyEvent(keys, func) {
    window.addEventListener('keydown', (e) => {
      keys.map((key) => {
        if (e.key == key) {
          func()
        }
      })
    })
  },

  RemoveNuiListener() {
    window.removeEventListener('message')
    window.removeEventListener('keydown')
  },

  async Post(resName, type, payload = {}) {
    return (await axios.post(`https://${resName}/${type}`, payload)).data
  }
}

export default NUI
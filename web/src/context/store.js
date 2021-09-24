import { createStore } from "vuex"

import mutations from './mutations'
import actions from './actions'

const store = createStore({
   state: {
      videoLesson: null,
      api: 'http://localhost:3002'
   },
   mutations,
   actions
})

export default store
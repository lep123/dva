import dva from 'dva'
import createHistory from 'history/createBrowserHistory';
import '@/styles/index.less'
import '@/styles/rem.js'
import '@/styles/iconfont.css'

// 1. Initialize
const app = dva({
  history: createHistory()
})
window.app = app

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('@/router').default)

// 5. Start
app.start('#root')

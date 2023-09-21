import Vue from 'vue'
import App from './App.vue'
// 引入datav
import dataV from '@jiaminghi/data-view'
Vue.config.productionTip = false
Vue.use(dataV)
// 引入echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入全屏！！！！！！！
import './assets/common.less'
Vue.use(ElementUI);


new Vue({
  render: h => h(App),
}).$mount('#app')

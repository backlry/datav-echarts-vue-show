<template>
    <div id="data-view">
        <dv-full-screen-container id="dv-full-screen-container">
            <topheader/>
            <div class=block-top-content>
                <firstPie/>
                <china/>
                <barcolumn/>
               
            </div>
            <div class=block-middle-content>
                <capsuleChart/>
                <firstbar/>
                <list/>
            </div>
            


        </dv-full-screen-container>
        
    </div>
</template>

<script>
import topheader from './topHeader.vue'
import firstPie from './pie1.vue'
import firstbar from './bar.vue'
import barcolumn from './bar_column.vue'
import capsuleChart from './capsule-chart.vue'
import china from './china.vue'
import list from './list.vue'

// import header from "./pie1.vue"
export default {
    name:'DataView',
    data() {
        return {}
    },
    components:{
        firstPie,
        firstbar,
        barcolumn,
        capsuleChart,
        china,
        list,
        topheader

        
    }
}
</script>
<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .block-top-content,.block-middle-content{
    display: flex;
    height: 45%;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }
}
</style>
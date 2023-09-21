<template>
    <div class='listcontent'>
        <dv-border-box-10 class='listborder'>
                 <div class='listheader'>组织列表</div>
                <dv-scroll-board :config="config" class='listmain'/> 
           
        </dv-border-box-10>

    </div>
</template>

<script>
export default {
    name:'listContent',
     data () {
    return {
      config: {
        index: true,
        columnWidth: [50],
        align: ['center'],
        headerBGC:'#669999',
        oddRowBGC:'transparent',
        evenRowBGC:'#0A2732',
        waitTime:1500,
        indexHeader:'I'
        
      }
    }
  },
  methods: {
    init_list(){
        this.config.header= ["组织名称", "组织编号", "组织联系方式"];
        this.config.data=[
          ["张三慈善会", "2233111", "13797646522"],
          ["李四互助会", "2233112", "13766258223"],
          ["王五慈善会", "2233113", "13781519821"],
          ["飞蝗慈善会", "2255156", "18915123112"],
          ["飞度", "2255623", "18911231212"],
          ["雷诺机构", "2233111", "18632456985"],
          ["并艾车友会", "1155631", "18123121232"],
          ["成群网络会", "1100352", "18121212301"],
          ["毒友交流会", "1252120", "16896656562"],
          ["Scaner交流会", "1212512", "15366568456"],
        ];
        this.config = { ...this.config }
    },
  },
  mounted() {
    this.init_list()
  },
}
</script>

<style lang="less">
    .listcontent{
        width: 33.3%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .listborder{
            height: 120%;
        
        

        .listheader{
            height:40px ;
            font-size: 16px;
            display: flex;
            justify-content: center;//主轴方向剧中
            align-items: center;//次轴方向居中
            
        }
        .listmain{
            height: 85%;
        }

    }}
</style>
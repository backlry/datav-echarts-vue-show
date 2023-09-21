// 胶囊柱状图
<template>
    <div class='chart_1'>
        <dv-border-box-12 class='box_12'>
            <dv-capsule-chart :config="config" style="width:90%;height:90%;padding:50px" />
        </dv-border-box-12>
        
    </div>
</template>
<script>

export default {
    
    data() {
        return {
              config:
            {
                
                
                

            },
            count_i:0

        }
    },
    methods: {
        init_data(){
            var total_data= [ {
                                        name: '南阳',
                                        value: 167
                                        },
                                        {
                                        name: '周口',
                                        value: 123
                                        },
                                        {
                                        name: '漯河',
                                        value: 98
                                        },
                                        {
                                        name: '郑州',
                                        value: 75
                                        },
                                        {
                                        name: '西峡',
                                        value: 66
                                        },
                                        {
                                        name: '洛阳',
                                        value: 78
                                        },];
            var total_color= ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff','#00FFFF']

            return [total_data,total_color]
           
        },
        update(data)
            {
                if(this.count_i>=data.length)
                    {
                        this.count_i=0
                    }
                        let data_total=data.concat(data.slice(0,3))
                        let data_open = data_total.slice(this.count_i,this.count_i+4);
                        
                    return data_open
            }

             },

            
    mounted() {
        let [total_data,total_color]=this.init_data();
        setInterval(()=>{
            
            // console.log(total_color.length)
            // console.log(total_data.length)
            let really_data=this.update(total_data);
            let really_color=this.update(total_color);
            this.count_i++;
            this.config.data=really_data
            this.config.colors=really_color
            // this.config.data=really_data
            this.config.showValue=true
            this.config = { ...this.config }//由于vue中对于属性的属性需要深度监视，所以必须完成赋值操作后使用ES6拓展运算符生成新的props对象
        },2000)

        
    },

  
    
}
</script>
<style lang="less">
    .chart_1{
        width: 33.3%;//组件设置为在index中占33.3%，即1/3
        height: 100%;//组件设置在index中的父容器div中占比100%
        display: flex;
        justify-content: space-between;
        flex-shrink: 0;
        border: 0px;
        margin: 0px;

        .box_12{
            width: 100%;//在chart_1中占比100%宽度
        }
    }
</style>
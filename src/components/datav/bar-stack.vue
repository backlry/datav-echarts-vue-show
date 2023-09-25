<template>
    <div class="stack-top">
        <div class='bar-main' style="width:100%;height:100%"></div>
    </div>
</template>


<script>
import * as echarts from 'echarts'
export default {
        data() {
            return {
                count_i:0,
                option:{}
            }
        },
        methods: {
            init_data(){
                let total_x=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                let total_y=[[320, 302, 301, 334, 390, 330, 320],[120, 132, 101, 134, 90, 230, 210],
                [220, 182, 191, 234, 290, 330, 310],[150, 212, 201, 154, 190, 330, 410],
                [820, 832, 901, 934, 1290, 1330, 1320]];
                return[total_x,total_y]
            },
            init_option(){
                let option = {

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                        // Use axis to trigger tooltip
                        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                        }
                    },
                    legend: {
                        textStyle:{
                            color:'#fff',
                            fontSize:16
                        },
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    series: [
                        {
                        name: 'Direct',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 302, 301, 334, 390, 330, 320],
                        // animation: false
                        //  animationDuration:0,
                        //  animationEasingUpdate: 'quinticInOut',

                        },
                        {
                        name: 'Mail Ad',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210],
                        // animation: false
                        //  animationDuration:0,

                        //  animationEasingUpdate: 'quinticInOut',

                        },
                        {
                        name: 'Affiliate Ad',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310],
                        // animation: false
                        //  animationDuration:0,

                        //  animationEasingUpdate: 'quinticInOut',

                        },
                        {
                        name: 'Video Ad',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 212, 201, 154, 190, 330, 410],
                        // animation: false
                        //  animationDuration:0,

                        //  animationEasingUpdate: 'quinticInOut',

                        },
                        {
                        name: 'Search Engine',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [820, 832, 901, 934, 1290, 1330, 1320],
                        // animation: false
                        //  animationDuration:1000,

                        //  animationEasingUpdate: 'quinticInOut',

                        }
                    ]
                    };
                    return option
                                },
             update(data)
                    {
                        if(this.count_i>=data.length)
                            {
                                this.count_i=0
                            }
                                let data_total=data.concat(data.slice(0,2))
                                let data_open = data_total.slice(this.count_i,this.count_i+3);
                                
                            return data_open
                    }        

                },
        mounted() {
        let  myChart = echarts.init(document.querySelector('.bar-main'));
        this.option=this.init_option();
        
        let [total_x,total_y]=this.init_data() 
        setInterval(() => {
            let really_datax=this.update(total_x).reverse();
            let really_datay=[];
            total_y.map((item) => {
                really_datay.push(this.update(item).reverse())
       
            });
            this.count_i++
            console.log(really_datax,really_datay)
            this.option.series.map((item)=>{
                item.data=really_datay[this.option.series.indexOf(item)]
            })
            // this.config = { ...this.config }
            this.option={...this.option}
            // console(option.series)
            myChart.setOption(this.option)
            myChart.setOption(
            {
            
          
            
            yAxis: {data: really_datax},
            
            });
            
        
        }, 5000);   
        
        

        
        },

   



}
</script>


<style scoped>
.stack-top{
    width: 33.30%;
    height: 100%;
}
</style>
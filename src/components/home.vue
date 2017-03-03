<template>
    <div>
        <el-row>
            <el-col :span="8" v-for="(o, index) in 2" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="src" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<style>
    .time {
        font-size: 13px;
        color: #999;
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }
    
    .button {
        padding: 0;
        float: right;
    }
    
    .image {
        width: 80%;
        display: block;
    }
    
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
</style>

<script>
    export default {
        data() {
            return {
                currentDate: new Date(),
                src: __uri('/static/img/1.png')
            };
        },
        created() {
            console.log('home ajax');
        }
    }

</script>
<template>
    <div>
        <el-row type="flex" class="row-bg">
            <el-col :span="6">
                <div>
                    <router-link to="/">logo</router-link>
                </div>
                <el-row class="tac">
                    <el-col :span="24">
                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title"><i class="el-icon-message"></i>多页面测试</template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1">
                                        <router-link to="/demo">demo</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="1-2">
                                        <router-link to="/about">about</router-link>
                                    </el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                                <el-menu-item-group>
                                    <el-menu-item index="2-1">选项1</el-menu-item>
                                    <el-menu-item index="2-2">选项2</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="18">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            }
        }
    }
</script>
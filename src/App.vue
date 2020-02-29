<template>
  <div id="app">
    <app-header v-if="header_show"></app-header>
    <router-view v-on:header="header" v-on:footer="footer"></router-view>
    <app-footer v-if="footer_show"></app-footer>
  </div>
</template>

<script>
    import Header from './components/Header'
    import Footer from './components/Footer'
    export default {
        name: 'App',
        data(){
            return {
                header_show:true,
                footer_show:true,
            }
        },
        components: {
            'app-header':Header,
            'app-footer':Footer,
        },
        methods:{
            //是否显示头部
            header:function (bool) {
                this.header_show = bool;
            },
            //是否显示底部
            footer:function (bool) {
                this.footer_show = bool;
            }
        }
    }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }

  #app {
    position: absolute;
    top: 5%;
    bottom: 0;
    width: 100%;
  }

  .el-submenu [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
  }

  .el-menu-item [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
  }

  .top-menu li{
    float:left;
    width:100px;
  }

  .banner{
    width: 100%;
    height: 76px;
  }
</style>

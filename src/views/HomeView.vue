<template>
  <div>
    <el-container>

      <el-aside style="background-color: rgb(50, 64, 87)" class="aside">
        <el-menu background-color="rgb(50,64,87)" text-color="#ffffff" :router="true">
          <!-- 一级菜单 -->
          <el-menu-item class="item" index="/">
            <i class="el-icon-menu"></i>
            <span slot="title"><router-link to="/shouye2">首页</router-link></span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>数据管理</span>
            </template>
             <el-menu-item-group>
              <el-menu-item ><router-link to="/shou">文章列表</router-link> </el-menu-item>
              <el-menu-item > 多层路由示例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
        
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  mounted() {
    console.log(this.$route.meta);
  },
};
</script>

<style scoped>
a{
  color:#fff;
}
.aside {
  height: 100vh;
      float: left;
}
.aside .item {
  background-color: rgb(50, 64, 87);
  color: #fff;
}
/* .aside .item:hover{
  background-color: #f5f5f5;
  color: #000;
} */
.aside .item span {
  color: #fff;
}
.img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.headr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0079d9;
  font-size:20px;
}
.header div {
}
.el-container {
    /* display: flex; */
    flex-direction: row;
    /* flex: 1; */
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
}
</style>

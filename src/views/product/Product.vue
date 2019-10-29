<template>
  <div id='product'>
    <h2>产品管理</h2>
    <!-- 按钮 -->
    <div class="btns">
      <el-button size="small" type="primary" plain>添加</el-button>
      <el-button size="small" type="danger" plain>批量删除</el-button>
    </div>
    <!-- / 按钮 -->
    <!-- 搜索 -->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input size="small" v-model="input" clearable placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="small" v-model="input" clearable placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="small" v-model="input" clearable placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="small" v-model="input" clearable placeholder="请输入内容"></el-input>
      </el-form-item>
      <!-- <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button size="small" type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- / 搜索 -->
    <!-- 表格 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="产品名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="产品描述"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="产品价格">
        </el-table-column>
        <el-table-column
          prop="address"
          label="产品状态">
        </el-table-column>
        <el-table-column
          prop="address"
          label="栏目编号">
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <a href="" @click="deleteProductHandler">删除</a>
            <a href="" @click="editProductHandler">修改</a>
          </template>
        </el-table-column>
      </el-table>
    <!-- / 表格 -->
  </div>
</template>

<script>
import { actions,state } from 'vuex'

export default {
  data() {
    return {

    }
  },
  methods: {
    deleteProductHandler(){

    },
    editProductHandler(){
      
    }
  }
 
}
</script>

<style>
  .btns{
    margin-bottom: 1em;
  }
</style>
webpackJsonp([38],{KCwH:function(e,t){},uMgq:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={components:{pagination:a("MCsY").a},data:function(){return{module:"installationInformation",unitId:sessionStorage.getItem("unitId"),userType:sessionStorage.getItem("userTypes"),title:"",unitName:"",currentPage:1,rows:10,total:1,ruleForm:{title:"",installerName:"",installerPhone:"",debuggerName:"",debuggerPhone:"",unitName:"",unitId:""},rules:{title:[{required:!0,message:"请输入安装标题",trigger:"blur"}],installerName:[{required:!0,message:"请输入安装人姓名",trigger:"blur"}],installerPhone:[{required:!0,message:"请输入安装人电话",trigger:"blur"}],debuggerName:[{required:!0,message:"请输入调试人员",trigger:"blur"}],debuggerPhone:[{required:!0,message:"请输入调试人员电话",trigger:"blur"}],unitName:[{required:!0,message:"请输入安装公司",trigger:"blur"}]},tableData:[{}],dialogVisible:!1,filterText:"",smsPhoneTypeData:[],planId:"",status:"1"}},methods:{searchsubmit:function(){var e=this;this.currentPage=1,this.$refs.paginationChild.changePageNum(this.currentPage),this.axios({url:"/api/admin/device/install.search",method:"post",data:{unitId:this.unitId,pageSize:this.rows,pageNum:this.currentPage,title:this.title,unitName:this.unitName}}).then(function(t){0==t.data.code||e.$alert(t.data.msg,"提示",{confirmButtonText:"OK"})})},searchreset:function(){this.title="",this.unitName=""},handleNodeClick:function(e){this.unitId=e.id,this.rows=10,this.currentPage=1,this.getData()},opendialog:function(){this.dialogVisible=!0},closedialog:function(){this.dialogVisible=!1},renderContent:function(e,t){var a=t.node;return e("span",[e("i",{class:t.data.icon})," ",e("span",[a.label])])},pageChange:function(e){this.currentPage=e.page_index,this.rows=e.page_limit,this.getData()},getData:function(){this.axios({url:"/api/admin/fire/inspection/config/single",method:"post",data:{id:this.unitId}}).then(function(e){e.data.code})},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},releasePlan:function(e){this.$router.push({path:"/technicalService/maintenanceItems",query:{id:1}})}},mounted:function(){this.planId=this.$route.query.id,this.status=this.$route.query.status,this.getData()},watch:{filterText:function(e){this.$refs.tree.filter(e)}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"maintenancePlan allcontent"},[a("div",{staticClass:"top"},[a("div",[e._v("\n            标题:\n            "),a("el-input",{model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v("  \n            "),a("el-button",{attrs:{type:"primary"},on:{click:e.searchsubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:e.searchreset}},[e._v("重置")]),e._v(" "),2==e.status?[a("el-button",{attrs:{type:"success"},on:{click:e.opendialog}},[e._v("新增")])]:e._e()],2)]),e._v(" "),a("div",{staticStyle:{"margin-top":"10px",height:"88%",position:"relative"}},[a("el-table",{staticStyle:{width:"150"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"title",label:"计划名称",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"unitName",label:"执行人",width:"190"}}),e._v(" "),a("el-table-column",{attrs:{prop:"debuggerName",label:"下发状态",width:"190"}}),e._v(" "),a("el-table-column",{attrs:{prop:"debuggerPhone",label:"已完成",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"debuggerPhone",label:"未完成",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"debuggerPhone",label:"创建时间",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.releasePlan(t.row.id)}}},[e._v("下发计划")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticStyle:{position:"absolute",bottom:"0"}},[a("pagination",{ref:"paginationChild",attrs:{total:e.total},on:{pageChange:e.pageChange}})],1),e._v(" "),a("el-dialog",{staticClass:"dialog",attrs:{title:"添加/修改计划",visible:e.dialogVisible,width:"30%","close-on-click-modal":!1,"before-close":e.closedialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"项目名称",prop:"title"}},[a("el-input",{model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"执行人",prop:"debuggerName"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.debuggerName,callback:function(t){e.$set(e.ruleForm,"debuggerName",t)},expression:"ruleForm.debuggerName"}},e._l(e.smsPhoneTypeData,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"计划性质",prop:"debuggerName"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.debuggerName,callback:function(t){e.$set(e.ruleForm,"debuggerName",t)},expression:"ruleForm.debuggerName"}},e._l(e.smsPhoneTypeData,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"计划对应日期",prop:"debuggerPhone"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.debuggerName,callback:function(t){e.$set(e.ruleForm,"debuggerName",t)},expression:"ruleForm.debuggerName"}},e._l(e.smsPhoneTypeData,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{staticClass:"formfooter"},[a("el-button",{directives:[{name:"noMoreClick",rawName:"v-noMoreClick"}],attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("ruleForm")}}},[e._v("立即提交")]),e._v(" "),a("el-button",{on:{click:e.closedialog}},[e._v("取 消")])],1)],1)],1)],1)])},staticRenderFns:[]};var r=a("VU/8")(l,i,!1,function(e){a("KCwH")},"data-v-33e62f48",null);t.default=r.exports}});
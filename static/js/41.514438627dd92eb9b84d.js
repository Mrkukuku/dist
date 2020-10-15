webpackJsonp([41],{FPHg:function(e,t){},KzAq:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("woOf"),s=a.n(i),l=a("Dd8w"),o=a.n(l),r=a("g5qz"),n=a("MCsY"),d={mixins:[r.a],components:{pagination:n.a},data:function(){return{module:"MaintenancePlan",tableData:[],userType:"",unitId:"",addFalg:!0,detailFlag:!1,detailFlag1:!1,detailTaskList:"",typeName:"联网设备",unTypeName:"未联网设备",data:[],defaultProps:{children:"children",label:"label"},currentPage:1,rows:10,total:1,ruleForm:{name:"",endTime:"",uid:"",content:"",unitId:"",suer:sessionStorage.getItem("user_id"),deviceId:"",deviceName:"",position:"",type:1,id:"",status:"",deviceStatus:"1"},rules:{name:[{required:!0,message:"请填写任务名称",trigger:"blur"}],endTime:[{required:!0,message:"请选择结束时间",trigger:"blur"}],uid:[{required:!0,message:"请选择人员",trigger:"blur"}],position:[{required:!0,message:"请填写设备地址",trigger:"blur"}],deviceName:[{required:!0,message:"请填写设备名称",trigger:"blur"}],deviceId:[{required:!0,message:"请填写设备名称",trigger:"blur"}],deviceStatus:[{required:!0,message:"请选择维修类型",trigger:"blur"}]},peopleOptions:"",deviceOptions:"",pickerOptions1:{disabledDate:function(e){return e.getTime()<Date.now()-864e5}},options:[{value:0,label:"待分配"},{value:1,label:"已分配"},{value:2,label:"待审核"},{value:3,label:"已完成"}],options1:[{value:1,label:"故障"},{value:2,label:"损坏"},{value:3,label:"已过期"}],taskName:"",taskStatus:"",deviceStatus:""}},methods:{getData:function(){var e=this;this.axios({url:"/api/admin/maintenance/page",method:"post",data:{unitId:this.unitId,status:this.taskStatus,name:this.taskName,pageNum:this.currentPage,pageSize:this.rows}}).then(function(t){e.tableData=t.data.list,e.tableData.map(function(t){t.endTime=t.endTime&&e.$moment(t.endTime).format("YYYY-MM-DD HH:mm")||"",1==t.status?t.status="已分配":0==t.status?t.status="待分配":2==t.status?t.status="待审核":3==t.status&&(t.status="已完成")}),e.total=t.data.total})},searchGetData:function(){this.currentPage=1,this.$refs.paginationChild.changePageNum(this.currentPage),this.getData()},handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$alert("添加数据失败,请填完必填字段!","提示",{confirmButtonText:"OK"}),!1;t.ruleForm.id?t.$confirm("你确定要修改任务吗").then(function(){t.ruleForm.status=1,t.ruleForm.suer=sessionStorage.getItem("user_id"),t.axios({url:"/api/admin/maintenance/update",method:"post",data:o()({},t.ruleForm)}).then(function(e){0==e.data.code?(t.getData(),t.$alert("修改成功","提示",{confirmButtonText:"OK"}),t.closedialog()):t.$alert(e.data.msg,"提示",{confirmButtonText:"OK"})})}):t.$confirm("你确定要添加任务吗").then(function(){t.axios({url:"/api/admin/maintenance/add",method:"post",data:o()({},t.ruleForm)}).then(function(e){0==e.data.code?(t.getData(),t.$alert("添加成功","提示",{confirmButtonText:"OK"}),t.closedialog()):t.$alert(e.data.msg,"提示",{confirmButtonText:"OK"})})})})},editData:function(e){var t=this;this.axios({url:"/api/admin/maintenance/single",method:"post",data:{id:e}}).then(function(e){0==e.data.code?(t.detailFlag=!0,t.detailTaskList=e.data.data,t.detailTaskList.endTime=t.detailTaskList.endTime&&t.$moment(t.detailTaskList.endTime).format("YYYY-MM-DD HH:mm")||"",t.detailTaskList.createdTime=t.detailTaskList.createdTime&&t.$moment(t.detailTaskList.createdTime).format("YYYY-MM-DD HH:mm")||"",1==t.detailTaskList.status?t.detailTaskList.status="已分配":0==t.detailTaskList.status?t.detailTaskList.status="待分配":2==t.detailTaskList.status?t.detailTaskList.status="待审核":3==t.detailTaskList.status&&(t.detailTaskList.status="已完成"),t.detailTaskList.details.length&&t.detailTaskList.details.map(function(e){e.createdTime=e.createdTime&&t.$moment(e.createdTime).format("YYYY-MM-DD HH:mm")||"",e.status?e.status="已处理":e.status="无法处理"})):t.$alert(e.data.msg,"提示",{confirmButtonText:"OK"})})},handleEdit:function(e){var t=this;this.axios({url:"/api/admin/maintenance/single",method:"post",data:{id:e}}).then(function(e){0==e.data.code?(t.dialogVisible=!0,t.ruleForm=e.data.data):t.$alert(e.data.msg,"提示",{confirmButtonText:"OK"})})},handeDelete:function(e){var t=this;this.$confirm("你确定要删除任务吗").then(function(){t.axios({url:"/api/admin/maintenance/delete",method:"post",data:{id:e}}).then(function(e){0==e.data.code?(t.getData(),t.$alert("删除成功","提示",{confirmButtonText:"OK"})):t.$alert(e.data.msg,"提示",{confirmButtonText:"OK"})})})},allocation:function(){this.detailFlag1=!0},handle:function(e){var t=this;this.$confirm("你确定要处理任务吗").then(function(){t.axios({url:"/api/admin/maintenance/update",method:"post",data:{id:e,status:3}}).then(function(e){0==e.data.code?(t.getData(),t.$alert("处理成功","提示",{confirmButtonText:"OK"}),t.closedialog()):t.$alert(e.data.msg,"提示",{confirmButtonText:"OK"})})})},getOptions:function(){var e=this;this.axios({url:"/api/admin/device/list",method:"post",data:{pageNum:1,pageSize:9999,unitId:this.unitId}}).then(function(t){e.deviceOptions=t.data.list}),this.axios({url:"/api/admin/user/list",method:"post",data:{pageNum:1,pageSize:99999,unitId:this.unitId}}).then(function(t){e.peopleOptions=t.data.list})},getDevicePosition:function(e){var t=this;this.axios({url:"/api/admin/device/task/single",method:"post",data:{id:e}}).then(function(e){t.ruleForm.deviceName=e.data.data.deviceName,t.ruleForm.position=e.data.data.addr})},addDevice:function(){this.ruleForm.id||(this.ruleForm.deviceName="",this.ruleForm.position="",this.ruleForm.deviceId=""),this.ruleForm.type=1},addCustomeDevice:function(){this.ruleForm.id||(this.ruleForm.deviceName="",this.ruleForm.position="",this.ruleForm.deviceId=""),this.ruleForm.type=2},deleteDevice:function(e){(e||this.ruleForm.devices.length>1)&&this.ruleForm.devices.splice(e,1)},closedialog:function(){this.dialogVisible=!1,this.detailFlag=!1,this.detailFlag1=!1,this.handleReset()},handleReset:function(){s()(this.$data.ruleForm,this.$options.data().ruleForm),this.ruleForm.unitId=this.unitId},reset:function(){this.taskName="",this.taskStatus="",this.deviceStatus="",this.getData()},renderContent:function(e,t){var a=t.node;return e("span",[e("i",{class:t.data.icon})," ",e("span",[a.label])])},handleNodeClick:function(e){this.unitId=e.id,this.ruleForm.unitId=e.id,0==e.type?this.addFalg=!0:(this.addFalg=!1,this.rows=10,this.currentPage=1,this.getData(),this.getOptions())},pageChange:function(e){this.currentPage=e.page_index,this.rows=e.page_limit,this.getData()}},mounted:function(){this.userType=sessionStorage.getItem("userTypes"),this.ruleForm.unitId=Number(sessionStorage.getItem("unitId")),this.unitId=Number(sessionStorage.getItem("unitId")),3==this.userType&&(this.getOptions(),this.getData())}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"allcontent",attrs:{id:"maintenance_plan"}},[a("el-row",{staticStyle:{height:"100%"}},[3!=e.userType?a("el-col",{staticClass:"tree_box",attrs:{span:4}},[a("div",[a("el-input",{staticClass:"filter_text",attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),a("el-tree",{ref:"tree",attrs:{data:e.Treedata,props:e.defaultProps,"render-content":e.renderContent,"highlight-current":"","filter-node-method":e.filterNode},on:{"node-click":e.handleNodeClick}})],1)]):e._e(),e._v(" "),a("el-col",{staticStyle:{height:"100%"},attrs:{span:20}},[a("div",{staticClass:"top"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!(e.addFalg&&3!=e.userType),expression:"!(addFalg && userType!=3)"}]},[a("span",[e._v("任务名称:")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入任务名称"},model:{value:e.taskName,callback:function(t){e.taskName=t},expression:"taskName"}}),e._v(" "),a("span",[e._v("任务状态:")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.taskStatus,callback:function(t){e.taskStatus=t},expression:"taskStatus"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("span",[e._v("设备状态:")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.deviceStatus,callback:function(t){e.deviceStatus=t},expression:"deviceStatus"}},e._l(e.options1,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.searchGetData}},[e._v(" 查询")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.reset}},[e._v(" 重置")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v(" 导出 ")])],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",disabled:e.addFalg&&3!=e.userType},on:{click:e.opendialog}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 新增维修计划 ")])],1)]),e._v(" "),a("div",{staticStyle:{"margin-top":"10px",height:"88%",position:"relative"}},[a("el-table",{directives:[{name:"show",rawName:"v-show",value:!(e.addFalg&&3!=e.userType),expression:"!(addFalg && userType!=3)"}],staticStyle:{width:"150"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"任务名称",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"uname",label:"任务人员",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"deviceName",label:"故障设备",width:"230"}}),e._v(" "),a("el-table-column",{attrs:{prop:"endTime",label:"任务结束时间",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"任务完成情况",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return["已完成"!=t.row.status?a("el-button",{staticClass:"el-icon-edit",attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.row.id)}}},[e._v(" 编辑")]):e._e(),e._v(" "),"待分配"==t.row.status||"待审核"==t.row.status?a("el-button",{staticClass:"el-icon-circle-check",attrs:{size:"mini",type:"success"},on:{click:function(a){return e.handle(t.row.id)}}},[e._v(" 完成")]):e._e(),e._v(" "),a("el-button",{staticClass:"el-icon-warning-outline",attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.editData(t.row.id)}}},[e._v(" 查看")]),e._v(" "),"已完成"==t.row.status?a("el-button",{staticClass:"el-icon-delete",attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handeDelete(t.row.id)}}},[e._v("删除")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"page",staticStyle:{position:"absolute",bottom:"0"}},[a("pagination",{ref:"paginationChild",attrs:{total:e.total},on:{pageChange:e.pageChange}})],1)],1),e._v(" "),a("el-dialog",{staticClass:"dialog",attrs:{title:"添加修改维修计划",visible:e.dialogVisible,width:"32%","close-on-click-modal":!1,"before-close":e.closedialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"维修任务名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入维修任务名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"维修人员",prop:"uid",placeholder:"请选择维修人员"}},[a("el-select",{attrs:{filterable:""},model:{value:e.ruleForm.uid,callback:function(t){e.$set(e.ruleForm,"uid",t)},expression:"ruleForm.uid"}},e._l(e.peopleOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.username,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"结束时间",prop:"endTime"}},[a("el-date-picker",{staticClass:"picker_time",attrs:{type:"datetime",placeholder:"选择日期时间","picker-options":e.pickerOptions1},model:{value:e.ruleForm.endTime,callback:function(t){e.$set(e.ruleForm,"endTime",t)},expression:"ruleForm.endTime"}})],1),e._v(" "),1==e.ruleForm.type?a("el-form-item",{attrs:{label:"联网设备名称",prop:"deviceId"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择设备"},on:{change:function(t){return e.getDevicePosition(e.ruleForm.deviceId)}},model:{value:e.ruleForm.deviceId,callback:function(t){e.$set(e.ruleForm,"deviceId",t)},expression:"ruleForm.deviceId"}},e._l(e.deviceOptions,function(e){return a("el-option",{key:e.deviceId,attrs:{label:e.deviceAlias,value:e.deviceId}})}),1),e._v(" "),2==e.ruleForm.type?a("el-button",{attrs:{type:"primary"},on:{click:e.addDevice}},[e._v("联网设备")]):e._e(),e._v(" "),1==e.ruleForm.type?a("el-button",{attrs:{type:"primary"},on:{click:e.addCustomeDevice}},[e._v("未联网设备")]):e._e()],1):e._e(),e._v(" "),2==e.ruleForm.type?a("el-form-item",{attrs:{label:"未联网设备名称",prop:"deviceName"}},[a("el-input",{staticClass:"custom",attrs:{placeholder:"请输入自定义设备"},model:{value:e.ruleForm.deviceName,callback:function(t){e.$set(e.ruleForm,"deviceName",t)},expression:"ruleForm.deviceName"}}),e._v(" "),2==e.ruleForm.type?a("el-button",{attrs:{type:"primary"},on:{click:e.addDevice}},[e._v("联网设备")]):e._e(),e._v(" "),1==e.ruleForm.type?a("el-button",{attrs:{type:"primary"},on:{click:e.addCustomeDevice}},[e._v("未联网设备")]):e._e()],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"设备位置",prop:"position"}},[a("el-input",{staticClass:"position",attrs:{placeholder:"设备位置描述",disabled:1==e.ruleForm.type},model:{value:e.ruleForm.position,callback:function(t){e.$set(e.ruleForm,"position",t)},expression:"ruleForm.position"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"维修类型",prop:"deviceStatus"}},[a("el-radio-group",{model:{value:e.ruleForm.deviceStatus,callback:function(t){e.$set(e.ruleForm,"deviceStatus",t)},expression:"ruleForm.deviceStatus"}},[a("el-radio",{attrs:{label:1}},[e._v("故障")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("损坏")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("已过期")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"维修描述"}},[a("el-input",{staticClass:"textarea",attrs:{type:"textarea",rows:2,placeholder:"请输入维修计划描述"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"text-align":"left"}},[a("el-button",{directives:[{name:"noMoreClick",rawName:"v-noMoreClick"}],attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("ruleForm")}}},[e._v("立即提交")]),e._v(" "),a("el-button",{on:{click:e.closedialog}},[e._v("取 消")])],1)],1)],1),e._v(" "),a("el-dialog",{staticClass:"dialog",attrs:{title:"查看维修任务",visible:e.detailFlag,width:"33%","close-on-click-modal":!1,"before-close":e.closedialog},on:{"update:visible":function(t){e.detailFlag=t}}},[a("el-form",{staticClass:"detail-ruleForm",attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"维修任务名称"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.detailTaskList&&e.detailTaskList.name,callback:function(t){e.$set(e.detailTaskList&&e.detailTaskList,"name",t)},expression:"detailTaskList && detailTaskList.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务发布人员"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.detailTaskList&&e.detailTaskList.issuer,callback:function(t){e.$set(e.detailTaskList&&e.detailTaskList,"issuer",t)},expression:"detailTaskList && detailTaskList.issuer"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"维修人员"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.detailTaskList&&e.detailTaskList.uname,callback:function(t){e.$set(e.detailTaskList&&e.detailTaskList,"uname",t)},expression:"detailTaskList && detailTaskList.uname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.detailTaskList&&e.detailTaskList.createdTime,callback:function(t){e.$set(e.detailTaskList&&e.detailTaskList,"createdTime",t)},expression:"detailTaskList && detailTaskList.createdTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束时间"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.detailTaskList&&e.detailTaskList.endTime,callback:function(t){e.$set(e.detailTaskList&&e.detailTaskList,"endTime",t)},expression:"detailTaskList && detailTaskList.endTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务完成情况"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.detailTaskList&&e.detailTaskList.status,callback:function(t){e.$set(e.detailTaskList&&e.detailTaskList,"status",t)},expression:"detailTaskList && detailTaskList.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.detailTaskList&&1==e.detailTaskList.type&&e.typeName||e.unTypeName}},[a("el-input",{staticClass:"more",model:{value:e.detailTaskList&&e.detailTaskList.deviceName,callback:function(t){e.$set(e.detailTaskList&&e.detailTaskList,"deviceName",t)},expression:"detailTaskList && detailTaskList.deviceName"}}),e._v(" "),a("el-input",{staticClass:"more",model:{value:e.detailTaskList&&e.detailTaskList.position,callback:function(t){e.$set(e.detailTaskList&&e.detailTaskList,"position",t)},expression:"detailTaskList && detailTaskList.position"}})],1),e._v(" "),a("div",{staticClass:"line"}),e._v(" "),e._l(e.detailTaskList&&e.detailTaskList.details,function(t,i){return[a("el-form-item",{attrs:{label:"维修人员"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.uname,callback:function(a){e.$set(t,"uname",a)},expression:"item.uname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"维修状态"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.status,callback:function(a){e.$set(t,"status",a)},expression:"item.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"处理时间"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.createdTime,callback:function(a){e.$set(t,"createdTime",a)},expression:"item.createdTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"维修描述"}},[a("el-input",{staticClass:"textarea",attrs:{type:"textarea",rows:2,disabled:!0},model:{value:t.content,callback:function(a){e.$set(t,"content",a)},expression:"item.content"}})],1),e._v(" "),a("div",{staticClass:"line"})]}),e._v(" "),a("el-form-item",{attrs:{label:"维修计划描述"}},[a("el-input",{staticClass:"textarea",attrs:{type:"textarea",rows:2,disabled:!0},model:{value:e.detailTaskList&&e.detailTaskList.content,callback:function(t){e.$set(e.detailTaskList&&e.detailTaskList,"content",t)},expression:"detailTaskList && detailTaskList.content"}})],1)],2)],1),e._v(" "),a("el-dialog",{staticClass:"dialog",attrs:{title:"添加指定人员",visible:e.detailFlag1,width:"33%","close-on-click-modal":!1,"before-close":e.closedialog},on:{"update:visible":function(t){e.detailFlag1=t}}},[a("el-form",{staticClass:"detail-ruleForm",attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"维修任务名称"}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(d,u,!1,function(e){a("FPHg")},null,null);t.default=c.exports}});
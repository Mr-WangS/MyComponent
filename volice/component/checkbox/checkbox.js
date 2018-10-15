
Component({

   properties:{
    //    2 全选  1 半全选  0没勾选
       checkboxState:{
            type: String,
            value:'0'
       },
    //    主主题名
       checkboxLabel:{
           type: String,
           value: ''
       },
    //    判断 checked 是否被选中
       isChecked:{
           type:Boolean,
           value:false
       },
    // 其他数据
       msgid: {
            type: String,
            value:'12'
       }   
   },

   data:{

   },

   methods:{
        onTap: function (e) {

            let _checkboxState = this.data.checkboxState;
            
            // 根据当前的 checkBox 状态判断  点击后 checkBox 状态
            if (_checkboxState == 0 || _checkboxState == 1) {  
                 this.setData({
                     checkboxState:2
                 })
            }else{
                this.setData({
                    checkboxState: 0
                })
            }

            
            var myEventDetail = {
                checkboxState: this.data.checkboxState,
                checkboxLabel: this.data.checkboxLabel,
                isChecked: this.data.isChecked,
                msgid: this.data.msgid
            } 

          console.log(myEventDetail);



            //   把数据传给 父组件
            this.triggerEvent('clickCheckbox', myEventDetail,{ bubbles: false });
    
        },



   }

})
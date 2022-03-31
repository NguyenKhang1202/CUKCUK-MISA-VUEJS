<template>
  <!-- modal -->
  <div
    id="formEmployeeDetail"
    hidden
    class="dialog formDetail"
    v-bind:class="{ open: isShow }"
  >
    <div id="modal" class="modal"></div>
    <div class="dialog-content">
      <!-- <form action=""> -->

      <!-- cập nhật ảnh  -->
      <div class="dialog-content-header">THÔNG TIN NHÂN VIÊN</div>
      <div class="dialog-content-left">
        <input type="file" id="file" accept="image/*" />
        <label for="file">
          <div class="icon icon-160 circle-icon input-image-icon"></div>
          <div class="input-image-title">( Vui lòng chọn ảnh có định dạng</div>
          <div class="input-image-title">.jpg, .jpeg, .png. .gif. )</div>
        </label>
      </div>
      <!-- end phần cập nhật ảnh -->

      <!-- phần form bên phải -->
      <div class="dialog-content-between">
        <div class="dialog-content-top">
          <div class="content-title">
            <div class="title-text">A. THÔNG TIN CHUNG:</div>
            <div class="title-decor"></div>
          </div>
          <div class="content-between-element">
            <div class="element">
              <div class="between-element-title">
                Mã nhân viên (<span class="m-label-red">*</span>)
              </div>
              <input
                id="txtEmployeeCode"
                v-model="employeeForm.EmployeeCode"
                @focus="focusItem"
                ref="txtEmployeeCode"
                class="input-dialog-employee"
                FieldName="EmployeeCode"
                autofocus
                Require="true"
              />
            </div>
            <div class="element">
              <div class="between-element-title">
                Họ và tên (<span class="m-label-red">*</span>)
              </div>
              <input
                id="txtFullName"
                v-model="employeeForm.EmployeeName"
                type="text"
                class="input-dialog-employee"
                FieldName="EmployeeName"
                Require="true"
              />
            </div>
          </div>
          <div class="content-between-element">
            <div class="element">
              <div class="between-element-title">Ngày sinh</div>
              <input
                type="date"
                v-model="employeeForm.DateOfBirth"
                id="dateOfBirth"
                name="birthday"
                FieldName="DateOfBirth"
                class="input-dialog-employee"
                DataType="Date"
                Require="true"
              />
            </div>
            <div class="element">
              <div class="between-element-title">Giới tính</div>
              <div class="between-element-box">
                
                <!-- items : dữ liệu để build combobox -->
                <!-- employeeForm : truyền toàn bộ dữ liệu form sang combobox để bind combobox -->
                <!-- bindDataForm : sự kiện khi thay đổi lựa chọn trên combobox sẽ gửi lại dữ liệu lên form để gửi lên server -->
                <combobox-component 
                  :items="genders"
                  @bindDataForm="bindDataForm"
                  v-bind:employeeForm="employeeForm"
                  />
              </div>
            </div>
          </div>
          <div class="content-between-element">
            <div class="element">
              <div class="between-element-title">
                Số CMND/ Căn cước(<span class="m-label-red">*</span>)
              </div>
              <input id="txtCMND" type="text" class="input-dialog-employee" />
            </div>
            <div class="element">
              <div class="between-element-title">Ngày cấp</div>
              <input
                type="date"
                id="cmt-date"
                name="cmt-date"
                class="input-dialog-employee"
              />
            </div>
          </div>
          <div class="content-between-element">
            <div class="element">
              <div class="between-element-title">Nơi cấp</div>
              <input type="text" class="input-dialog-employee" />
            </div>
          </div>
          <div class="content-between-element">
            <div class="element">
              <div class="between-element-title">
                Email (<span class="m-label-red">*</span>)
              </div>
              <input
                id="txtEmail"
                v-model="employeeForm.Email"
                type="email"
                class="input-dialog-employee"
                FieldName="Email"
                Require="false"
              />
            </div>
            <div class="element">
              <div class="between-element-title">
                Số điện thoại (<span class="m-label-red">*</span>)
              </div>
              <input
                id="txtPhoneNumber"
                v-model="employeeForm.PhoneNumber"
                type="text"
                FieldName="PhoneNumber"
                class="input-dialog-employee"
              />
            </div>
          </div>
        </div>
        <div class="dialog-content-bottom">
          <div class="content-title">
            <div class="title-text">B. THÔNG TIN CÔNG VIỆC:</div>
            <div class="title-decor"></div>
          </div>
          <div class="content-between-element">
            <div class="content-between-element">
              <div class="element">
                <div class="between-element-title">Vị trí</div>
                <div class="between-element-box">

                  <!-- items : dữ liệu để build combobox -->
                  <!-- employeeForm : truyền toàn bộ dữ liệu form sang combobox để bind combobox -->
                  <!-- bindDataForm : sự kiện khi thay đổi lựa chọn trên combobox sẽ gửi lại dữ liệu lên form để gửi lên server -->
                  <combobox-component 
                    :items="positions"
                    @bindDataForm="bindDataForm"
                    v-bind:employeeForm="employeeForm"
                     />
                </div>
              </div>
              <div class="element">
                <div class="between-element-title">Phòng ban</div>
                <div class="between-element-box">

                  <!-- items : dữ liệu để build combobox -->
                  <!-- employeeForm : truyền toàn bộ dữ liệu form sang combobox để bind combobox -->
                  <!-- bindDataForm : sự kiện khi thay đổi lựa chọn trên combobox sẽ gửi lại dữ liệu lên form để gửi lên server -->
                  <combobox-component 
                    :items="departments"
                    @bindDataForm="bindDataForm"  
                    v-bind:employeeForm="employeeForm"
                    />
                </div>
              </div>
            </div>
          </div>
          <div class="content-between-element">
            <div class="content-between-element">
              <div class="element">
                <div class="between-element-title">Mã số thuế cá nhân</div>
                <input type="text" class="input-dialog-employee" />
              </div>
              <div class="element">
                <div class="between-element-title">Mức lương cơ bản</div>
                <input
                  id="numSalary"
                  type="text"
                  class="input-dialog-employee"
                  DataType="Number"
                />
              </div>
            </div>
          </div>
          <div class="content-between-element">
            <div class="content-between-element">
              <div class="element">
                <div class="between-element-title">Ngày gia nhập công ty</div>
                <input
                  type="date"
                  id="date-join-company"
                  name="date-join-company"
                  class="input-dialog-employee"
                />
              </div>
              <div class="element">
                <div class="between-element-title">Tình trạng công việc</div>
                <div class="between-element-box">
                  <select class="select" name="" id="">
                    <option value="0">Đang làm việc</option>
                    <option value="1">Đã nghỉ việc</option>
                    <option value="2">Khác</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end form -->

      <div class="dialog-content-footer">
        <button
          id="btnSave"
          @click="handleSave"
          type="submit"
          Command="Save"
          class="m-btn m-btn-save btnForm"
        >
          <i class="far fa-save icon-save"></i>Lưu
        </button>
        <button
          id="btnCancel"
          @click="handleCancel"
          Command="Cancel"
          class="m-btn m-btn-destroy btnForm"
        >
          Hủy
        </button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
// import { computed } from "vue";
import CommonFn from "../../js/Common/Common.js";
import Resource from "../../js/Common/Resource";
import Constant from "../../js/Common/Constant";
import Enumeration from "../../js/Common/Enumeration";
import ComboboxComponent from "../../components/base/Combobox.vue"

export default {
  name: "EmployeeDetail",
  components: {
    ComboboxComponent,
  },

  // provide() {
  //   return {
  //     employeeForm: this.employee,
  //   }
  // },
  // Là các giá trị nhận được từ Employee
  props: {
    // ẩn hiện form
    isShow: {
      type: Boolean,
      default: false,
    },

    // là dữ liệu nhận được khi FormMode là Edit
    employee: {
      type: Object,
    },

    /*  
        Add : 1 
        Edit : 2 
    */
    formMode: Number,
  },

  // Các giá trị của chính EmployeeDetail
  data() {
    return {
      // Là dữ liệu trên Form
      employeeForm: {type: Object, default: {}},

      // Kết quả validate
      isValid: true,

      departments : {
        data: [
          { id: "11452b0c-768e-5ff7-0d63-eeb1d8ed8cef", name: "Phòng Công nghệ thông tin"  },
          { id: "142cb08f-7c31-21fa-8e90-67245e8b283e", name: "Phòng Sản xuất" },
          { id: "17120d02-6ab5-3e43-18cb-66948daf6128",name: "Phòng Đào tạo" },
          { id: "469b3ece-744a-45d5-957d-e8c757976496", name: "Phòng Nhân sự" },
          { id: "4e272fc4-7875-78d6-7d32-6a1673ffca7c", name: "Phòng Tuyển dụng"  },
          ],
        placeholder: "Tất cả phòng ban",
        FieldName: "Department",
        NameId: "DepartmentId",
        Parent: "EmployeeDetail",
      },

      positions: {
        data: [
          { id: "0",name: "Nhân viên" },
          { id: "1", name: "Giám đốc" },
          { id: "2", name: "Khác"  },
        ],
        placeholder: "Tất cả vị trí",
        FieldName: "Position",
        NameId: "PositionId",
        Parent: "EmployeeDetail",
      },
      genders: {
        data: [
          { id: "0",name: "Nữ" },
          { id: "1", name: "Nam" },
          { id: "2", name: "Khác"  },
        ],
        placeholder: "Giới tính",
        FieldName: "Gender",
        NameId: "Gender",
        Parent: "EmployeeDetail",
      }
    };
  },

  // Theo dõi sự thay đổi và reload
  watch: {
    /* 
        Mỗi khi thực hiện edit sẽ đặt lại employeeForm
        Đồng thời convert để bind Date 
    */
    employee: function (employeeEdit) {
      let me = this;
      me.employeeForm = employeeEdit;
      me.employeeForm.DateOfBirth = CommonFn.convertDate(employeeEdit.DateOfBirth);
      console.log(me.employeeForm)
    },

    /* 
        Mỗi khi Form show sẽ nhận EmployeeCode từ server 
    */
    isShow: function () {
      let me = this;
      if (me.isShow == true && me.formMode == Enumeration.FormMode.Add) {
        let url = Constant.urlNewEmployeeCode,
            method = Resource.Method.Get,
            data = {};
        // reset form
        me.employeeForm = {};
        try {
          CommonFn.Axios(method, url, data, function (response){
            // gán EmployeeCode lên form (khi thêm mới)
            me.employeeForm.EmployeeCode = response.data;
          });
        } catch (error) {
          console.log(error);
        }
      }
      me.$refs.txtEmployeeCode.focus();
    },
  },

  methods: {
    /* 
        Sự kiện click Cancel button
    */
    handleCancel() {
      this.$emit("handleCloseForm");
    },
    /* 
        Sự kiện click Save button
    */
    handleSave() {
        let me = this;
        me.$emit("handleSave", me.employeeForm);
    },

    bindDataForm({fieldName, item}){
      let me = this;
      switch(fieldName){
        case "Department":
          me.employeeForm.DepartmentId = item.id;
          break;
        case "Gender":
          me.employeeForm.Gender = item.id;
          break;
        case "Position":
          me.employeeForm.PositionId = item.id;
          break;
        }
    },
    // isDateFormat(date){
    //     let regex = new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");
    // return regex.test(date);
    // },

    // IsEmailFormat: (email) => {
    //     var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //     if (!regex.test(email)) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // },

    // // Validate form 
    // validateForm(){
    //     let me = this,
    //         isValid = me.validateRequire(); // Validate các trường bắt buộc nhập

    //     if(isValid){
    //         isValid = me.validateFieldNumber(); // Validate các trường nhập  số
    //     }

    //     if(isValid){
    //         isValid = me.validateFieldDate(); // Validate các trường ngày tháng
    //     }

    //     if(isValid){
    //         isValid = me.validateEmail(); // Validate trường email
    //     }

    //     if(isValid){
    //         isValid = me.validateCustom(); // Validate các trường hợp đặc biệt khác
    //     }

    //     return isValid;
    // },

    // // Validate các trường bắt buộc
    // validateRequire(){
    //     let me = this,
    //         isValid = true;

    //     // Duyệt hết các trường require xem có trường nào bắt buộc mà ko có value ko
    //     let elements = document.querySelectorAll("[Require='true']");
    //         elements.forEach(element => {
    //             let value = element.value;
    
    //             if(!value){
    //                 isValid = false;
    //                 element.classList.add("notValidControl");
    //                 // CommonFn.showDialogMsg("Vui lòng không được để trống!");
    //                 // element.attr("title", "Vui lòng không được để trống!");
    //             }else{
    //                 element.classList.remove("notValidControl");
                    
    //             }
    //         })
    //     return isValid;
    // },

    // // Validate các trường Number
    // validateFieldNumber(){
    //     let me = this,
    //         isValid = true;

    //     let elements = document.querySelectorAll("[DataType='Number']");
    //         elements.forEach(element => {
    //             let value = element.value;
    
    //             if(!isNaN(value)){
    //                 isValid = false;
    //                 element.classList.add("notValidControl");
    //                 // CommonFn.showDialogMsg("Vui lòng không được để trống!");
    //                 element.setAttribute("title", "Vui lòng nhập đúng định dạng!");
    //             }else{
    //                 element.classList.remove("notValidControl");
    //             }
    //         })
    //     return isValid;
    // },

    // // Validate các trường ngày tháng
    // validateFieldDate(){
    //     let me = this,
    //         isValid = true;

    //     let elements = document.querySelectorAll("[DataType='Date']");
    //         elements.forEach(element => {
    //             let value = element.value;
    
    //             if(!me.isDateFormat(value)){
    //                 isValid = false;
    //                 element.classList.add("notValidControl");
    //                 // CommonFn.showDialogMsg("Vui lòng không được để trống!");
    //                 element.setAttribute("title", "Vui lòng nhập đúng định dạng!");
    //             }else{
    //                 element.classList.remove("notValidControl");
    //             }
    //         })
    // },

    // // Validate các trường email
    // validateEmail(){
    //     let me = this,
    //     isValid = true;
    //     // Duyệt hết các trường require xem có trường nào bắt buộc mà ko có value ko
    //     let elements = document.querySelectorAll("[DataType='Email']");
        
    //     elements.forEach(element => {
    //         let value = element.val();

    //         // is not email
    //         if(!me.IsEmailFormat(value)){
    //             isValid = false;
    //             element.classList.add("notValidControl");
    //             // CommonFn.showDialogMsg("Vui lòng nhập đúng định dạng Email !");
    //             element.setAttribute("title", "Vui lòng nhập đúng định dạng!");
    //         }else{
    //             element.classList.remove("notValidControl");
    //         }
    //     });
    //     return isValid;
    // },

    // // Hàm dùng cho các màn override lại: validate Trùng mã nhân viên hoặc các kiểu validate khác
    // validateCustom(){
    //     // let me = this,
    //     //     url = `${me.Parent.urlAdd}`,
    //     //     method = Resource.Method.Get,
    //     //     urlFull = `${Constant.UrlPrefix}${url}`;
    //     // CommonFn.Ajax(urlFull, method, data, function(response){
    //     //     if(response){
    //     //         CommonFn.showToast(method);
    //     //         me.cancel();
    //     //         me.Parent.getDataServer();
    //     //     }else{
    //     //         console.log("Có lỗi khi cất dữ liệu");
    //     //     }
    //     // });
    //     return true;
    // }

  },
};
</script>
<style>
.open {
  display: block;
}
</style>

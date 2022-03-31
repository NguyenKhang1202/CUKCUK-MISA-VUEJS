<template>
  <div
    class="m-combobox"
    mcombobox
    :FieldName="items.FieldName"
    :Parent="items.Parent"
  >
    <input type="text" class="m-input" :placeholder="items.placeholder" :value="valueInput"/>
    <button class="m-combobox-button"
        @click="onClickArrow"
        ></button>
    <div class="m-combobox-data" v-show="isShowItem">
        <div class="m-combobox-item"
        v-bind:class="{'m-combobox-selected': this.itemSelected.id == item.id}" 
        @click="onClickItem($event, item)"
        v-for="item in items.data" :key="item.id"
        :value="item.id"
        >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComboboxComponent",
  // items : dữ liệu để xây dựng lên combobox
  // value : là dữ liệu nhận được từ form => bind lên form
  props: ["items", "employeeForm"],
  data() {
    return {
      itemSelected: "",
      isShowItem: false,
      // employeeForm: this.value,
      valueInput: "",
    };
  },
  methods: {
      // Sự kiện click button  
      onClickArrow(){
        let me = this;
        me.isShowItem = !me.isShowItem;
      },

      // Sự kiện click item, gửi dữ liệu lên form 
      // => để gửi phải có itemSelected
      onClickItem(event, itemSelected){
        let me = this;
        me.itemSelected = itemSelected;
        me.isShowItem = !me.isShowItem;
        let data = {
          fieldName: me.items.FieldName,
          item: me.itemSelected,
        }
        me.$emit('bindDataForm',data);
      },

      // item là 1 object có dạng : { id: "...", name: "..."}
      createItem(idItem){
        let me = this,
            nameItem = "";
        
        // duyệt tất cả các item có trên server
        me.items.data.forEach((ele) => {
          if(ele.id == idItem){
            nameItem = ele.name;
          }
        });
        return {
          id: idItem,
          name: nameItem,
        }
      },
  },
  watch: { 
    // Mỗi khi selected item khác thì đặt lại value và title cho input
    itemSelected: function(){
      let me = this;
      let comboboxs = document.querySelectorAll(`[Parent=${me.items.Parent}]`);

      comboboxs.forEach((item) => {
        if(item.getAttribute("FieldName") == me.items.FieldName){
          me.valueInput = me.itemSelected.name;
          let elementInput = item.children[0];
          elementInput.setAttribute('title', me.itemSelected.name);
        }
      })
    },

    employeeForm: function(){
      let me = this;
      let comboboxs = document.querySelectorAll(`[Parent=EmployeeDetail]`);
      comboboxs.forEach((combobox) => {
          if(combobox.getAttribute("FieldName") == me.items.FieldName){
            let idName = me.items.NameId,  // ví dụ : DepartmentId, Gender,...
                idItem = me.employeeForm[idName],  // lấy giá trị Id tương ứng trong Form
                nameItem = "";
            me.items.data.forEach((ele) => {
              if(ele.id == idItem){
                nameItem = ele.name;
              }
            })
            me.itemSelected = me.createItem(idItem, nameItem);
            me.valueInput = nameItem;
          }
      })
    }
  },

};
</script>

<style>
</style>

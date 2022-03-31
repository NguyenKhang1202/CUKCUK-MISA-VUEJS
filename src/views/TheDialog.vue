<template>
    <div id="dialogConfirmDelete" MISADialog class="m-dialog-box" hidden v-bind:class="{ open: isShowDialog }">
        <div class="m-dialog">
            <div class="m-dialog-close"></div>
            <div class="m-dialog-header">XÓA NHÂN VIÊN</div>
            <div class="m-dialog-body">
                Bạn có chắc chắn muốn xóa nhân viên {{ employeeCode }}?
            </div>
            <div class="m-dialog-footer">
                <button id="btn-cancel" @click="handleCancel" class="m-btn m-btn-cancel">Hủy bỏ</button>
                <button id="btn-delete-confirm" @click="handleConfirm" class="m-btn m-btn-ok">Đồng ý</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheDialog",
    props: ["isShowDialog","employeeCode"],
    data(){
        return{

        }
    },
    methods: {
        handleCancel(){
            this.$emit('handleCloseDialog')
        },
        handleConfirm(){
            this.$emit('handleConfirmDialog')
        }
    }
}
</script>

<style>

</style>
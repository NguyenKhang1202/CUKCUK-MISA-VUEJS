/* eslint-disable */

// Các hàm dùng chung toàn chương trình
var Dialog = Dialog || {};

Dialog.Delete = {
    title: "XÓA NHÂN VIÊN",
    message: "Bạn có chắc chắn muốn xóa nhân viên ",
}

Dialog.Warning = (message) => {
    return {
        title: 'THÔNG BÁO',
        message: message,
        isShowBtnCancel: false,
        isShowDialog: true,
    }
}

export default Dialog;

<template>
    <div class="nav-bar"> 
        <!-- logo -->
        <div class="logo-box">
            <div class="toggle toggle-icon"></div>
            <div class="logo-page logo-page-icon"></div>
        </div>

        <!-- menu -->
        <div class="navbar-box">
            <router-link to="/" class="menu-item">
                <div class="menu-item-icon menu-icon-dashboard"></div>
                <div class="menu-item-text">Tổng quan</div>
            </router-link>
            <router-link to="/report" class="menu-item">
                <div class="menu-item-icon menu-icon-report"></div>
                <div class="menu-item-text">Báo cáo</div>
            </router-link>
            <router-link to="/customer" class="menu-item">
                <div class="menu-item-icon menu-icon-dashboard"></div>
                <div class="menu-item-text">Danh sách khách hàng</div>
            </router-link>
            <router-link to="/employee" class="menu-item">
                <div class="menu-item-icon menu-icon-employee"></div>
                <div class="menu-item-text">Danh mục nhân viên</div>
            </router-link>
            <router-link to="/setting" class="menu-item">
                <div class="menu-item-icon menu-icon-setting"></div>
                <div class="menu-item-text">Thiết lập hệ thống</div>
            </router-link>
        </div>
        
    </div>
</template>

<script>

// props : khai báo các thuộc tính sẽ nhận 
export default {
    name: "TheNavbar",
    props: [],
}
</script>

<style>
    
</style>>
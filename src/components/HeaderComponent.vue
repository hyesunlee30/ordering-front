<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="navbar-collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto" v-if="userRole==='ADMIN'">
                <li class="nav-item" ><a class="nav-link" href="/post/list">회원관리</a></li>
                <li class="nav-item"><a class="nav-link" href="/author/create">상품관리</a></li>
                <li class="nav-item"><a class="nav-link" href="/author/create">주문관리</a></li>
            </ul>
        </div>
        <div class="mx-auto order-0">
            <a class="navbar-brand mx-auto" href="/">BDLEE SHOP</a>
        </div>
        <div class="navbar-collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" v-if="isLogin" ><a class="nav-link" href="/mypage">장바구니</a></li>
                <li class="nav-item" ><a class="nav-link" href="/items">상품목록</a></li>
                <li class="nav-item" v-if="isLogin" ><a class="nav-link" href="/mypage">My Page</a></li>
                <li class="nav-item" v-if="!isLogin"><a class="nav-link" href="/member/create">회원가입</a></li>
                <li class="nav-item" v-if="!isLogin"><a class="nav-link"  href="/login">로그인</a></li>
                <li class="nav-item" v-if="isLogin"><a class="nav-link" href="#" @click="doLogout">로그아웃</a></li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    data () {
        return {
            isLogin: false,
            userRole: null
        }
    },
    created() {
        this.isLogin = localStorage.getItem("token")?true:false
        this.userRole = localStorage.getItem("role")?localStorage.getItem("role"):null
    },
    methods: {
        doLogout(){
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            this.isLogin = false;
            this.userRole = null;
        }
    },
}
</script>

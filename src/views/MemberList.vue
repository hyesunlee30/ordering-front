<template>
    <div class="container">
        <div class="page-header"><h1>회원 목록</h1></div>
        <table class="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>주문수량</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="member in memberList" :key="member.id">
                    <td>{{member.id}}</td>
                    <td>{{member.name}}</td>
                    <td>{{member.email}}</td>
                    <td>{{member.orderCount}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            memberList:[]
        }
        
    },
    async created() {
        const token = localStorage.getItem('token')
        const response = await axios.get("http://localhost:8080/members", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        this.memberList = response.data;
    }
}
</script>

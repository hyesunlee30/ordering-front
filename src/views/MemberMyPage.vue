<template>
    <template>
    <div class="container">
        <div class="page-header text-center" style="margin-top: 20px;"><h1>회원 정보</h1></div>
        <table class="table">
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>도시</th>
                    <th>상세주소</th>
                    <th>우편번호</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="member in memberList" :key="member.id">
                    <td>{{member.name}}</td>
                    <td>{{member.email}}</td>
                    <td>{{member.city}}</td>
                    <td>{{member.street}}</td>
                    <td>{{member.zipcode}}</td>
                    <td>
                        <a :href="`/member/${member.id}/orders`">
                            {{member.orderCount}}
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<OrderListComponent
    :isAdmin="false"
    apiUrl = "`http://localhost:8080/member/myorders`"
    />
</template>

<script>
import OrderListComponent from '@/components/OrderListComponent.vue';


export default {
    props : {
        id : Number
    },
    components:{OrderListComponent}
}
</script>

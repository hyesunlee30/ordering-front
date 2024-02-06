<template>
    <h1>hello world {{mylang}}</h1>
    <input type="text" value="myvalue"/>
    <!--:value는 v-bind:value=의 축약어-->
    <!--v-bind는 input 박스에서 많이 사용하는 변수매핑 방식-->
    <input type="text" :value="inputvalue1"/>
    <!--v-model 양방향 데이터 바인딩 모델이라는 차이점-->
    <input type="text" v-model="inputvalue2"/>
    <!--onclick == @click-->
    <button @click="showValue">변수변경사항확인</button>
</template>

<script>

export default {
    data(){

        return {
            mylang: "python",
            inputvalue1: "java",
            inputvalue2: "C"
        }
    },
    //vue생명주기에서 인스턴스가 생성되는 시점을 created라고 하고, 화면이 열리기전에 실행되는 함수
    created() {
        this.mylang = "java"
    },
    methods: {
        showValue(){
            alert(this.inputvalue2);
        }
    }
}
</script>


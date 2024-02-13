import {createStore} from 'vuex';


// initState, updateLocalStorage와 같은 함수는 스토어 정의 바깥에 위치
// 책임과 권한을 분리하는 개념적인 의도도 있지만, 다른 스토어나 다른 상황에서 재사용성을 높이기 위한 아키텍쳐
function initState() {
    return {
        cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
        totalQuantity: localStorage.getItem('totalQuantity') || 0
    }
}
function updateLocalStorage(cartItems, totalQuantity){
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalQuantity', totalQuantity);
}

export default createStore ({
    // state : 상태를 의미하는 객체로서 initState를 통해 상태초기화
    state: initState,
    mutations: {
        //addToCart 함수는 외부 컴포넌트(또는 action) 에서 호출될 예정
        addToCart(state, item){
            const existItem = state.cartItems.find(i => i.id === item.id);
            if(existItem){
                existItem.count += item.count;
            } else {
                state.cartItems.push(item);
            }
            state.totalQuantity = parseInt(state.totalQuantity + item.count);
            updateLocalStorage(state.cartItems,state.totalQuantity)

        }
    },
    // getters 상태를 반환하는 함수들의 집합
    getters: {
        cartItems: state => state.cartItems,
        getTotalQuantity: state=> state.totalQuantity
    }
});
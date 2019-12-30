export default {
    namespace: 'products',
    state: {
        products:
            [
                {
                    name: 'dva',
                    id: 1
                },
                {
                    name: 'antd',
                    id: 2
                },
                {
                    name: 'atompoint',
                    id: 3
                },
            ]
        },
    effects: {
        *delete({payload},{ put }) {
            yield put({
                type: 'deleteTask', payload 
            })
        },
        *added({payload}, {put}){
            yield put ({
                type: 'addName', payload
            })
        }
    },
    reducers: {
        deleteTask(state, {payload} ) {
            let cloneProducts = [...state.products];
            cloneProducts = cloneProducts.filter(v => v.id !== payload)
            console.log(cloneProducts);
            return {
                ...state,
                products : cloneProducts
            };
        },
        addName(state ,{payload}){
            let cloneState = [...state.products];
            cloneState = cloneState.push(n => n.length + 1 === payload)
            console.log(cloneState);
            return{
                ...state,
                products : cloneState
            }
        }
    },
}; 
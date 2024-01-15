
// import CartContext from './cart-context';
import { useReducer } from 'react';
import CartContext from './cartContext';

const defaultCartState={
    items:[],
    totalAmount:0
}

const cartreducer=(state,action)=>{

    if(action.type==='ADD'){
       
        const updatedtotalamount=state.totalAmount+ action.item.price;

        const existingCartItemIndex=state.items.findIndex(
            (item)=>item.id===action.item.id
        )
        const existingCartItem=state.items[existingCartItemIndex];
        let updateditems;
       

        if(existingCartItem){

            const updateditem={
                ...existingCartItem,
                amount:existingCartItem.amount+action.item.amount
            }
            updateditems=[...state.items];
            updateditems[existingCartItemIndex]=updateditem;
        }
        else{
            
            updateditems=state.items.concat(action.item);
        }

        return{
            items:updateditems,
            totalAmount:updatedtotalamount
        }
    }
///////////////
    if(action.type==="REMOVE"){

        const existingCartItemIndex=state.items.findIndex(
            (item)=>item.id===action.id
        )
        const existingCartItem=state.items[existingCartItemIndex];
    
        const updatedtotalamount=state.totalAmount-existingCartItem.price;
        let updateditems;
        // console.log("amount");
        // console.log(updatedtotalamount);

        if(existingCartItem.amount===1){

            updateditems=state.items.filter(item=>item.id!==action.id);
        }
        else{

            const updateditem={...existingCartItem,amount:existingCartItem.amount-1};
            updateditems=[...state.items];
            updateditems[existingCartItemIndex]=updateditem;

        }
        return{
            items:updateditems,
            totalAmount:updatedtotalamount
        }

    }
    return defaultCartState;
}

const CartProvider=({children})=>{

    const [cartstate,dispatchCartState]=useReducer(cartreducer,defaultCartState);

    const addItemHandler=item=>{

        dispatchCartState({type:"ADD",item:item})

    }
    const removeItemHandler=id=>{
        dispatchCartState({type:"REMOVE",id:id})
    }


    const cartContext={

        items:cartstate.items,
        totalAmount:cartstate.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler

    }
    

    return (
        <CartContext.Provider value={cartContext}>

            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
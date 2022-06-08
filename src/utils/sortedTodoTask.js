
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect'

export const selectTodos = state => state.todoState.todos
export const selectFilter = state => state.todoState.filter


/**
 * Basic example for the Reselect library
 * @see https://github.com/reduxjs/reselect
 */



 const selectShopItems = (state) => state.shop.items;
 const selectTaxPercent = (state) => state.shop.taxPercent;
 
 const selectSubtotal = createSelector(selectShopItems, (items) =>
   items.reduce((subtotal, item) => subtotal + item.value, 0)
 );
 
 const selectTax = createSelector(
   selectSubtotal,
   selectTaxPercent,
   (subtotal, taxPercent) => subtotal * (taxPercent / 100)
 );
 
 const selectTotal = createSelector(
   selectSubtotal,
   selectTax,
   (subtotal, tax) => ({ total: subtotal + tax })
 );
 
 const exampleState = {
   shop: {
     taxPercent: 8,
     items: [
       { name: "apple", value: 1.2 },
       { name: "orange", value: 0.95 }
     ]
   }
 };
 
 console.log(selectSubtotal(exampleState)); // 2.15
 console.log(selectTax(exampleState)); // 0.172
 console.log(selectTotal(exampleState)); // { total: 2.322 }
 






 

export const sortState = createSelector(
  [selectTodos,selectFilter],
  (todos, filter) => ({


  })
)

/*
    if (filter === 'COMPLETE') {
      return todos.filter(i => i.active === false)
    }
    if (filter  === 'ACTIVE') {
      return todos.filter(i => i.active === true)
    }
    if (filter  === 'ALL') {
      return todos
    }


*/


export const sortedTodoTask = (taskDataList, sortPriority) => {




  const sortedList = [];
  console.log(sortedList)
  if (sortPriority) {
    taskDataList.forEach(element => {
      if (element.active === true) {
        sortedList.push(element)
      } 
    });
    /*
    taskDataList.forEach(element => {
      if (element.active === false) {
        sortedList.push(element)
      } 
    });
    */
  } else {
  
    taskDataList.forEach(element => {
      if (element.active === false) {
        sortedList.push(element)
      } 
    });
    /*
    taskDataList.forEach(element => {
      if (element.active === true) {
        sortedList.push(element)
      } 
    });
    */
  }
  return sortedList
}
export const initialState = {
    basket : null,
    theme:null
};


const reducer = (state, action) => {
    console.log(action);
   switch(action.type){
       case 'ADD_TO_INFO':
        return{
               ...state, //it means return whatever the state was orginally was
               basket: action.item,
           };

           case 'ADD_THEME_BLUE':
            return{
                ...state,
                
            }

            case 'ADD_THEME_GREEN':
            return{
                ...state,
                
            }

            case 'ADD_THEME_RED':
            return{
                ...state,
                
            }
        default:
            return state;
      
   }

};

export default reducer;



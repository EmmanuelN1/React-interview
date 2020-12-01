export const initialState = {
    basket : null,
    themeValue:null
};


const reducer = (state, action) => {
   switch(action.type){
       case 'ADD_TO_INFO':
        return{
               ...state, //it means return whatever the state was orginally was
               basket: action.item,
           };

           case 'ADD_THEME_BLUE':
            return{
                ...state,
                themeValue: action.item,
            }

            case 'ADD_THEME_GREEN':
            return{
                ...state,
                themeValue: action.item,
            }

            case 'ADD_THEME_RED':
            return{
                ...state,
                themeValue: action.item,                
            }
        default:
            return state;
      
   }

};

export default reducer;



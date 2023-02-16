const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
   dialogs: [
      { id: 1, name: "Валера" },
      { id: 2, name: "Димон" },
      { id: 3, name: "Руслан" }
   ],
   messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you? Im in Almenevo today" },
      { id: 3, message: "Hello" },
   ],
   newMessageBody: 'Ку'
}


const dialogsReducer = (state = initialState, action: any) => {

   let body = state.newMessageBody

   switch (action.type) {

      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body
         return state

      case SEND_MESSAGE:
         body
         if (body === '') {
         }
         else if (body != '') {
            state.messages.push({ id: 45, message: body })
            state.newMessageBody = ''
         }
         return state

      default:
         return state
   }
}

export const sendMessageCreator = () => {
   return {
      type: SEND_MESSAGE
   }
}

export const updateNewMessageBodyCreator = (body: any) => {
   return {
      type: UPDATE_NEW_MESSAGE_BODY, body: body
   }
}

export default dialogsReducer
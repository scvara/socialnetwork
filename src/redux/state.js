const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, likeCounter: 15, postmessage: 'Hello World!' },
                { id: 2, likeCounter: 28, postmessage: '(28:5) start value has mixed support, consider using flex-start instead' },
                { id: 3, likeCounter: 13, postmessage: 'consider using flex-start instead Helloo' },
            ],
            newPostText: `What's on your mind?`
        },
        dialogPage: {
            dialogs: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Sollo' },
                { id: 3, name: 'Alina' },
                { id: 4, name: 'Polina' },
            ],
            messages: [
                { id: 1, message: 'Lorem ipsum dolor sitconsectetur adipisicing elit. ' },
                { id: 2, message: 'consectetur Lorem ipsum dolor sitconsectetur adipisicing elit.' },
                { id: 3, message: 'Lorconsectetur adipisicing elit.' },
                { id: 4, message: 'Lorem ipsum dolor sitconsectetur adipisicing elit.' },
            ],
            newMessageText: 'Enter your message here'
        },
        sidebarPage: {
            friends: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Vova' },
                { id: 3, name: 'Alina' },
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                likeCounter: 0,
                postmessage: this._state.profilePage.newPostText,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = { id: 4, message: this._state.dialogPage.newMessageText }
            this._state.dialogPage.messages.push(newMessage);
            this._state.dialogPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST,})
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const addMessageActionCreator = () => ({type: ADD_MESSAGE,})
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})


export default store;

window.store = store;
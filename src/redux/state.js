import { rerenderEntireTree } from './../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, likeCounter: 15, postmessage: 'Hello World!' },
            { id: 2, likeCounter: 28, postmessage: '(28:5) start value has mixed support, consider using flex-start instead' },
            { id: 3, likeCounter: 13, postmessage: 'consider using flex-start instead Helloo' },
        ],
        newPostText: 'My Own Text for Now'
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
        ]
    },
    sidebarPage: {
        friends: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Vova' },
            { id: 3, name: 'Alina' },
        ]
    }
};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 4,
        likeCounter: 0,
        postmessage: state.profilePage.newPostText,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;
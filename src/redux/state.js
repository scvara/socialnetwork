let state = {
    profilePage: {
        posts: [
            { id: 1, likeCounter: 15, postmessage: 'Hello World!' },
            { id: 2, likeCounter: 28, postmessage: '(28:5) start value has mixed support, consider using flex-start instead' },
            { id: 3, likeCounter: 13, postmessage: 'consider using flex-start instead Helloo' },
            { id: 4, likeCounter: 13, postmessage: 'consider using flex-start instead Helloo' },
            { id: 5, likeCounter: 13, postmessage: 'consider using flex-start instead Helloo' },
            { id: 6, likeCounter: 524, postmessage: 'Hello World!' },
        ]
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 7,
        likeCounter: 0,
        postmessage: postMessage,
    };
    state.profilePage.posts.push(newPost);
}


export default state;
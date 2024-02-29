const emojis = ['👽','🤖','❤️','🐸','🤡','🐦','🌚','😈'];
// const emojis = [
//     {'🍎' : "Apple"},{'🍌': "Banana"},{'🍇': "graps"},{'🍉':"melon"},{'🍍': "pineapple"},{'🥭':"mango"}];
const pair_emojis  = [...emojis, ...emojis];
const initRevealState = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];


export {emojis, pair_emojis, initRevealState};
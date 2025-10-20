import helloWorld from './helloWorld.js';

const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
};

messages();
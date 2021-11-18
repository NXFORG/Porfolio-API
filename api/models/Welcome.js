const welcomes = [
    {id: 1, welcome_text: 'Please scroll down to see more'},
    {id: 2, welcome_text: 'Hello and welcome to my Portfolio'},
]

class Welcome {
    constructor(data) {
        this.id = data.id;
        this.fact_text = data.welcome_text;
    }

    static get all() {
        return new Promise((resolve, reject) => {
            try {
                resolve(welcomes);
            } catch(err) {
                reject('Welcome messages not found.');
            }
        })
    }

    static getWelcomeById(id) {
        return new Promise((resolve, reject) => {
            try {
                resolve(welcomes.find(w => w.id === id));
            } catch(err) {
                reject('Welcome message not found');
            }
        })
    }
}

module.exports = Welcome;
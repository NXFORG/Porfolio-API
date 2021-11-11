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
        return new Promise((res, rej) => {
            try {
                res(welcomes);
            } catch(err) {
                rej('Welcome messages not found.');
            }
        })
    }

    static getWelcomeById(id) {
        return new Promise((rej, res) => {
            try {
                res(welcomes.find(w => w.id === id));
            } catch(err) {
                rej('Welcome message not found');
            }
        })
    }
}

module.exports = Welcome;
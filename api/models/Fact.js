const facts = [
    {id: 1, fact_text: 'Did you know there are over 700 programming languages?'},
    {id: 2, fact_text: "The first computer 'bug' was a moth that had become stuck in a Mark II computer in 1947."},
    {id: 3, fact_text: "Did you know the world's largest record collection had over 1 million items?"},
    {id: 4, fact_text: "The next time Halley's Comet will pass Earth is in 2061."},
    {id: 5, fact_text: 'Did you know one day on venus is longer than one year?'}
]

class Fact {
    constructor(data) {
        this.id = data.id;
        this.fact_text = data.fact_text;
    }

    static get all() {
        return new Promise((resolve, reject) => {
            try {
                resolve(facts);
            } catch(err) {
                reject('Facts not found.');
            }
        })
    }

    static getFactById(id) {
        return new Promise((resolve, reject) => {
            try {
                resolve(facts.find(f => f.id === id ));
            } catch(err) {
                reject('Fact not found');
            } 
        })
    }
}

module.exports = Fact;
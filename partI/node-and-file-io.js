
const fs = require('fs');
class Visitor{
    constructor(fullName, age, visitDate, visitTime, comment, visAssistantName){
        this.fullName = fullName,
            this.age = age,
            this.visitDate = visitDate,
            this.visitTime = visitTime,
            this.comment = comment,
            this.visAssistantName = visAssistantName
    }

    save(id){
        
        let info = fs.readFileSync(`visitor_${id}.json`);
        let visitors = JSON.parse(info);
        console.log(visitors);
    }

    load(id){

}
}

let alice = new Visitor();
alice.save(1);

let bob = new Visitor();
bob.save(2);

let charlie = new Visitor();
charlie.save(3);

// syntactic sugar
class Instructor{
    name;
    designation = 'web courese Instructor'
    trem = 'web team'
    location;
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

const aamir = new Instructor();
console.log(aamir);
aamir.startSupportSession('9:00');
aamir.createQuiz(60)
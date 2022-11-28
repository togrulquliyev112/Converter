function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
class Message{
    constructor(author,senddate,messagetext) {
        this.author = author;
        this.senddate = senddate;
        this.messagetext = messagetext
      }
      toString(){
        var a = String(`${this.senddate} ${this.author}: ${this.messagetext}`)
        return a;
      }
}
class Messenger extends Message {
    show_history(){
        this.toString()
    }
    send(author,text){
        this.author = author
        this.messagetext = text;
        this.senddate = gettime()
        console.log(this.toString())
    }
}
let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()


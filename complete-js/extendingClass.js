class Media{
    constructor(info){
        this.publishDate=info.publishDate;
        this.title=info.title;
        this.author=info.author;
        this.name=info.name;
    }
}
class Song extends Media{
    constructor(songData){
        super(songData);
        this.artist=songData.artist;
    }
}

const mySong=new Song({
    publishDate:"2020-01-01",
    title:"My Song",
    artist:"Queen",
    name:"My Song",
    author:"Test"
})
console.log(mySong);

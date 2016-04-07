var Jp404Controller = require('./controllers/Jp404');



app.get('/Jp404', Jp404Controller.index);




magicWord = new Audio('magicWord.mp3'); 
if (typeof magicWord.loop == 'boolean')
{
    magicWord.loop = true;
}
else
{
    magicWord.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
magicWord.play();
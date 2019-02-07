var current_page = 1;
var records_per_page = 1;


var objJson = [
    { name: "Reckless Driving",date:"January 17, 2019",story:"Few day's ago, I was at home, and it was freezing outside. I woke up late this morning about 10 A.M. but there was no sign of sun. After completing my morning chores I went out to the gate of my house to get a look at the front road and then suddenly, my eyes got stuck on something. I went close to it to get a closer look, then I saw a little dog was lying there he was wounded from the leg and he was so weak that he couldn't able to walk a small distance, and then I figured out he came inside the house to get sun bath and feel warm. I thought he must be thirsty so I took some water in the bowl and put it to him, he looked at me innocently but didn't drink the water I thought he isn't drinking water he must be Hungry and again I went in the kitchen and brought something to eat but again he smelled it but didn't eat it. I thought he just needs rest and sun so I left the food and water close to him so that he can eat it when he wants to. I went back inside the home to complete my remaining work of the day. In the evening I came out of the home, but the dog was already gone somewhere. A few days later I saw the dog resting on the road side and trying to avoid the freezing air.I saw my cousin and friends who were standing close to the dog I went there and started chattering about the wounded dog. My cousin told us that the dog was crossing the road when some kid recklessly driving motorcycle came and mounted the motorcycle over the dog. The dog was badly hurt, but somehow, he survived. On the same night I was already in my bed preparing to get sweet dreams, but suddenly my ears caught some noise coming from outside my window I heard some dog was crying outside.I went outside the house to check what's going on and then I saw the same dog lying in a corner and shivering. I don't know the boy with motorcycle felt or not, but I was feeling so guilty and bad for the dog, but what else could I do.I put some sheet and sack on him so that he could feel some warm in that cold night. I came back to my room, but his pain and sorrow didn't stopped I couldn't sleep all night and kept thinking about the cruelty of the human being."},
    { name: "Signal Beggars",date:"January 25, 2019",story:"It was a cold day in Delhi, when me and my friend decided to go to visit Red Fort. I was so excited to watch the monument because I have never been there before and I love to watch old monument's and the fort's. It was 11:00 A.M. in the morning when we took an auto from our place to go to the nearest metro station. We were on the way when our ride stopped at the cross street to pass red light, while we were waiting a woman came selling earbuds packets. She was also carrying a child in her arm's and she was not alone, there were children's and old age women who were also selling something to other people in the vehicle. watching the woman was difficult and lead me to think that what kind of world is this where some people get all the happiness in the world and there are these kids whose mother have to beg or sell on the roads to feed them. This made me think where is the government who claims to give education to children till the age of 14.Till this day i thought Casteism is the biggest problem in India, but this is more severe than that. I haven't seen a single city, railway station and bus stand where you will not find a beggar. This is said that in the big Cities there are Gangs and begging mafias that control all of this. Government and politicians avoid them like they don't even exist. Whenever a politician passes through a road in Delhi, Delhi Police is ordered to remove them from the road's. They live on the road sides from where they could be thrown away anytime. They can not travel by public transport. Police behave with them like they are some criminals. There is a child helpline in India, where we are supposed to call when we see some children begging. But what they do is only filed a complaint and it's over. Why can't our government give them food or shelter? Isn't education and food is more important than paving roads? Whenever we see a beggar we want him vanished as soon as possible. We don't think that how we could make the problem of bagging vanished we only think of beggar removed. The politicians say we have bigger problems to solve, but I say do we? What could be more important than food, and education? What could be more important than people dying out of hunger? I believe instead of ignoring these problems we should discuss these in homes and public places so that people and students who are going to be our leader could know that what problems we have to solve."}
];

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var story = document.getElementById("story");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    story.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
        story.innerHTML += "<h4>" + objJson[i].name + "</h4><br><p style=\"font-size:0.87055rem;font-family: 'Times New Roman' \" id='date'>"+ objJson[i].date + "</p><p style=\"text-align: justify;\" id='story-1'>" +objJson[i].story+ "</p>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};
// dialogue 
var dialogue = [
    // Landfill //
    //0
    "Landfill is a collection of garbage, which cannot be recycled. Click each item to learn why they belong in landfill.",
    //1 
    "Plastic utensils are too small to be sorted properly at the recycling facility. But they can still go into plastic bin and may be washed for reuse.",
    //2
    "Straws are not recyclable because its fibers are too weak to be turned into usable paper.",
    //3
    "Chip bags are made of plastic/paper that has been laminated together, which is why chips bags belong in the landfill.",
    //4
    "See-through garbage bags are too thin to be recycled because they will get caught in the machine.",
    //5
    "Styrofoam egg cartons are made of plastic, therefore it cannot be recycled. <br> However, there are ways to reuse them.",
    // Glass //
    //6
    "Glass is 100% recyclable and reusable, which can turn into useful products such as mirrors, light bulbs, and more.",
    //7
    "Glass jars such as jam, peanut butter, and unused jars can be recycled. <br> Make sure to rinse them beforehand.",
    //8
    "Ketchup bottle made of glass can go into the glass bin. Check whether it is glass or plastic before recycling.",
    //9
    "Broken glass cup should be carefully handled in a garbage bag and never use hands to pick up!",
    //10
    "Glass milk bottle is one of them. Try not to get confused with jugs and cartons.",
    //11
    "Not only beverage bottles can be recycled, but they also can be refunded at the recycling station.",
    // Organic //
    //12 
    "Compost, also known as organic, are usually food scrapes and other residues that break down into the crumble.",
    //13
    "Eggshells are considered compost items. <br> They can also be used in different ways. Find out what you can do with them.",
    //14
    "One of our everyday food - bananas. <br> You know where to throw the peel. Watch out for the slip!",
    //15
    "Have apple cores to take care of? Toss them into the compost bin. Apples are a good source of nitrogen, which helps compost break down faster.",
    //16
    "Teabags including strings and paper tags can be composted. Remember to remove any staples attached to teabags.",
    //17 
    "Have mountains of leaves to clean up in the yard? They belong in the compost bin. Put the leaves in a paper yard waste bag and avoid mixing with branches.",
    // Plastic //
    //18
    "Plastic, also known as mixed containers, gets turned into useful products at the recycling stations.",
    //19
    "Empty and rinse the bottle before recycling to prevent contamination. <br> It is okay to keep the caps/lids.",
    //20
    "Aluminum cans belong to plastic. <br> Rinse out before recycling and there is no need to crush.",
    //21
    "Plastic containers such as take-out package can be recycled if there is a recycle symbol. Otherwise, put them in the landfill/garbage bin.",
    //22
    "Rinse milk jugs before recycling to prevent the mold from growing overtime. Crushing jugs saves space but it is optional.",
    //23
    "Tetra-Pak cartons and juice boxes are recyclable and even refundable for the deposit.",
    // Paper //
    //24
    "Paper recycling usually consists of unwanted and crumbled papers.",
    //25
    "Newspapers are common items to be put away. However, consider using it for packaging instead of bubble wrap as it is more eco-friendly.",
    //26
    "Cereal boxes belong in the paper bin. However, inner packaging inside the box should go into the landfill.",
    //27 
    "Have too many books to keep? <br> Yes, it belongs in the paper bin but consider donating to library before tossing them in the bin.",
    //28 
    "When the shopping bag gets worn out or no longer to be re-used, recycle them.",
    //29
    "You do a big favor for city workers if you flatten the cardboard boxes before recycling."
]

var title = document.getElementById("title");
var here = document.getElementById("here");

// icons //
var trash = document.getElementById("trash"),
    glass = document.getElementById("glass"),
    organic = document.getElementById("organic"),
    plastic = document.getElementById("plastic"),
    paper = document.getElementById("paper");

var textbox = document.getElementById("textbox"),
    question = document.getElementById("question"),
    thinking = document.getElementById("thinking");

// Display items //
var dispLandfill = document.getElementById("dispLandfill"),
    dispGlass = document.getElementById("dispGlass"),
    dispOrganic = document.getElementById("dispOrganic"),
    disPlastic = document.getElementById("disPlastic"),
    disPaper = document.getElementById("disPaper");

// Landfill //
var utensil = document.getElementById("utensil"),
    straw = document.getElementById("straw"),
    chip_bag = document.getElementById("chip_bag"),
    g_bag = document.getElementById("g_bag"),
    egg_carton = document.getElementById("egg_container");

// Glass // 
var jamjar = document.getElementById("jamjar"),
    ketchup = document.getElementById("ketchup"),
    g_cup = document.getElementById("glasscup"),
    m_bottle = document.getElementById("m_bottle"),
    pop = document.getElementById("pop");

// Organic //
var egg_shell = document.getElementById("egg_shell"),
    apple = document.getElementById("apple"),
    banana = document.getElementById("banana"),
    teabag = document.getElementById("teabag"),
    leaves = document.getElementById("leaves");

// Plastic //
var jug = document.getElementById("jug"),
    container = document.getElementById("container"),
    tetrapak = document.getElementById("tetrapak"),
    p_bottle = document.getElementById("p_bottle"),
    can = document.getElementById("can");

// Paper //
var newspaper = document.getElementById("newspaper"),
    book = document.getElementById("book"),
    cereal = document.getElementById("cereal"),
    s_bag = document.getElementById("s_bag"),
    box = document.getElementById("box");

// When the user clicks each icon, it will change the title, dialogue box, items, thinking bubble and color of icon

// Landfill icon
setTimeout(sampleTrash,3000);

function sampleTrash(){
    console.log("hello");
    trash.addEventListener("click",function(){
    textbox.innerHTML = dialogue[0];
    this.children[0].style.color = "#66c144";
    glass.children[0].style.color = "#ffffff";
    organic.children[0].style.color = "#ffffff";
    plastic.children[0].style.color = "#ffffff";
    paper.children[0].style.color = "#ffffff";
    title.style.visibility = "visible";
    title.innerHTML = "Landfill";
    question.style.display = "block";
    question.innerHTML = "What goes into the Landfill?";
    thinking.style.display = "none";
    dispLandfill.style.display = "block";
    dispGlass.style.display = "none";
    dispOrganic.style.display = "none";
    disPlastic.style.display = "none";
    disPaper.style.display = "none";
        
    var elems = document.querySelectorAll(".brightness");
  for (var i = elems.length; i--;) {
    elems[i].style.filter = "brightness(100%)";
  }    
    });
}

utensil.addEventListener("click",function(){
    
    textbox.innerHTML = dialogue[1];

    utensil.style.filter = "brightness(100%)";
    straw.style.filter = "brightness(45%)";
    chip_bag.style.filter = "brightness(45%)";
    g_bag.style.filter = "brightness(45%)";
    egg_carton.style.filter = "brightness(45%)";

});

straw.addEventListener("click",function(){
    textbox.innerHTML = dialogue[2];
    utensil.style.filter = "brightness(45%)";
    straw.style.filter = "brightness(100%)";
    chip_bag.style.filter = "brightness(45%)";
    g_bag.style.filter = "brightness(45%)";
    egg_carton.style.filter = "brightness(45%)";
});

chip_bag.addEventListener("click",function(){
    textbox.innerHTML = dialogue[3];
    utensil.style.filter = "brightness(45%)";
    straw.style.filter = "brightness(45%)";
    chip_bag.style.filter = "brightness(100%)";
    g_bag.style.filter = "brightness(45%)";
    egg_carton.style.filter = "brightness(45%)";
});

g_bag.addEventListener("click",function(){
    textbox.innerHTML = dialogue[4];
    utensil.style.filter = "brightness(45%)";
    straw.style.filter = "brightness(45%)";
    chip_bag.style.filter = "brightness(45%)";
    g_bag.style.filter = "brightness(100%)";
    egg_carton.style.filter = "brightness(45%)";
});

egg_carton.addEventListener("click",function(){
    textbox.innerHTML = dialogue[5];
    utensil.style.filter = "brightness(45%)";
    straw.style.filter = "brightness(45%)";
    chip_bag.style.filter = "brightness(45%)";
    g_bag.style.filter = "brightness(45%)";
    egg_carton.style.filter = "brightness(100%)";
});

// Glass icon 

setTimeout(sampleGlass, 3000);

function sampleGlass() {
    console.log("hello");
    glass.addEventListener("click",function(){
    textbox.innerHTML = dialogue[6];
    this.children[0].style.color = "#66c144";
    trash.children[0].style.color = "#ffffff";
    organic.children[0].style.color = "#ffffff";
    plastic.children[0].style.color = "#ffffff";
    paper.children[0].style.color = "#ffffff";
    title.style.visibility = "visible";
    title.innerHTML = "Glass";
    question.style.display = "block";
    question.innerHTML = "What goes into the glass?";
    thinking.style.display = "none";
    dispLandfill.style.display = "none";
    dispGlass.style.display = "block";
    dispOrganic.style.display = "none";
    disPlastic.style.display = "none";
    disPaper.style.display = "none";
        
    var elems = document.querySelectorAll(".brightness");
  for (var i = elems.length; i--;) {
    elems[i].style.filter = "brightness(100%)";
  }       
    });
}


jamjar.addEventListener("click",function(){
    textbox.innerHTML = dialogue[7];
    jamjar.style.filter = "brightness(100%)";
    ketchup.style.filter = "brightness(45%)";
    g_cup.style.filter = "brightness(45%)";
    m_bottle.style.filter = "brightness(45%)";
    pop.style.filter = "brightness(45%)";
});

ketchup.addEventListener("click",function(){
    textbox.innerHTML = dialogue[8];
    jamjar.style.filter = "brightness(45%)";
    ketchup.style.filter = "brightness(100%)";
    g_cup.style.filter = "brightness(45%)";
    m_bottle.style.filter = "brightness(45%)";
    pop.style.filter = "brightness(45%)";
});

g_cup.addEventListener("click",function(){
    textbox.innerHTML = dialogue[9];
    jamjar.style.filter = "brightness(45%)";
    ketchup.style.filter = "brightness(45%)";
    g_cup.style.filter = "brightness(100%)";
    m_bottle.style.filter = "brightness(45%)";
    pop.style.filter = "brightness(45%)";
});

m_bottle.addEventListener("click",function(){
    textbox.innerHTML = dialogue[10];
    jamjar.style.filter = "brightness(45%)";
    ketchup.style.filter = "brightness(45%)";
    g_cup.style.filter = "brightness(45%)";
    m_bottle.style.filter = "brightness(100%)";
    pop.style.filter = "brightness(45%)";
});

pop.addEventListener("click",function(){
    textbox.innerHTML = dialogue[11];
    jamjar.style.filter = "brightness(45%)";
    ketchup.style.filter = "brightness(45%)";
    g_cup.style.filter = "brightness(45%)";
    m_bottle.style.filter = "brightness(45%)";
    pop.style.filter = "brightness(100%)";
});

// Organic icon
setTimeout(sampleOrganic, 3000);

function sampleOrganic(){
    organic.addEventListener("click",function(){
    textbox.innerHTML = dialogue[12];
    this.children[0].style.color = "#66c144";
    trash.children[0].style.color = "#ffffff";
    glass.children[0].style.color = "#ffffff";
    plastic.children[0].style.color = "#ffffff";
    paper.children[0].style.color = "#ffffff";
    title.style.visibility = "visible";
    title.innerHTML = "compost";
    question.style.display = "block";
    question.innerHTML = "What goes into the compost?";
    thinking.style.display = "none";
    dispLandfill.style.display = "none";
    dispGlass.style.display = "none";
    dispOrganic.style.display = "block";
    disPlastic.style.display = "none";
    disPaper.style.display = "none";
        
    var elems = document.querySelectorAll(".brightness");
  for (var i = elems.length; i--;) {
    elems[i].style.filter = "brightness(100%)";
  }       
});
}


egg_shell.addEventListener("click",function(){
    textbox.innerHTML = dialogue[13];
    egg_shell.style.filter = "brightness(100%)";
    banana.style.filter = "brightness(45%)";
    apple.style.filter = "brightness(45%)";
    teabag.style.filter = "brightness(45%)";
    leaves.style.filter = "brightness(45%)";
});

banana.addEventListener("click",function(){
    textbox.innerHTML = dialogue[14];
    egg_shell.style.filter = "brightness(45%)";
    banana.style.filter = "brightness(100%)";
    apple.style.filter = "brightness(45%)";
    teabag.style.filter = "brightness(45%)";
    leaves.style.filter = "brightness(45%)";
});

apple.addEventListener("click",function(){
    textbox.innerHTML = dialogue[15];
    egg_shell.style.filter = "brightness(45%)";
    banana.style.filter = "brightness(45%)";
    apple.style.filter = "brightness(100%)";
    teabag.style.filter = "brightness(45%)";
    leaves.style.filter = "brightness(45%)";

});

teabag.addEventListener("click",function(){
    textbox.innerHTML = dialogue[16];
    egg_shell.style.filter = "brightness(45%)";
    banana.style.filter = "brightness(45%)";
    apple.style.filter = "brightness(45%)";
    teabag.style.filter = "brightness(100%)";
    leaves.style.filter = "brightness(45%)";
});

leaves.addEventListener("click",function(){
    textbox.innerHTML = dialogue[17];
    egg_shell.style.filter = "brightness(45%)";
    banana.style.filter = "brightness(45%)";
    apple.style.filter = "brightness(45%)";
    teabag.style.filter = "brightness(45%)";
    leaves.style.filter = "brightness(100%)";
    
});
// Plastic icon 
setTimeout(SamplePlastic,3000);

function SamplePlastic(){
plastic.addEventListener("click",function(){
    textbox.innerHTML = dialogue[18];
    this.children[0].style.color = "#66c144";
    trash.children[0].style.color = "#ffffff";
    glass.children[0].style.color = "#ffffff";
    organic.children[0].style.color = "#ffffff";
    paper.children[0].style.color = "#ffffff";
    title.style.visibility = "visible";
    title.innerHTML = "plastic";
    question.style.display = "block";
    question.innerHTML = "What goes into the plastic?";
    thinking.style.display = "none";
    dispLandfill.style.display = "none";
    dispGlass.style.display = "none";
    dispOrganic.style.display = "none";
    disPlastic.style.display = "block";
    disPaper.style.display = "none";
    
    var elems = document.querySelectorAll(".brightness");
  for (var i = elems.length; i--;) {
    elems[i].style.filter = "brightness(100%)";
  }   
});
}

p_bottle.addEventListener("click",function(){
    textbox.innerHTML = dialogue[19];
    p_bottle.style.filter = "brightness(100%)";
    can.style.filter = "brightness(45%)";
    container.style.filter = "brightness(45%)";
    jug.style.filter = "brightness(45%)";
    tetrapak.style.filter = "brightness(45%)";
});

can.addEventListener("click",function(){
    textbox.innerHTML = dialogue[20];
    p_bottle.style.filter = "brightness(45%)";
    can.style.filter = "brightness(100%)";
    container.style.filter = "brightness(45%)";
    jug.style.filter = "brightness(45%)";
    tetrapak.style.filter = "brightness(45%)";
});

container.addEventListener("click",function(){
   textbox.innerHTML = dialogue[21];
    p_bottle.style.filter = "brightness(45%)";
    can.style.filter = "brightness(45%)";
    container.style.filter = "brightness(100%)";
    jug.style.filter = "brightness(45%)";
    tetrapak.style.filter = "brightness(45%)";
});

jug.addEventListener("click",function(){
    textbox.innerHTML = dialogue[22];
    p_bottle.style.filter = "brightness(45%)";
    can.style.filter = "brightness(45%)";
    container.style.filter = "brightness(45%)";
    jug.style.filter = "brightness(100%)";
    tetrapak.style.filter = "brightness(45%)";
});

tetrapak.addEventListener("click",function(){
   textbox.innerHTML = dialogue[23];
    p_bottle.style.filter = "brightness(45%)";
    can.style.filter = "brightness(45%)";
    container.style.filter = "brightness(45%)";
    jug.style.filter = "brightness(45%)";
    tetrapak.style.filter = "brightness(100%)";
});

// Paper icon 
setTimeout(SamplePaper,3000);

function SamplePaper(){
paper.addEventListener("click",function(){
    textbox.innerHTML = dialogue[24];
    this.children[0].style.color = "#66c144";
    trash.children[0].style.color = "#ffffff";
    glass.children[0].style.color = "#ffffff";
    organic.children[0].style.color = "#ffffff";
    plastic.children[0].style.color = "#ffffff";
    title.style.visibility = "visible";
    title.innerHTML = "paper";
    question.style.display = "block";
    question.innerHTML = "What goes into the paper?";
    thinking.style.display = "none";
    dispLandfill.style.display = "none";
    dispGlass.style.display = "none";
    dispOrganic.style.display = "none";
    disPlastic.style.display = "none";
    disPaper.style.display = "block";
    
    var elems = document.querySelectorAll(".brightness");
  for (var i = elems.length; i--;) {
    elems[i].style.filter = "brightness(100%)";
  }   
});
}
newspaper.addEventListener("click",function(){
    textbox.innerHTML = dialogue[25];
    newspaper.style.filter = "brightness(100%)";
    cereal.style.filter = "brightness(45%)";
    book.style.filter = "brightness(45%)";
    s_bag.style.filter = "brightness(45%)";
    box.style.filter = "brightness(45%)";
});

cereal.addEventListener("click",function(){
    textbox.innerHTML = dialogue[26];
    newspaper.style.filter = "brightness(45%)";
    cereal.style.filter = "brightness(100%)";
    book.style.filter = "brightness(45%)";
    s_bag.style.filter = "brightness(45%)";
    box.style.filter = "brightness(45%)";
});

book.addEventListener("click",function(){
    textbox.innerHTML = dialogue[27];
    newspaper.style.filter = "brightness(45%)";
    cereal.style.filter = "brightness(45%)";
    book.style.filter = "brightness(100%)";
    s_bag.style.filter = "brightness(45%)";
    box.style.filter = "brightness(45%)";
})

s_bag.addEventListener("click",function(){
    textbox.innerHTML = dialogue[28];
    newspaper.style.filter = "brightness(45%)";
    cereal.style.filter = "brightness(45%)";
    book.style.filter = "brightness(45%)";
    s_bag.style.filter = "brightness(100%)";
    box.style.filter = "brightness(45%)";
});

box.addEventListener("click",function(){
    textbox.innerHTML = dialogue[29];
    newspaper.style.filter = "brightness(45%)";
    cereal.style.filter = "brightness(45%)";
    book.style.filter = "brightness(45%)";
    s_bag.style.filter = "brightness(45%)";
    box.style.filter = "brightness(100%)";
});
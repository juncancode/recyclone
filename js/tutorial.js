// dialogue 
var dialogue = [
    // Landfill //
    //1
    "Landfill is a collection of garbage, which cannot be recycled. Click each item to learn why they belong in landfill.",
    //2 & 3
    "Plastic utensils are too small to be sorted properly at the recycling facility.",
    "But they can still go into plastic bin and may be washed for reuse.",
    //4 & 5
    "Straws are not recyclable because its fibers are too weak to be turned into usable paper.",
    "If you want to be creative with straws, check out <a target='_blank' href='http://www.architectureartdesigns.com/15-ideas-of-how-to-recycle-plastic-straws'>here</a> to see things you can make with straws.",
    //5 & 6
    "Chip bags are made of plastic/foil/paper that has been laminated together.",
    "Layers cannot be separated which is why chips bags belong in the landfill.",
    //7
    "See-through garbage bags are too thin to be recycled. They will get caught in the machine.",
    //8 & 9
    "Stryfoam egg cartons are made of plastic, therefore it cannot be recycled.",
    "However, there are ways to reuse them. Click <a target='_blank' href='http://www.foxnews.com/real-estate/2012/01/15/10-uses-for-egg-cartons.html'>here</a> to find out.",
    // Glass //
    //10 
    "Glass is 100% recyclable and reusable, which can turn into useful products such as mirrors, light bulbs, and more.",
    //11 
    "Glass jars such as jam, peanut butter, and unused jars can be recycled. Make sure to rinse them beforehand.",
    //12
    "Ketchup bottle made of glass can go into the glass bin. Check whether it is glass or plastic before recycling.",
    //13 
    "Broken glasscup should be carefully handled in a garbage bag and never use hands to pick up!",
    //14 
    "Glass milk bottle is one of them. Try not to get confused with jugs and cartons.",
    //15
    "Not only beverage bottles can be recycled, but they also can be refunded at recycling station.",
    // Organic //
    //16 
    "Compost, also known as organic, are usually food scrapes and other residues that break down into crumble.",
    //17
    "Egg shells are considered compost items. They can also be used in different ways. Find out what you can do with them <a target='_blank' href='https://www.rd.com/home/cleaning-organizing/9-unusual-uses-for-eggshells/'>here</a>",
    //18
    "One of our everyday food, Bananas, You know where to throw the peel. Watch out for slip!",
    //19 & 20
    "Have apple cores and peelings to take care of? Toss them into compost bin.",
    "Apples are a good source of nitrogen, which helps compost break down faster.",
    //21
    "Teabags including strings and paper tags can be composted. Remember to remove any staples attached to teabags.",
    //22 & 23 
    "Have mountains of leaves to clean up in the yard? They belong in the compost bin.",
    "Put the leaves in a paper yard waste bag and avoid mixing with branches.",
    // Plastic //
    //24
    "Plastic, also known as mixed containers, gets turned into useful products at the recycling stations. Check out the process <a target='_blank' href='http://www.onestoprecycleshop.ca/plastic-bottles-recycled/'>here</a>",
    //25
    "Empty and rinse the bottle before recycling to prevent contamination. It is okay to keep the caps/lids.",
    //26 & 27
    "Aluminum and soda cans belong to plastic. Rinse out before recycling and there is no need to crush.",
    "Did you know it takes about 60 days for cans to make it back to the store shevles after they get recycled?",
    //28 
    "Plastic containers such as take-out package can be recycled if there is a recycle symbol. Otherwise, put them in the landfill/garbage bin.",
    //29 
    "Rinse milk jugs before recycling to prevent the mold from growing overtime. Crushing jugs saves space but it is optional.",
    //30
    "Tetra-pak cartons and juice boxes are recyclable and even refundable for the deposit.",
    // Paper //
    //31
    "Paper recycling usually consists of unwanted and crumbled papers.",
    //32
    "Newspapers are common items to be put away. However, consider using it for packaging instead of bubble wrap as it is more eco-friendly.",
    //33
    "Cereal boxes belong in the paper bin. However, inner packaging inside the box should go into the landfill.",
    //34 
    "Have too many books to keep? Yes it belongs in the paper bin but consider donating to a charity or library before tossing them in the bin",
    //35 
    "When the shopping bag gets worn out or not longer to be re-used, recycle them.",
    //36
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
});

utensil.addEventListener("click",function(){
    
    textbox.innerHTML = dialogue[1];
    
    var button = document.createElement("div");
    button.id = "next";
    here.appendChild(button);
    
    button.addEventListener("click",function(){
       textbox.innerHTML = dialogue[2];
       $("#next").remove();
    });
});

straw.addEventListener("click",function(){
    textbox.innerHTML = dialogue[3];
    
    var button = document.createElement("div");
    button.id = "next";
    here.appendChild(button);
    
    button.addEventListener("click",function(){
       textbox.innerHTML = dialogue[4];
       $("#next").remove();
    });
});

chip_bag.addEventListener("click",function(){
    textbox.innerHTML = dialogue[5];
    
    var button = document.createElement("div");
    button.id = "next";
    here.appendChild(button);
    
    button.addEventListener("click",function(){
       textbox.innerHTML = dialogue[6];
       $("#next").remove(); 
    });
});

g_bag.addEventListener("click",function(){
    textbox.innerHTML = dialogue[7];
    
});

egg_carton.addEventListener("click",function(){
    textbox.innerHTML = dialogue[8];
    
    var button = document.createElement("div");
    button.id = "next";
    here.appendChild(button);
    
    button.addEventListener("click",function(){
       textbox.innerHTML = dialogue[9];
       $("#next").remove(); 
    });
});

// Glass icon 
glass.addEventListener("click",function(){
    textbox.innerHTML = dialogue[10];
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
});

jamjar.addEventListener("click",function(){
   textbox.innerHTML = dialogue[11]; 
});

ketchup.addEventListener("click",function(){
    textbox.innerHTML = dialogue[12]; 
});

g_cup.addEventListener("click",function(){
    textbox.innerHTML = dialogue[13]; 
});

m_bottle.addEventListener("click",function(){
    textbox.innerHTML = dialogue[14];
});

pop.addEventListener("click",function(){
    textbox.innerHTML = dialogue[15];
});

// Organic icon
organic.addEventListener("click",function(){
    textbox.innerHTML = dialogue[16];
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
});

egg_shell.addEventListener("click",function(){
    textbox.innerHTML = dialogue[17];
});

banana.addEventListener("click",function(){
   textbox.innerHTML = dialogue[18]; 
});

apple.addEventListener("click",function(){
    textbox.innerHTML = dialogue[19];
    
    var button = document.createElement("div");
    button.id = "next";
    here.appendChild(button);
    
    button.addEventListener("click",function(){
       textbox.innerHTML = dialogue[20];
       $("#next").remove(); 
    });
});

teabag.addEventListener("click",function(){
    textbox.innerHTML = dialogue[21];
});

leaves.addEventListener("click",function(){
    textbox.innerHTML = dialogue[22];
    
    var button = document.createElement("div");
    button.id = "next";
    here.appendChild(button);
    
    button.addEventListener("click",function(){
    textbox.innerHTML = dialogue[23];
    $("#next").remove(); 
    });
    
});
// Plastic icon 
plastic.addEventListener("click",function(){
    textbox.innerHTML = dialogue[24];
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
});

p_bottle.addEventListener("click",function(){
    textbox.innerHTML = dialogue[25];
});

can.addEventListener("click",function(){
    textbox.innerHTML = dialogue[26];
    
    var button = document.createElement("div");
    button.id = "next";
    here.appendChild(button);
    
    button.addEventListener("click",function(){
       textbox.innerHTML = dialogue[27];
       $("#next").remove(); 
    });
});

container.addEventListener("click",function(){
   textbox.innerHTML = dialogue[28];
});

jug.addEventListener("click",function(){
   textbox.innerHTML = dialogue[29]; 
});

tetrapak.addEventListener("click",function(){
   textbox.innerHTML = dialogue[30]; 
});

// Paper icon 
paper.addEventListener("click",function(){
    textbox.innerHTML = dialogue[31];
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
});

newspaper.addEventListener("click",function(){
   textbox.innerHTML = dialogue[32]; 
});

cereal.addEventListener("click",function(){
   textbox.innerHTML = dialogue[33]; 
});

book.addEventListener("click",function(){
   textbox.innerHTML = dialogue[34];
})

s_bag.addEventListener("click",function(){
   textbox.innerHTML = dialogue[35]; 
});

box.addEventListener("click",function(){
   textbox.innerHTML = dialogue[36]; 
});
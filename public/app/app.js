var userExists = false;
var userFullName = "";

    $("#logSubmit").click(function (e) {
        e.preventDefault();
        let email = $("#logEmail").val();
        let password = $("#logPassword").val();
        console.log("inputs " + email + " " + password);
    });

    $("#createSubmit").click(function (e) {
        e.preventDefault();
        let recipeImg = $("#recipeImg").val();
        let recipeName = $("#recipeName").val();
        let recipeDes = $("#recipeDes").val();
        let recipeTT = $("#recipeTT").val();
        let recipeSS = $("#recipeSS").val();
        let ingredientOne = $("#ingredientOne").val();
        let ingredientTwo = $("#ingredientTwo").val();
        let ingredientThree = $("#ingredientThree").val();
        let instructionOne = $("#instructionOne").val();
        let instructionTwo = $("#instructionTwo").val();
        let instructionThree = $("#instructionThree").val();
        console.log("inputs " + recipeImg + " " + recipeName + " " + recipeDes + " " + recipeTT + " " + recipeSS + " " + ingredientOne + " " + ingredientTwo + " " + ingredientThree + " " + instructionOne + " " + instructionTwo + " " + instructionThree);
    });  
    
    $("#editSubmit").click(function (e) {
        e.preventDefault();
        let recipeImg = $("#recipeImg").val();
        let recipeName = $("#recipeName").val();
        let recipeDes = $("#recipeDes").val();
        let recipeTT = $("#recipeTT").val();
        let recipeSS = $("#recipeSS").val();
        let ingredientOne = $("#ingredientOne").val();
        let ingredientTwo = $("#ingredientTwo").val();
        let ingredientThree = $("#ingredientThree").val();
        let instructionOne = $("#instructionOne").val();
        let instructionTwo = $("#instructionTwo").val();
        let instructionThree = $("#instructionThree").val();
        console.log("inputs " + recipeImg + " " + recipeName + " " + recipeDes + " " + recipeTT + " " + recipeSS + " " + ingredientOne + " " + ingredientTwo + " " + ingredientThree + " " + instructionOne + " " + instructionTwo + " " + instructionThree);
    }); 
    
    
    $("#editButton").click(function (e) {
        e.preventDefault();

        let userObj = {
            recipeImg: "Picture of Brown Sugar Cookies",
            recipeName: "Brown Sugar Cookies",
            recipeDes: "30 minute warm Brown Sugar Cookies",
            recipeTT: "30 minutes",
            recipeSS: "12 cookies",
            ingredientOne: "butter",
            ingredientTwo: "flour",
            ingredientThree: "brown sugar",
            instructionOne: "Measure ingredients.",
            instructionTwo: "Beat together butter and brown sugar.",
            instructionThree: "Mix in flour."
        };
        console.log(userObj);
        $("#recipeImg").val(userObj.recipeImg);
        $("#recipeName").val(userObj.recipeName);
        $("#recipeDes").val(userObj.recipeDes);
        $("#recipeTT").val(userObj.recipeTT);
        $("#recipeSS").val(userObj.recipeSS);
        $("#ingredientOne").val(userObj.ingredientOne);
        $("#ingredientTwo").val(userObj.ingredientTwo);
        $("#ingredientThree").val(userObj.ingredientThree);
        $("#instructionOne").val(userObj.instructionOne);
        $("#instructionTwo").val(userObj.instructionTwo);
        $("#instructionThree").val(userObj.instructionThree);


    });




var LISTS = [
    {
    name: "Candy",
    listItems:[
        {
            name: "Oreos",
            checked: false
        },
        {
            name: "Sour Patch Kids",
            checked: false
        },
        {
            name: "KitKat",
            checked: false
        },
        {
            name: "Snickers",
            checked: false
        },
        {
            name: "Twix",
            checked: false
        },
        {
            name: "Twizlers",
            checked: false
        },
        {
            name: "Hersheys",
            checked: false
        },
        {
            name: "Milk Duds",
            checked: false
        },
        {
            name: "Mike n Ikes",
            checked: false
        },
        {
            name: "Milkyway",
            checked: false
        }

        ],
    },

    {
    name: "Groceries",
    listItems:[
        {
            name: "milk",
            checked: false 
        },
        {
            name: "cheese",
            checked: false 
        },
        {
            name: "almonds",
            checked: false 
        },
        {
            name: "oranges",
            checked: false 
        },
        {
            name: "potatoes",
            checked: false 
        },
        {
            name: "cereal",
            checked: false 
        },
        {
            name: "tomatoes",
            checked: false 
        },
        {
            name: "chocolate",
            checked: false 
        },
        {
            name: "vitamins",
            checked: false 
        }, 
        {
            name: "yogurt",
            checked: false 
        },
        
    ],
    },

     {
    name: "Cookie Types",
    listItems:[
        {
            name: "chocolate chip",
            checked: false 
        },
        {
            name: "oatmeal raisin",
            checked: false 
        },
        {
            name: "gingerbread",
            checked: false 
        },
        {
            name: "sugar",
            checked: false 
        },
        {
            name: "no-bake",
            checked: false 
        },
        {
            name: "peanut butter",
            checked: false 
        },
        {
            name: "snickerdoodle",
            checked: false 
        },
        {
            name: "shortbread",
            checked: false 
        },
        {
            name: "double chocolate chip",
            checked: false 
        }, 
        {
            name: "fortune",
            checked: false 
        },
        
    ]
    },

     {
    name: "Snacks",
    listItems:[
        {
            name: "celery and peanut butter",
            checked: false 
        },
        {
            name: "apple and peanut butter",
            checked: false 
        },
        {
            name: "yogurt and granola",
            checked: false 
        },
        {
            name: "smoothie",
            checked: false 
        },
        {
            name: "crackers and hummus",
            checked: false 
        },
        {
            name: "chips and salsa",
            checked: false 
        },
        {
            name: "chips",
            checked: false 
        },
        {
            name: "trail mix",
            checked: false 
        },
        {
            name: "snack bar",
            checked: false 
        }, 
        {
            name: "popcorn",
            checked: false 
        },
        
    ],
    },

     {
    name: "Camping",
    listItems:[
        {
            name: "tent",
            checked: false 
        },
        {
            name: "food",
            checked: false 
        },
        {
            name: "firewood",
            checked: false 
        },
        {
            name: "lantern",
            checked: false 
        },
        {
            name: "camper",
            checked: false 
        },
        {
            name: "cooler",
            checked: false 
        },
        {
            name: "cooking materials",
            checked: false 
        },
        {
            name: "radio",
            checked: false 
        },
        {
            name: "mugs",
            checked: false 
        }, 
        {
            name: "chairs",
            checked: false 
        },
        
    ],
    },

     {
    name: "Thanksgiving",
    listItems:[
        {
            name: "green bean casserole",
            checked: false 
        },
        {
            name: "turkey",
            checked: false 
        },
        {
            name: "mashed potatoes",
            checked: false 
        },
        {
            name: "gravy",
            checked: false 
        },
        {
            name: "cranberry sauce",
            checked: false 
        },
        {
            name: "bread rolls",
            checked: false 
        },
        {
            name: "stuffing",
            checked: false 
        },
        {
            name: "pumpkin pie",
            checked: false 
        },
        {
            name: "pecan pie",
            checked: false 
        }, 
        {
            name: "vegetables",
            checked: false 
        },
        
    ],
    },

     {
    name: "Fruits",
    listItems:[
        {
            name: "strawberry",
            checked: false 
        },
        {
            name: "blueberry",
            checked: false 
        },
        {
            name: "orange",
            checked: false 
        },
        {
            name: "raspberry",
            checked: false 
        },
        {
            name: "kiwi",
            checked: false 
        },
        {
            name: "banana",
            checked: false 
        },
        {
            name: "pomegranate",
            checked: false 
        },
        {
            name: "grape",
            checked: false 
        },
        {
            name: "apple",
            checked: false 
        }, 
        {
            name: "grapefruit",
            checked: false 
        },
        
    ],
    },

     {
    name: "Christmas",
    listItems:[
        {
            name: "food",
            checked: false 
        },
        {
            name: "tree",
            checked: false 
        },
        {
            name: "presents",
            checked: false 
        },
        {
            name: "lights",
            checked: false 
        },
        {
            name: "candles",
            checked: false 
        },
        {
            name: "tableware",
            checked: false 
        },
        {
            name: "family",
            checked: false 
        },
        {
            name: "friends",
            checked: false 
        },
        {
            name: "eggnog",
            checked: false 
        }, 
        {
            name: "music",
            checked: false 
        },
        
    ],
    },

     {
    name: "Building Materials",
    listItems:[
        {
            name: "hammer",
            checked: false 
        },
        {
            name: "screwdriver",
            checked: false 
        },
        {
            name: "drill",
            checked: false 
        },
        {
            name: "nails",
            checked: false 
        },
        {
            name: "wood",
            checked: false 
        },
        {
            name: "stud finder",
            checked: false 
        },
        {
            name: "screws",
            checked: false 
        },
        {
            name: "glue",
            checked: false 
        },
        {
            name: "tape measure",
            checked: false 
        }, 
        {
            name: "level",
            checked: false 
        },
        
    ],
    },

     {
    name: "Cities",
    listItems:[
        {
            name: "Indianapolis",
            checked: false 
        },
        {
            name: "Chicago",
            checked: false 
        },
        {
            name: "New York",
            checked: false 
        },
        {
            name: "Dallas",
            checked: false 
        },
        {
            name: "Los Angeles",
            checked: false 
        },
        {
            name: "Austin",
            checked: false 
        },
        {
            name: "Miami",
            checked: false 
        },
        {
            name: "Cincinnati",
            checked: false 
        },
        {
            name: "Houston",
            checked: false 
        }, 
        {
            name: "Philadelphia",
            checked: false 
        },
        
    ],
    },
   
    
];

function itemChecked (element, listIndex, itemIndex){
    
    $(element).parent().toggleClass("strike");
    let checkedValue = !LISTS[listIndex].listItems[itemIndex].checked;
    LISTS[listIndex].listItems[itemIndex].checked = checkedValue; 
}

function addItem (listIndex){
    let newItemName = $("#addItem").val();
    let newItemObj = {
        name: newItemName,
        checked: false,
    };
    LISTS[listIndex].listItems.push(newItemObj);
    loadListItems(listIndex);
}

function deleteItem (listIndex, index){
    LISTS[listIndex].listItems.splice(index,1);
    loadListItems(listIndex); 
}

function loadListItems (listIndex){
    let listString = `<button onclick="loadLists()">Back</button> <ul>`;
    $.each(LISTS[listIndex].listItems, function (index, listItem){
        listString += `<li id="${index}" class="${listItem.checked ? "strike": ""}"><input ${listItem.checked ? (checked = "checked") : ""} type="checkbox" id="${index}" name="" onclick="itemChecked(this, ${listIndex}, ${index})">
        <span>${listItem.name}</span><button class="delete" onclick="deleteItem(${listIndex},${index})">Delete</button></li>`; 
    });
    listString += `</ul><div class="addItemInput"><input id="addItem" type="text"><button class="addButton"onclick="addItem(${listIndex})">Add Item</button></div>`;
    $("#app").html(listString); 
    
}

function loadLists (){
    let listString = "<ul>";
    $.each(LISTS, function(index, list){
    listString += `<li id="${index}" onclick="loadListItems(${index})">${list.name} <span class="right">Items: ${list.listItems.length}</span></li>`;
    });
    listString += "</ul>";
    $("#app").html(listString);
}


function initFirebase (){
    firebase.auth().onAuthStateChanged((user) => {
        if (user){
            console.log("auth change logged in");
            if(user.displayName){
                $(".name").html(user.displayName); 
            }
            $(".signOut").prop("disabled", false);
            $(".loadLists").prop("disabled", false);
            userExists = true;
        }else{
            console.log("auth change logged out");
            $(".name").html("");
            $(".signOut").attr("disabled", true);
            $(".loadLists").attr("disabled", true);
            userExists = false;
            userFullName = "";
        }
    });
}
function signOut(){
    firebase
    .auth()
    .signOut()
    .then(() => {
    // Signed in..
    console.log("signed out");
  })
  .catch((error) => {
    // Signed out...
    console.log("error signing out" + errorMessage);
  }); 
}

function logIn(){
    let email = $("#logEmail").val();
    let password = $("#logPassword").val();

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log("logged in");
    $("#logEmail").val("");
    $("#logPassword").val("");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("logged in error" + errorMessage);
  });
}

function initListeners() {
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let fullName = fName + " " + lName;
    console.log("create " + fName + " fName " + lName);
// Firebase Code
firebase
.auth()
.createUserWithEmailAndPassword(email, password)
.then((userCredential) => {
// Signed in 
var user = userCredential.user;
// ...
console.log("created");

firebase.auth()
.currentUser.updateProfile({
    displayName: fullName,
});
userFullName = fullName;
$(".name").html(userFullName);
$("#fName").val("");
$("#lName").val("");
$("#email").val("");
$("#password").val("");
})
.catch((error) => {
var errorCode = error.code;
var errorMessage = error.message;
// ..
console.log("create error " + errorMessage);
});
};

function signInAnon(){
    firebase
    .auth()
    .signInAnonymously()
    .then(() => {
    // Signed in..
    console.log("signed in");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log("error signing in " + errorMessage);
  });
}







$(document).ready(function(){
    try {
        let app = firebase.app();
        
        initFirebase();
    } catch (error){
        console.log("error " + error);
    }
    
});
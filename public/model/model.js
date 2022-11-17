var MODEL = (function(){

    var homeContent = `   <div class="home">
    <img class="homeImage" src="images/lists-home.jpg" alt="home hero">
    <div class="titleButton">
    <button class="loadLists" onclick="loadLists()">Load Lists</button>
    
    <div class="homeTitles">
        <h1 class="home-title">Welcome to Lists!</h1>
        <h2 class="home-subtitle">Click the button above once you are signed in to access your lists.</h2>
    </div>
    </div>
    </div>`;
    var createContent = `<div class="form-outside">
    <form onsubmit="initListeners();return false">
    <h1>CREATE</h1>
        <label for="recipeImg">Add Recipe Image</label>
        <input id="recipeImg" type="text" name="recipeImg">
        <label for="recipeName">Recipe Name</label>
        <input id="recipeName" type="text" name="recipeName">
        <label for="recipeDes">Recipe Description</label>
        <input id="recipeDes" type="text" name="recipeDes">
        <label for="recipeTT">Recipe Total Time</label>
        <input id="recipeTT" type="text" name="recipeTT">
        <label for="recipeSS">Recipe Serving Size</label>
        <input id="recipeSS" type="text" name="recipeSS">
        <label for="ingredientOne">Ingredient #1</label>
        <input id="ingredientOne" type="text" name="ingredientOne">
        <label for="ingredientTwo">Ingredient #2</label>
        <input id="ingredientTwo" type="text" name="ingredientTwo">
        <label for="ingredientThree">Ingredient #3</label>
        <input id="ingredientThree" type="text" name="ingredientThree">
        <label for="instructionOne">Instruction #1</label>
        <input id="instructionOne" type="text" name="instructionOne">
        <label for="instructionTwo">Instruction #2</label>
        <input id="instructionTwo" type="text" name="instructionTwo">
        <label for="instructionThree">Instruction #3</label>
        <input id="instructionThree" type="text" name="instructionThree">
        <input type="submit" name="submit" id="createSubmit">
    </form>
    </div>`;
    var editContent = `<div class="form-outside">
    <form onsubmit="initListeners();return false">
    <h1>EDIT</h1>
        <label for="recipeImg">Add Recipe Image</label>
        <input id="recipeImg" type="text" name="recipeImg">
        <label for="recipeName">Recipe Name</label>
        <input id="recipeName" type="text" name="recipeName">
        <label for="recipeDes">Recipe Description</label>
        <input id="recipeDes" type="text" name="recipeDes">
        <label for="recipeTT">Recipe Total Time</label>
        <input id="recipeTT" type="text" name="recipeTT">
        <label for="recipeSS">Recipe Serving Size</label>
        <input id="recipeSS" type="text" name="recipeSS">
        <label for="ingredientOne">Ingredient #1</label>
        <input id="ingredientOne" type="text" name="ingredientOne">
        <label for="ingredientTwo">Ingredient #2</label>
        <input id="ingredientTwo" type="text" name="ingredientTwo">
        <label for="ingredientThree">Ingredient #3</label>
        <input id="ingredientThree" type="text" name="ingredientThree">
        <label for="instructionOne">Instruction #1</label>
        <input id="instructionOne" type="text" name="instructionOne">
        <label for="instructionTwo">Instruction #2</label>
        <input id="instructionTwo" type="text" name="instructionTwo">
        <label for="instructionThree">Instruction #3</label>
        <input id="instructionThree" type="text" name="instructionThree">
        <input type="submit" name="submit" id="editSubmit">
        <button id="editButton">Edit</button>
    </form>
    </div>`;
    var logContent = `<div class="log">
    <div class="loggingIn">
        <h1>Log In!</h1>
    <form onclick="initListeners(); return false">
        <input type="email" name="email" id="logEmail" placeholder="Email Address">
        <input type="password" name="password" id="logPassword" placeholder="Password">
        <input class="signIn" onclick="logIn()" type="submit" placeholder="Log In" id=logSubmit> 
    </form>
    </div>
    <div class="title-create">
        <h1>Create Account!</h1>
        <form onclick="initListeners(); return false">
            <input type="text" name="fName" id="fName" placeholder="First Name">
            <input type="text" name="lName" id="lName" placeholder="Last Name">
            <input type="email" name="email" id="email" placeholder="Email Address">
            <input type="password" name="password" id="password" placeholder="Password">
            <input onclick="initListeners()"type="submit" placeholder="Create Account" id="createAccountSubmit">
        </form>
    </div>
    </div>`;
    
    
    
     function initOtherListeners() {
    
        $("a").click(function(e) {
            let btnId = e.currentTarget.id;
            MODEL.changePageContent(btnId);
        })
    
    }
    
            
    var _changePageContent = function(pageName) {
        let contentName = pageName + "Content";
        $("#app").html(eval(contentName));
         
        initOtherListeners();
    
    }
    
    
    return {
        changePageContent: _changePageContent,
    }
    
    })();
    
    
    $(document).ready(function() {
        MODEL.changePageContent("home");
    });
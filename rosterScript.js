 var playersArray=new Array(); // THIS IS WHERE ALL THE PLAYERS WILL GO
        var player1= new PlayerBox();
        var player2= new PlayerBox();
        var player3= new PlayerBox();

        player1.createNewForm();
        player2.createNewForm();
        player3.createNewForm();
        playersArray.push(player1);
        playersArray.push(player2);
        playersArray.push(player3);


        player1.div.querySelector(".firstName").value="Sajid";
       player1.div.querySelector(".lastName").value="Kamal";
       player1.div.querySelector(".city").value="Greenvale";
       player1.div.querySelector(".college").value="Stony Brook";
       player1.div.querySelector(".state").value="NY";
        player1.div.querySelector(".team").value="New York Knicks";


        var addButton= document.getElementById("circleBase");
        addButton.onclick=function(){
          var player= new PlayerBox();
          player.createNewForm();
          playersArray.push(player);
          window.scrollTo(0,document.body.scrollHeight);
        }


    function Player() {
        this.FirstName ="";
        this.LastName = "";
        this.City="";
        this.State="";
        this.College="";
        this.Age=0;
        this.Weight=0;
        this.Height=0;
        this.Exp=0;
        this.Team="";
        this.Height=0;
        this.Weight=0;
        this.Position="";

        this.InsideScoring=0;
        this.JumpShot=0;
        this.FtShot=0;
        this.ThreePShot=0;
        this.ThreePUsage=0;
        this.Handling=0;
        this.Passing=0;
        this.PostDefense=0;
        this.PerimeterDefense=0;
        this.Stealing=0;
        this.Blocking=0;
        this.OReb=0;
        this.DReb=0;
        this.Fouling=0;
        this.Strength=0;
        this.Quickness=0;
        this.Jumping=0;
        this.Stamina=0;
    }

     function PlayerBox(){
        this.player= null;
        this.div=null;
        this.createNewForm=function(){

        // CREATE THE NEW DIV
        var div = document.createElement("div");
        div.classList.add("divClass");
        this.div=div;
        div.style.height='500px';

        // PERSONAL HEADER INFO
        var personalInfoHeader= document.createElement("h3");
        personalInfoHeader.innerHTML="Personal Info";
        div.appendChild(personalInfoHeader);

        // ADD ALL THE TEXT INPUT BOXES
        var fNameInput = document.createElement("input");
        fNameInput.classList.add("firstName");
        var lNameInput = document.createElement("input");
        lNameInput.classList.add("lastName");
        var cityInput= document.createElement("input");
        cityInput.classList.add("city");
        var stateInput= document.createElement("input");
        stateInput.classList.add("state");
        var collegeInput= document.createElement("input");
        collegeInput.classList.add("college");

        var inputArray=[fNameInput,lNameInput,cityInput,stateInput,collegeInput];
        var textArray=["First Name","Last Name","City","State","College"];

        for(var i=0;i<inputArray.length;i++){
            var input= inputArray[i];
            var label= document.createElement("LABEL");
            label.classList.add("labels");
            label.innerHTML=textArray[i];
            input.type = "text";
            input.classList.add("inputClass");
            div.appendChild(label);
            div.appendChild(input)
        }

        cityInput.style.width="13%"; // FIX THE SPACING OF THE TEXTFIELDS
        // DONE WITH TEXT INPUTS

        // LETS ADD THE DROPDOWN MENUS
        var expInput=initDropDownMenu(0,26);
        var ageInput = initDropDownMenu(18,45);
        var weightInput = initDropDownMenu(130,350);
        var heightInput= initDropDownMenu(63,91);

        //ADD CLASSES TO EACH
        expInput.classList.add("exp");
        ageInput.classList.add("age");
        weightInput.classList.add("weight");
        heightInput.classList.add("height");
        

        var numberInputArray=[ageInput,weightInput,heightInput,expInput];
        var numberInputTexts=["Age","Weight","Height","Experience"];

        for(var i=0;i<numberInputArray.length;i++){
            var input1= numberInputArray[i];
            var label1= document.createElement("LABEL");
            label1.classList.add("labels");
            label1.innerHTML=numberInputTexts[i];
            input1.classList.add("inputClass");
            div.appendChild(label1);
            div.appendChild(input1)
        }

    ageInput.style.width="20%";


    // LETS ADD THE TEAM INPUT  TEXT FIELD
    var teamInput = document.createElement("input");
    var teamLabel= document.createElement("LABEL");
    teamLabel.classList.add("labels");
    teamLabel.innerHTML="Team";
    teamInput.type="text";
    teamInput.classList.add("team");
    input.classList.add("inputClass");
    div.appendChild(teamLabel);
    div.appendChild(teamInput);


    addBR(div);

    var ratingHeader= document.createElement("h3");
        ratingHeader.innerHTML="Ratings";

    // CREATE A TABLE

    var ratingTable= document.createElement("TABLE");
    var row1= ratingTable.insertRow(0);
    var row2= ratingTable.insertRow(1);
    var row3= ratingTable.insertRow(2);
    var row4= ratingTable.insertRow(3);
    var row5= ratingTable.insertRow(4);
    var row6= ratingTable.insertRow(5);

     var inside=addTD(row1,0,"Inside");
     var jumper=addTD(row1,2,"Jump Shot");
     var ft=addTD(row1,4,"FT Shot");
     var three=addTD(row2,0,"3PT");
     var threeUsage=addTD(row2,2,"3PT Usage");
     var handling=addTD(row2,4,"Handling");
     var passing=addTD(row3,0,"Passing");
     var postD=addTD(row3,2,"Post Defense");
     var perD=addTD(row3,4,"Perimeter Defense");
     var steal=addTD(row4,0,"Stealing");
     var block=addTD(row4,2,"Blocking");
     var oReb=addTD(row4,4,"O Reb");
     var dReb=addTD(row5,0,"D Reb");
     var fouls=addTD(row5,2,"Fouling");
     var strength=addTD(row5,4,"Strength");
     var quickness=addTD(row6,0,"Quickness");
     var jumping=addTD(row6,2,"Jumping");
     var stamina=addTD(row6,4,"Stamina");



     inside.classList.add("inside");
     jumper.classList.add("jumpShot");
     ft.classList.add("ft");
     three.classList.add("threept");
     threeUsage.classList.add("threeptUsage");
     handling.classList.add("handling");
     passing.classList.add("passing");
     postD.classList.add("postD");
     perD.classList.add("perD");
     steal.classList.add("stealing");
     block.classList.add("blocking");
     oReb.classList.add("oReb");
     dReb.classList.add("dReb");
     fouls.classList.add("fouling");
     strength.classList.add("strength");
     quickness.classList.add("quickness");
     jumping.classList.add("jumping");
     stamina.classList.add("stamina");

     var contractHeader= document.createElement("h3");
     contractHeader.innerHTML="Contract";

    var contractTable= document.createElement("TABLE");
    var con1= contractTable.insertRow(0);
    var con2= contractTable.insertRow(1);
    var con3= contractTable.insertRow(2);
    var con4= contractTable.insertRow(3);
    var con5= contractTable.insertRow(4);
    var con6= contractTable.insertRow(5);


    addTDText(con1,0,"Year 1");
    addTDText(con2,0,"Year 2");
    addTDText(con3,0,"Year 3");
    addTDText(con4,0,"Year 4");
    addTDText(con5,0,"Year 5");
    addTDText(con6,0,"Year 6");



     var mainTable= document.createElement("TABLE");
     var mainRow= mainTable.insertRow(0);
     var mainRow1=mainTable.insertRow(1);
    mainRow.insertCell(0).appendChild(ratingHeader);
    mainRow.insertCell(1).appendChild(contractHeader);
    mainRow1.insertCell(0).appendChild(ratingTable);
    mainRow1.insertCell(1).appendChild(contractTable);


    div.appendChild(mainTable);

    var submitButton=document.createElement("BUTTON");
    submitButton.innerHTML="Submit";

    var checkButton=document.createElement("BUTTON");
    checkButton.innerHTML="Check";



    submitButton.onclick=function(){
        this.player=submitPlayer(div);
        minimizeBox(this.player,this.div);
    }.bind(this);

    checkButton.onclick=function(){
      createJSONFile();
    }.bind(this);



    div.appendChild(submitButton);
    div.appendChild(checkButton);

      var main= document.getElementById("main");
      main.appendChild(div);
    }



    function submitPlayer(box){
       try{
       checkEmptyInputs(box);
       var fNameText=box.querySelector(".firstName");
       var lNameText= box.querySelector(".lastName");
       var cityText= box.querySelector(".city");
       var collegeText= box.querySelector(".college");
       var stateText= box.querySelector(".state");
       var expText=box.querySelector(".exp");
       var ageText=box.querySelector(".age");
       var weightText= box.querySelector(".weight");
       var heightText=box.querySelector(".height");
       var insideText= box.querySelector(".inside");
       var jumperText=box.querySelector(".jumpShot");
       var ftText=box.querySelector(".ft");
       var threeText=box.querySelector(".threept");
       var threeUsageText=box.querySelector(".threeptUsage");
       var handlingText= box.querySelector(".handling");
       var passingText= box.querySelector(".passing");
       var postDText= box.querySelector(".postD");
       var perDText= box.querySelector(".perD");
       var stealText= box.querySelector(".stealing");
       var blockText= box.querySelector(".blocking");
       var oRebText= box.querySelector(".oReb");
       var dRebText= box.querySelector(".dReb");
       var foulText= box.querySelector(".fouling");
       var strengthText= box.querySelector(".strength");
       var quicknessText= box.querySelector(".quickness");
       var jumpText= box.querySelector(".jumping");
       var staminaText= box.querySelector(".stamina");
       var teamText= box.querySelector(".team");

      var player= new Player();

       player.FirstName=fNameText.value;
       player.LastName=lNameText.value;
       player.City=cityText.value;
       player.College=collegeText.value;
       player.State=stateText.value;
       player.Exp=parseInt(expText.value);
       player.Age=parseInt(ageText.value);
       player.Weight=parseInt(weightText.value);
       player.Height=parseInt(heightText.value);
       player.InsideScoring=parseInt(insideText.value);
       player.JumpShot=parseInt(jumperText.value);
       player.FtShot=parseInt(ftText.value);
       player.ThreePShot=parseInt(threeText.value);
       player.ThreePUsage=parseInt(threeUsageText.value);
       player.Handling=parseInt(handlingText.value);
       player.Passing=parseInt(passingText.value);
       player.PostDefense=parseInt(postDText.value);
       player.PerimeterDefense=parseInt(perDText.value);
       player.Stealing=parseInt(stealText.value);
       player.Blocking=parseInt(blockText.value);
       player.OReb=parseInt(oRebText.value);
       player.DReb=parseInt(dRebText.value);
       player.Fouling=parseInt(foulText.value);
       player.Strength=parseInt(strengthText.value);
       player.Quickness=parseInt(quicknessText.value);
       player.Jumping=parseInt(jumpText.value);
       player.Stamina=parseInt(staminaText.value);
       player.Team=teamText.value;

            return player;

       }
       catch(err){
        alert(err);
       }
    }
}


    

    function checkEmptyInputs(box){
        var inputArrayList= box.getElementsByTagName('input');
        var empty=false;

        for(var i=0;i<inputArrayList.length;i++){
            var input= inputArrayList[i];
                if(input.value.length==0){
                    input.style.backgroundColor ="red";
                    empty=true;
                }
        }
        if(empty){throw "There is an empty field";}
    }

    

    function addTD(row,columnIndex,label){
        var cell=row.insertCell(columnIndex);
        var cell1=row.insertCell(columnIndex+1);
        var menu= initDropDownMenu(5,100);
        var ratingLabel= document.createElement("label");
        ratingLabel.classList.add("labels");
        ratingLabel.innerHTML=label;
        cell1.appendChild(menu);
        cell.appendChild(ratingLabel);

        return menu;
    }

    function addTDText(row,columnIndex,label){
        var cell=row.insertCell(columnIndex);
        var cell1=row.insertCell(columnIndex+1);
        var input= document.createElement("input");
        input.type="text";
        input.classList.add("inputClassContract");
        var ratingLabel= document.createElement("label");
        ratingLabel.innerHTML=label;
        ratingLabel.classList.add("labels");
        cell.appendChild(ratingLabel);
        cell1.appendChild(input);
    }

    function initDropDownMenu(min,max){
        var selectMenu = document.createElement("SELECT");
        for(var i=0;i<=(max-min);i++){
            var option = document.createElement("option");
            option.text = min+i;
            selectMenu.add(option);
        }
        return selectMenu;
    }

    function addBR(div){
        var brk= document.createElement("BR");
        div.appendChild(brk);
    }

    function createJSONFile(){
      var json="{\n\"Players\":[\n";
      for(x in playersArray){
        json+=JSON.stringify(playersArray[x].player,null,4)+"\n";
      }
      json+="]\n}";

     
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };

    var link = document.createElement('a');
    link.setAttribute('download', 'info.json');
    link.href = makeTextFile(json);
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
    });
    }


    function minimizeBox(player,div){
    setTextVisible(div,false);
    var timer= setInterval(function(){
      var height= parseInt(div.style.height.slice(0,3))
        if(height>=180){
        height-=8;
        div.style.height=height+'px';
        }
        else{
        clearInterval(timer);
        playerPreviewLayout(player,div);
        }
   },1);


      
    
    }

    function maximizeBox(div){

     var timer2= setInterval(function(){

      var height= parseInt(div.style.height.slice(0,3));
        if(height<=500){
          height+=8;
          div.style.height=height+'px';
        }
        else{
          clearInterval(timer2);
          div.style.height='500px';
          setTextVisible(div,true);
        }

   },1);

    }

    function playerPreviewLayout(player,div){

      var picDiv= document.createElement('div');
      var infoDiv= document.createElement('div');

      picDiv.classList.add('picDiv');
      infoDiv.classList.add('infoDiv');
      div.appendChild(picDiv);
      div.appendChild(infoDiv);


      var image= document.createElement('IMG');
      image.setAttribute("src","default_avatar.jpg");
      image.style.height="100%";
      image.style.width="87%";
      picDiv.appendChild(image);

      var name=document.createElement('h1');
      name.innerHTML=player.FirstName+" "+player.LastName;
      name.classList.add("nameLabel");
 

      var lineDiv = document.createElement('hr');
      lineDiv.classList.add("lineBreaker");


      var infoList = document.createElement('ul');
      infoList.classList.add("infoList");
      
      var info=["SF",(convertHeight(player.Height)+", "+player.Weight.toString()+" lbs"), player.Team];

      for(var i=0;i<info.length;i++){
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(info[i]));

        infoList.appendChild(item);
      }

      var metaData= document.createElement('ul');
      metaData.classList.add("metaDataList");
      var labels = ["Age","Hometown","College","Experience","Contract"];
      var inform=    [player.Age,(player.City+", "+player.State),player.College,player.Exp.toString(),"$10,000,000"];

      for(var i=0; i<labels.length;i++){
        var item= document.createElement('li');
        var span= document.createElement('span');
        span.innerHTML=labels[i];
        item.appendChild(span);
        item.appendChild(document.createTextNode(inform[i]));

        metaData.appendChild(item);
      }





      infoDiv.appendChild(name);
      infoDiv.appendChild(lineDiv);
      infoDiv.appendChild(infoList);
      infoDiv.appendChild(metaData);





    }

    function setTextVisible(div,bool){
       var childNodeArray= div.childNodes;

      if(bool){
    for(var i=0;i<childNodeArray.length;i++){
        childNodeArray[i].style.display= '';
     }
      }

      else{
    for(var i=0;i<childNodeArray.length;i++){
        childNodeArray[i].style.display= 'none';
     }
      }
    }

    function convertHeight(raw){
      var rawNumber= raw/12;
      var feet= Math.floor(rawNumber);
      var temp= rawNumber-feet;
      var inches= Math.round(12*temp);

      return feet.toString()+"'"+inches.toString()+"\"";
    }

    









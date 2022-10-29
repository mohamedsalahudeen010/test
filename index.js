
function createlinebreak(tagname){
    var ele=document.createElement(tagname);
    return ele;
    }

    function createptag(tagname,attrname,attrvalue,content){
        var head1=document.createElement(tagname);
        head1.setAttribute(attrname,attrvalue);
        head1.innerHTML=content;
        return head1
    }
var paragraph=createptag("p","id","description","This is a survey-form");



let form1=document.createElement("form");
form1.setAttribute("id","survey-form");
form1.setAttribute("class","survey-form");


function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }


    function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1,placeholder,placeholdervalue){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname1,attrvalue1);
        ele.setAttribute(placeholder,placeholdervalue);
        return ele;
    }

 function CreateButton(tagname,attrname,attrvalue,idname,idvalue,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(idname,idvalue);
    ele.innerHTML=content;
    return ele
    
 }

 //var button1=CreateButton("button","onclick","getvalue()","id","submit","submit")
 var button1=document.createElement("button");
       button1.setAttribute("onclick","getvalue()");
       button1.setAttribute("id","submit");
        button1.innerHTML="Submit";
       
    
    
let br1=createlinebreak("br")
let br2=createlinebreak("br")
let br3=createlinebreak("br")
let br4=createlinebreak("br")
let br5=createlinebreak("br")
let br6=createlinebreak("br")
let br7=createlinebreak("br")
let br8=createlinebreak("br")
let br9=createlinebreak("br")
let br10=createlinebreak("br")
let br11=createlinebreak("br")
let br12=createlinebreak("br")
let br13=createlinebreak("br")
let br14=createlinebreak("br")
let br15=createlinebreak("br")
let br16=createlinebreak("br")
let br17=createlinebreak("br")
let br18=createlinebreak("br")
let br19=createlinebreak("br")





var labelMale=document.createElement("label");
labelMale.setAttribute("for","male");
labelMale.innerHTML="Male";


var male=document.createElement("input");
male.setAttribute("type","radio");
male.setAttribute("name","gender");
male.setAttribute("id","male");
male.setAttribute("value","male");
male.addEventListener("click",gender)


var labelFemale=document.createElement("label");
labelFemale.setAttribute("for","female");
labelFemale.innerHTML="feMale";

var female=document.createElement("input");
female.setAttribute("type","radio");
female.setAttribute("name","gender");
female.setAttribute("id","female");
female.setAttribute("value","female");
female.addEventListener("click",gender)

let firstNamelabel=createlabels("label","for","first-name","Firstname",);
let firstnameinput=createinput("input","type","text","id","first-name","placeholder","Mohamed");

let lastNamelabel=createlabels("label","for","last-name","Lastname");
let lastnameinput=createinput("input","type","text","id","last-name","placeholder","Mohamed");

let emaillabel=createlabels("label","for","email","Email");
let emailinput=createinput("input","type","text","id","email","placeholder","abcd@gmail.com");

let addresslabel=createlabels("label","for","address","Address");
let addressinput=createinput("input","type","text","id","address","placeholder","bharathinagar,ramanathapuram-623503");

let pincodelabel=createlabels("label","for","pincode","Pincode");
let pincodeinput=createinput("input","type","Number","id","pincode","placeholder","623503");

let statelabel=createlabels("label","for","state","State");
let stateinput=createinput("input","type","text","id","state","placeholder","tamilnadu");

let countrylabel=createlabels("label","for","country","Country");
let countryinput=createinput("input","type","text","id","country","placeholder","india");





    
        
    
    
let head1=document.createElement("h1");
head1.setAttribute("id","title");
head1.innerHTML="Survey Form";


form1.append(head1,paragraph,firstNamelabel,firstnameinput,br1,br2,lastNamelabel,lastnameinput,br3,br4,emaillabel,emailinput,br18,br19,labelMale,male,br14,br15,labelFemale,female,br16,br17,addresslabel,addressinput,
    br5,br6,pincodelabel,pincodeinput,br7,br8,statelabel,stateinput,br11,br10,countrylabel,countryinput,br12,br13,button1)

document.body.append(form1)

//<label for="firstName">FirstName:</label>
 //       <input type="text" id="firstName"><br><br></br>

 
function gender(){
    
    if(male.checked){
        let res=document.getElementById("male").value;
        return res;
    }
    else if(female.checked){
        let res1=document.getElementById("female").value;
        return res1;
    }
    else{
        return "others";
    }
    }




function getvalue(){
    var res1=document.getElementById("firstname").value;
    var res2=document.getElementById("lastname").value;
    var res3=document.getElementById("address").value;
    var res4=document.getElementById("pincode").value;
    //var res5=document.getElementById("male").value;
   // var res6=document.getElementById("female").value;
    var res7=document.getElementById("state").value;  
    var res8=document.getElementById("country").value;  

    console.log(res1,res2,res3,res4,res5,res6,res7,res8)
    
    
function createTable(tagname,attrname,attrvalue){
    var table=document.createElement(tagname);
    table.setAttribute(attrname,attrvalue);
    table.style.border="1px solid black"
    table.style.borderCollapse = "collapse";
    table.style.aligncontent="right"
    table.style.left="20px"
return table
}

function createTable1(tagname){
    var table=document.createElement(tagname);
   
return table
}
function createTable2(tagname,content){
    var table=document.createElement(tagname);
    table.innerHTML=content;
    table.style.border="1px solid black"
return table
}


var table=createTable("table","class","table");
var thead=createTable("thead","class","thead-dark")
var tr1=createTable1("tr");
var th1=createTable2("th","Firstname");
var th2=createTable2("th","Lastname");
var th3=createTable2("th","Address");
var th4=createTable2("th","Pincode");
var th5=createTable2("th","Gender");
var th6=createTable2("th","Choice of Food");
var th7=createTable2("th","State");
var th8=createTable2("th","Country");

tr1.append(th1,th2,th3,th4,th5,th6,th7,th8);
thead.append(tr1);

var tbody=createTable1("tbody");
var tr2=createTable1("tr");
var td1=createTable2("th",res1);
var td2=createTable2("th",res2);
var td3=createTable2("th",res3);
var td4=createTable2("th",res4);
var td5=createTable2("th",gender());
//var td6=createTable2("th","");
var td7=createTable2("th",res7);
var td8=createTable2("th",res8);

tr2.append(td1,td2,td3,td4,td5,td7,td8);
tbody.append(tr2);
table.append(thead,tbody);
return document.body.append(table);
}

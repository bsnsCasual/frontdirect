//waseem salem moammad saeed
//Syria, DairAzZor may29, 2021
//may30, 2021

function _$(el){return document.getElementById(el);};

_$ready = false;
fors = document.getElementsByTagName('for');
ifs = document.getElementsByTagName('if');
jsonDataInclude = document.getElementsByTagName('data');
_$data = {};
_$dataIsReady = false;
pan = [];
pan2 = [];

/*if (jsonDataInclude.length == 0) {loop(); _$dataIsReady = true;};
for (let index = 0; index < jsonDataInclude.length; index++) {
    //BUG: when using more than 1 data include, a bug shows up
    //  catch it up using the web console
    jsonDataInclude[index].style.display = 'none';

    var httpGetJSON = new XMLHttpRequest;
    if (httpGetJSON.readyState == 4 || httpGetJSON.readyState == 0){
        httpGetJSON.open("GET", jsonDataInclude[index].innerHTML, true);
        httpGetJSON.onreadystatechange = function(){
            if (httpGetJSON.readyState == 4)
            {
                if (httpGetJSON.status == 200)
                {
                    _flag = jsonDataInclude[index].getAttribute("flag");
                    if(jsonDataInclude[index].getAttribute("output") == "json"){
                        _$data[_flag] = JSON.parse(httpGetJSON.responseText);
                    } else {
                        _$data[_flag] = httpGetJSON.responseText;
                        console.log(_$data);
                    }
                }
            }
        };
        httpGetJSON.send(null);
    }
    pan2.push(jsonDataInclude[index]);
    if(index == jsonDataInclude.length-1){
        setTimeout(()=>{
            _$dataIsReady = true;
            console.log(_$data);
        },100);
        setTimeout(()=>{
            pan2.forEach(el=>{
                el.remove();
            });
        },2000);
    }
}

readyIntervalCount = 0;
readyInterval = setInterval(()=>{
    if(_$dataIsReady){
        clearInterval(readyInterval);
        loop();
    }
    console.log('still...');
    readyIntervalCount += 10;
    if(readyIntervalCount > 3000){
        clearInterval(readyInterval);
        alert("data took too much to response, loading stopped");
    }
},10);*/

//bug: when you call loop more than 1 times, <r> dublicates to 2, whatever the times you dublicate loop()
loop();
function loop(){
    for (let index = 0; index < fors.length; index++) {
        i = eval(fors[index].getAttribute("$i"));
        max = eval(fors[index].getAttribute("$max"));
        for (let index2 = i; index2 < max; index2++) {
            newValue = fors[index].innerHTML.replace(/\$i/g, index2);
            fors[index].parentElement.innerHTML += newValue;
        }
        fors[index].style.display = 'none';
        pan.push(fors[index]);
        console.log(index);
        if(index == fors.length-1){
            pan.forEach(element => {
                element.remove();
            });
            _$ready = true;
        }
    }

    for (let index = 0; index < ifs.length; index++) {
        if(ifs[index].attributes[0].nodeName == eval(ifs[index].attributes[0].nodeValue)){
            ifs[index].parentElement.innerHTML = ifs[index].innerHTML;
        }
        pan.push(ifs[index]);
        ifs[index].style.display = 'none';
        if(index == ifs.length-1){
            pan.forEach(el => {
                el.remove();
            });
        }
    }

    keyElementsDisplayMode = "noneDisplay"; // remove | noneDisplay | developerMode
    keyElements = ["story"];
    keyElements.forEach(keyElement => {
        pan = [];
        myElement = document.getElementsByTagName(keyElement);
        for (let index3 = 0; index3 < myElement.length; index3++) {
            myElement[index3].style.display = 'none';
            switch (keyElementsDisplayMode) {
                case "remove":
                    myElement[index3].style.display = 'none';
                    pan.push(myElement[index3]);
                    console.log(myElement[index3].innerHTML);
                    if(index3 == myElement.length-1){
                        pan.forEach(element => {
                            element.remove();
                        }); 
                    }
                    break;
                
                case "noneDisplay":
                    myElement[index3].style.display = 'none';
                    break;

                case "developerMode":
                    break;

                default:
                    break;
            }
        }
    });

    for (let index = 0; index < document.getElementsByTagName('scrumjs').length; index++) {
        eval(document.getElementsByTagName('scrumjs')[index].innerHTML);

        executionMode = document.getElementsByTagName('scrumjs')[index].getAttribute('mode');
        console.log(executionMode);
        document.getElementsByTagName('scrumjs')[index].innerHTML = executionMode == "replace" ? eval(document.getElementsByTagName('scrumjs')[index].innerHTML) : "";
    }

    for (let index = 0; index < document.getElementsByTagName('r').length; index++) { // "r" for "replace", instead of using <scrumjs mode="replace"></scrumjs>
        //eval(document.getElementsByTagName('r')[index].innerHTML);
        document.getElementsByTagName('r')[index].parentElement.innerHTML += eval(document.getElementsByTagName('r')[index].innerHTML);
        document.getElementsByTagName('r')[index].style.display = 'none';
        pan.push(document.getElementsByTagName('r')[index]);

        if(index == document.getElementsByTagName('r').length - 1){
            pan.forEach(el => {
                el.remove();
            });
        }
    }
}

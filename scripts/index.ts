window.onload = () => {
    const gitReact = <HTMLScriptElement>document.getElementById("gitReact");
    const gitJS = <HTMLScriptElement>document.getElementById("gitJS");
    gitReact.onmouseover = gitReactFunctionOnn;
    gitReact.onmouseout = gitReactFunctionOff;
    gitJS.onmouseover = gitJSFunctionOnn;
    gitJS.onmouseout = gitJSFunctionOff;
    const tableOwerflow = <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName("tables");
    tableOwerflow[0].onclick = tableFunctionOwerflow1;
    tableOwerflow[1].onclick = tableFunctionOwerflow2;
    tableOwerflow[2].onclick = tableFunctionOwerflow3;
    tableOwerflow[3].onclick = tableFunctionOwerflow4;
}

class construktor<S extends string> {
    functionOnn (ids:S , nameIds:S , textFotInner:S) {
        let proc: number = 0;
    const e =<HTMLScriptElement> document.getElementById(ids)
    const div =<HTMLDivElement>document.createElement('div');
    div.id = nameIds;
    div.innerHTML = textFotInner;
    div.style.opacity = `${proc}%`;
    e.appendChild(div)
    const int = setInterval(() => {
        if (proc < 100) {
            proc+= 10;
            div.style.opacity = `${proc}%`;
        } else {
            clearInterval(int)
        }
    } , 50)
    };

    functionOff (ids: S) {
        const div = document.querySelector(ids);
        div!.remove();
    };

    tableFunction(id: number) {
        const tableOwerflow = <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName("tables");
        for(let i = -0; i <= tableOwerflow.length; i++) {
            if(id !== i) {
                tableOwerflow[i].style.flexBasis = "7.5vh";
            } else {
                tableOwerflow[id].style.flexBasis = "50vh";
            }
        }
        
        
    }
}

const gitFunction = new construktor<string>;

function tableFunctionOwerflow1 () {
    gitFunction.tableFunction(0)
};
function tableFunctionOwerflow2 () {
    gitFunction.tableFunction(1)
};
function tableFunctionOwerflow3 () {
    gitFunction.tableFunction(2)
};
function tableFunctionOwerflow4 () {
    gitFunction.tableFunction(3)
}

function gitJSFunctionOnn (): void { 
    return gitFunction.functionOnn("gitJS" , "git2" , "Проект, написанный при помощи JS, в котором при помощи нажатия на столбики, вы сможете развернуть данный столбик");
  }

  function gitJSFunctionOff ():void {
    return gitFunction.functionOff("#git2");
  }


function gitReactFunctionOnn ():void { 
  return gitFunction.functionOnn("gitReact" , "git1" , "Проект, написанный при помощи React, с использованием TypeScript");
}

function gitReactFunctionOff ():void {
    return gitFunction.functionOff("#git1")
}

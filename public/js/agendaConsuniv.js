
    const meses = ['janeiro', 'fevereiro','março','abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];


async function renderCalendar(year,month){
    console.log(month)
    
    const tagAno = document.getElementById("ano");
    const tagMes = document.getElementById("mes");

    if(month === 0 ){
        if(month === 11){ //só troca de mês quando trocar de dezembro para janeiro
            --year;
        }
        let data = new Date(year, month);  
        let startOfMonth = data.getDay();
        let numOfDays = 32 - new Date(year, month, 32).getDate();
        // console.log(startOfMonth);
        // console.log(numOfDays);
        await povoaTabela(startOfMonth, numOfDays);
        tagAno.innerText = `${data.getFullYear()}`;
        tagMes.innerText = `${meses[data.getMonth()]}`;    
    }else if(year && month){
        let data = new Date(year, month);  
        let startOfMonth = data.getDay();
        let numOfDays = 32 - new Date(year, month, 32).getDate();
        // console.log(startOfMonth);
        // console.log(numOfDays);
        await povoaTabela(startOfMonth, numOfDays);
        tagAno.innerText = `${data.getFullYear()}`;
        tagMes.innerText = `${meses[data.getMonth()]}`;    
    }else{
        let data = new Date();  
        let startOfMonth = data.getDay();
        let numOfDays = 32 - new Date(year, month, 32).getDate();
        await povoaTabela(startOfMonth, numOfDays);
        tagAno.innerText = `${data.getFullYear()}`;
        tagMes.innerText = `${meses[data.getMonth()]}`;
    }
    
}


async function acresceMes(year,month){
    console.log(month)
    
    const tagAno = document.getElementById("ano");
    const tagMes = document.getElementById("mes");

    if(month === 11 ){
        console.log('primeiro');
        month = 0
        ++year;
        let data = new Date(year, month);  
        let startOfMonth = data.getDay();
        let numOfDays = 32 - new Date(year, month, 32).getDate();
        // console.log(startOfMonth);
        // console.log(numOfDays);
        await povoaTabela(startOfMonth, numOfDays);
        tagAno.innerText = `${data.getFullYear()}`;
        tagMes.innerText = `${meses[data.getMonth()]}`;    
    }else if(year && month >= 0 ){
        console.log('segundo');
        month = month+1;
        let data = new Date(year, month);  
        let startOfMonth = data.getDay();
        let numOfDays = 32 - new Date(year, month, 32).getDate();
        await povoaTabela(startOfMonth, numOfDays);
        // console.log(startOfMonth);
        // console.log(numOfDays);
        tagAno.innerText = `${data.getFullYear()}`;
        tagMes.innerText = `${meses[data.getMonth()]}`;    
    }else{
        console.log('terceiro');
        let data = new Date();  
        let startOfMonth = data.getDay();
        let numOfDays = 32 - new Date(year, month, 32).getDate();
        await povoaTabela(startOfMonth, numOfDays);
        tagAno.innerText = `${data.getFullYear()}`;
        tagMes.innerText = `${meses[data.getMonth()]}`;
    }
    
}


async function povoaTabela(diaSemanaInicio, numOfDay){
    const corpoTabela = document.getElementsByClassName("corpoTabelaAgenda")[0];
    let renderNum = 1;
    corpoTabela.innerHTML = "";
    for(i=0; i<6; i++){
        let row = document.createElement('tr')
        for(c =0; c<7; c++){
            if(i===0 && c<diaSemanaInicio){
                let td = document.createElement('td');
                row.append(td);
            }else if(renderNum > numOfDay){
                // break;
            }else{
                let td =document.createElement('td');
                td.textContent = renderNum;
                row.append(td);
                renderNum++;
            }
        }
        corpoTabela.append(row);
    }
}
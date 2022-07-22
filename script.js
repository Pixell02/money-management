// look of site
const center =  document.getElementById('tyt');
center.innerText='money management';
center.style.textAlign='center';
center.style.color='white';

const body = document.querySelector('body');
body.style.backgroundColor='rgb(37, 35, 35)';
body.style.color='white';
body.style.fontSize=17;

const form = document.getElementById('trade-form');
form.querySelector('button').addEventListener('click', trade);
 
function trade(e){  
    
    let tabe=document.querySelectorAll('table');
    let run = parseInt(document.getElementById('run').value);
    let balance = parseInt(document.getElementById('balance').value);
    let number_trade = parseInt(document.getElementById('Num').value);    
    let win_rate = parseInt(document.getElementById('Wr').value);
    let loss = parseFloat(document.getElementById('loss').value/100);
    let Profit = parseFloat(document.getElementById('profit').value/100);
    let run_loss_percentage = parseFloat(document.getElementById('run_loss_percentage').value/100);
    let run_loss_money = parseFloat(document.getElementById('run_loss_money').value);
    

    // validation
    let bal;
    let nt;
    let wuer;
    let los;
    let prof;
    let runs;
    let run_per;
    let run_mon;
    let loss_run;

    //run validation
    if(run == null || run == "" || run<=0)
    {
        document.getElementById('mes_run').innerHTML = "value of run must be higher than 0";
        runs=false;
    }
    else
    {
        document.getElementById('mes_run').innerHTML = "";
        runs=true;
    }

    //balance validation
    
    if(balance==0 )
    {
        document.getElementById('mes_bal').innerHTML="empty";
      //  console.log(document.getElementById('mes_bal').innerHTML="empty");
        bal=false;
    }
    else if(balance<0)
    {
        document.getElementById('mes_bal').innerHTML="balance can't be smaller than 0";
      //  console.log(document.getElementById('mes_bal').innerHTML="balance can't equal 0 or less");
        bal=false;
    }
    else
    {
        bal=true;
        document.getElementById('mes_bal').innerHTML =" ";
    }

     

    //number of trades
   
     if(number_trade==0)
    {
        document.getElementById('mes_not').innerHTML="empty";
        console.log(document.getElementById('mes_not').innerHTML="empty");
        nt=false;
    }
    else if(number_trade<0)
    {
        document.getElementById('mes_not').innerHTML="number of trade's can't be smaller than 0";
        console.log(document.getElementById('mes_not').innerHTML="number of trade's can't equal 0 or less");
        nt=false;
    }
    else
    {
     nt=true;
     document.getElementById('mes_not').innerHTML =" ";
    }

    //win rate

     if(win_rate==0)
    {
        document.getElementById('mes_wr').innerHTML="empty";
        console.log(document.getElementById('mes_wr').innerHTML="empty");
        wuer=false;
    }
    else if(win_rate<0)
    {
        document.getElementById('mes_wr').innerHTML="win rate can't be smaller than 0";
        console.log(document.getElementById('mes_wr').innerHTML="balance can't equal 0 or less");
        wuer=false;
    }
    else
    {
        wuer= true;
        document.getElementById('mes_wr').innerHTML =" ";
    }
    
    //loss
    let mes_loss= document.getElementById('simulate');
     if(loss==0)
    {
        document.getElementById('mes_loss').innerHTML="empty";
        mes_loss.style.marginTop=30;
        console.log(document.getElementById('mes_loss').innerHTML="empty");
        los=false;
    }
        else if(loss<0)
        {
            document.getElementById('mes_loss').innerHTML="loss can't be smaller than 0";
            console.log(document.getElementById('mes_loss').innerHTML="loss can't equal 0 or less");
            los=false;
        }
        else if(loss>100)
        {
            document.getElementById('mes_loss').innerHTML="value of loss is more than 100";
            console.log(document.getElementById('mes_loss').innerHTML="value of loss is more than 100");
            los=false;
        }
            else
            {
                los=true;
                document.getElementById('mes_loss').innerHTML =" ";
            }
    
    // Profit

    if(Profit==0)
    {
        document.getElementById('mes_profit').innerHTML="empty";
        console.log(document.getElementById('mes_profit').innerHTML="empty");
        prof=false;
    }
    else if(Profit<0)
    {
        document.getElementById('mes_profit').innerHTML="profit can't be smaller than 0";
        console.log(document.getElementById('mes_profit').innerHTML="balance can't equal 0 or less");
        prof=false;
    }  
    else
    {
        prof=true;
        document.getElementById('mes_profit').innerHTML =" ";
        
    }
    if(run_loss_percentage<0)
    {
        run_per=false;
        document.getElementById('mes_run_loss_per').innerHTML="value can't be lower than 0";
    }
    else if (run_loss_percentage==0)
    {
        run_per=false;
        document.getElementById('mes_run_loss_per').innerHTML="";
    }
    else
    {
        run_per=true;
        document.getElementById('mes_run_loss_per').innerHTML="";
        let max_loss=balance*run_loss_percentage;
        max_loss=balance-max_loss;
    }
    if(run_loss_money<0)
    {
        run_mon=false;
        document.getElementById('mes_run_loss_mon').innerHTML="value can't be lower than 0";
    }
    else if(run_loss_money==0)
    {
        run_mon=false;
        document.getElementById('mes_run_loss_mon').innerHTML="";
    }
    else
    {
        run_mon=true;
        document.getElementById('mes_run_loss_mon').innerHTML="";
        
    }
    if(run_per==true && run_mon==true)
    {
        loss_run=false;
        document.getElementById('mes_run_loss_per').innerHTML="one box must be empty";
    }
    else if (run_per==true || run_mon==true)
    {
        loss_run=true;
        document.getElementById('mes_run_loss_per').innerHTML="";
    }
    else if (run_loss_money==0 && run_loss_percentage==0)
    {
        loss_run=true;
        document.getElementById('mes_run_loss_per').innerHTML="";
    }

 
   
          
    if (runs==true && bal==true && nt==true && wuer==true && los==true && prof==true && loss_run==true)
    {
        
        if(tabe.length>0){
        let arr = tabe.length-1;
        console.log(arr);
        for(arr;arr>=0;arr--)
         {
             tabe[arr].remove();
         }
         create_table();
            tabe = document.querySelectorAll('table');
            console.log(tabe);
        }
        else{
        create_table();
        tabe = document.querySelectorAll('table');
        console.log(tabe);
        }
        
     }    
    //creating table

    function create_table(){
    for(let a = 1 ; a<=run ; a++)
    {   
        let max_loss;
        if(run_per==true)
        {
        max_loss=balance*run_loss_percentage;
        max_loss=balance-max_loss; 
        }
        else if(run_mon==true)
        {
            max_loss=balance-run_loss_money;
        }
        else{
            max_loss=0;
        }
        console.log(max_loss);    
        let table = document.createElement('table');
        table.className="new-table";
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        
        table.style.float="left";
        
        table.style.marginLeft=innerWidth/run/2-50;
        console.log(innerWidth);
        //console.log(table.style.marginLeft);
        table.appendChild(thead);
        table.appendChild(tbody);

// Adding the entire table to the body tag
        document.getElementById('tab').appendChild(table);

// Creating and adding data to first row of the table
        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "trade";
        
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Profit/Loss";

            row_1.appendChild(heading_1);
            row_1.appendChild(heading_3);
            thead.appendChild(row_1);

//loop to add another rows and dimensions in table

        
        for(let i = 1 ; i <= number_trade ; i++)
        {
            if(balance>max_loss)
            {
            console.log(i);
            let rows = document.createElement('tr');
            let data_1 = document.createElement('td');
            data_1.innerHTML = i;
            // Probability

            let random = Math.floor(Math.random()*100+1);
            let data_3 = document.createElement('td');

   
            if(random<=win_rate)
            {
            //Profit
            
            data_3.style.backgroundColor="green";    
            let PT =  balance * Profit;
            
            PT= PT + balance;
            balance=PT;
            console.log(PT); 
            
            data_3.innerHTML = balance.toFixed(2);
            }
            else
            {
            
            //Loss
            
            data_3.style.backgroundColor="red";
            let SL = balance * loss;
            SL = balance - SL;
            balance = SL;
                       
            data_3.innerHTML = balance.toFixed(2);
            }
        
            rows.appendChild(data_1);
            rows.appendChild(data_3);
            tbody.appendChild(rows);
            }
            else{
                
                break;
            }
            
        
        }
        
    }
   }
    e.preventDefault();
    
        return true;
    }

   
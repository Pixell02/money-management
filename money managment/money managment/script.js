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
form.querySelector(button).addEventListener('click', trade);

function trade(e){  
    
    let tabe = document.querySelectorAll('table');
    let balance = parseInt(document.getElementById('balance').value);
    let number_trade = parseInt(document.getElementById('Num').value);    
    let win_rate = parseInt(document.getElementById('Wr').value);
    let loss = parseFloat(document.getElementById('loss').value/100);
    let Profit = parseFloat(document.getElementById('profit').value/100);
    

    // validation
    let bal;
    let nt;
    let wuer;
    let los;
    let prof;
  
    //balance validation

    if(balance==null || balance=="")
    {
        document.getElementById('mes_bal').innerHTML="empty";
      //  console.log(document.getElementById('mes_bal').innerHTML="empty");
        bal=false;
    }
    else if(balance<=0)
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
   
     if(number_trade==null|| number_trade=="")
    {
        document.getElementById('mes_not').innerHTML="empty";
        console.log(document.getElementById('mes_not').innerHTML="empty");
        nt=false;
    }
    else if(number_trade<=0)
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

     if(win_rate==null|| win_rate=="")
    {
        document.getElementById('mes_wr').innerHTML="empty";
        console.log(document.getElementById('mes_wr').innerHTML="empty");
        wuer=false;
    }
    else if(win_rate<=0)
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
     if(loss==null|| loss=="")
    {
        document.getElementById('mes_loss').innerHTML="empty";
        mes_loss.style.marginTop=30;
        console.log(document.getElementById('mes_loss').innerHTML="empty");
        los=false;
    }
        else if(loss<=0)
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

    if(Profit==null|| Profit=="")
    {
        document.getElementById('mes_profit').innerHTML="empty";
        console.log(document.getElementById('mes_profit').innerHTML="empty");
        prof=false;
    }
        else if(Profit<=0)
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

    // percentage loss in trade
   
          
       if (bal==true && nt==true && wuer==true && los==true && prof==true)
       {
        
                
        let table = document.createElement('table');
        table.className="new-table";
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        // table.style.float="left";
         table.style.marginLeft=500;
        
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
    tabe[0].remove(); 
         e.preventDefault();
         
    
  }
    
         
}



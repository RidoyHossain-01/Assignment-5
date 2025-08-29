const allHearts = document.getElementsByClassName('heart')

for (const heart of allHearts) {
     
     heart.addEventListener('click',function(){
          let heartCount = document.getElementById('heart-count')
         let heartUpdate = parseInt(heartCount.innerText)
        heartUpdate++
       
        heartCount.innerText = heartUpdate;
          
     })
     
     
}

const coins = document.getElementById('coin-count');
let coinNumber = parseInt(coins.innerText)



const allCallBtn = document.getElementsByClassName('call-btn')


for (const calls of allCallBtn) {
     calls.addEventListener('click',function(){
        let serviceName =calls.closest('.card').querySelector('.service-name').innerText
        let serviceNumber =calls.closest('.card').querySelector('.tel-number').innerText
          if (coinNumber>=20) {
               alert(`📞Calling ${serviceName} ${serviceNumber}`)
              coinNumber-=20;
              coins.innerText = coinNumber;
              let callingTime=new Date().toLocaleTimeString('en-US', { hour12: true });
              
              const callHistory = document.getElementById('history-list');

              const newHistory = document.createElement('div');
              newHistory.innerHTML =`
              <div class="flex justify-between items-center mt-4 shadow-lg py-5 px-2">
                         <div>
                              <h6 class="text-lg font-semibold">${serviceName}</h6>
                              <p class="text-sm font-light mt-1">${serviceNumber}</p>
                         </div>
                         <p>${callingTime}</p>
                    </div>
              `
              callHistory.appendChild(newHistory);


               
          }
          else{
               alert('❌ You do not have sufficient coin.To make a call,at least 20 coins needed')
          }
     })
     
}


const clear = document.getElementById('clear-btn');
clear.addEventListener('click',function(){
     const callHistory = document.getElementById('history-list');
     callHistory.innerHTML = ``;
})



let copies = document.getElementById('copy-count');
let copyCount = parseInt(copies.innerText);

const allCopyBtn = document.getElementsByClassName('copy-btn');
for (const copyBtn of allCopyBtn) {
      copyBtn.addEventListener('click',function(){
          let serviceNumber =copyBtn.closest('.card').querySelector('.tel-number').innerText; 
          alert(`Number copied ${serviceNumber}`);
          navigator.clipboard.writeText(serviceNumber);
          copyCount++
          copies.innerText = copyCount;
          
      })
      

      
     
}




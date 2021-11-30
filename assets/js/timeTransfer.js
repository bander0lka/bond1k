        timeTransfer.onclick = function (){           
                let date = new Date();
                
                let time = date.getHours();
                let _dateTransfer = document.getElementById('dateTransfer'); 
                let dateTransferUsers = new Date(_dateTransfer.value);// Получаем выбранную дату
                
              if(dateTransferUsers.getMonth() > date.getMonth() || dateTransferUsers.getDate() > date.getDate())
              {
                // ничего не удаляем
                let optionList = document.getElementById('timeTransfer').getElementsByTagName('option');

                  for (i = 0; i < optionList.length; i++) {                      
                      
                    optionList[i].disabled = false;                      
                  }
                
                    
              }
              else {
     
              }              
        };    
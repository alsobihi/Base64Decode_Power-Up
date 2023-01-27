console.log('hello world !');




function isBase64(base64_code) {

    var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

    if (base64regex.test(base64_code)) {
        return true;
     }else{ return false;}
    
    
}

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}



function cleanandreplace(decodedString) {

    var newstr = decodedString.replace('', "@"); // String.prototype.replace calls re[@@replace].
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('"', "@"); 
    var newstr = newstr.replace('#', "@"); 
    var newstr = newstr.replace('<', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('\r', "@"); 
    var newstr = newstr.replace('\n', "@"); 
    var newstr = newstr.replace('\n\r', "@"); 
    var newstr = newstr.replace('\r\n', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace("'", "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace('', "@"); 
    var newstr = newstr.replace(';', "@"); 
    var newstr = newstr.replace('!', "@"); 
    var newstr = newstr.replace('$', "@"); 
    var newstr = newstr.replace('zzzzzzzzzzzz', "@"); 
    var newstr = newstr.replace('zzzzzzzzzzzz', "@"); 
    var newstr = newstr.replace('zzzzzzzzzzzz', "@"); 
    var newstr = newstr.replace('zzzzzzzzzzzz', "@"); 
    var newstr = newstr.replace('zzzzzzzzzzzz', "@"); 
    
    console.log(newstr);
    var newstr = newstr.match(/@(.+)@@(.+)@@(.+)@@(.+)@@(.+)/i);
    console.log(newstr);
    
    return newstr;
}



function QRCodeField(card) {
    
    if (card?.customFieldItems['0']?.idCustomField === '6394183eabbc860448e4b080') { 
        return value_text = card?.customFieldItems['0']?.value['text'];   
    }
    else if (card?.customFieldItems['1']?.idCustomField === '6394183eabbc860448e4b080') { 
        return  value_text = card?.customFieldItems['1']?.value['text']; 
    }
    else if (card?.customFieldItems['2']?.idCustomField === '6394183eabbc860448e4b080') { 
        return value_text = card?.customFieldItems['2']?.value['text'];   
    }
    return false;
}

function myFunction(card) {myFunction:{
    // you can now use break myFunction; instead of return;

    if (card.customFieldItems != '') {
        console.log(card);


        var value_text = QRCodeField(card) 
        


            if (value_text) {


                if (isBase64(value_text)) {

                    var decodedString = b64DecodeUnicode(value_text)
                    console.log(decodedString);
                    var base64_clean = cleanandreplace(decodedString)
                     
                   console.log(base64_clean);

                    if (base64_clean) {

                        var matches = base64_clean;
                             
                 var name = matches[1];
                 var name = name.replace("@", '');
                 var vatnumber = matches[2];
                 var dateandtime = matches[3];
                 var amount = matches[4]; 
                 var vat_amount = matches[5];
                
        
        
                    return [
                        {text: name},
                        {text: vatnumber},
                        {text: dateandtime},
                        {text: amount},
                        {text: vat_amount},
                    ]
                        
                    }
                    
               
                    return [{text: 'Not ZATCA Qr-Code',color: "red",}, ]


                    
                }
                    return [{text: 'Wrong Qr-Code',color: "red",}, ]
                
                
        

                
            }

                return [{text: 'No Qr-Code',color: "yellow",}];
            

 





        
       }

       return [{text: 'No customFieldItems',color: "light-gray",}];

  }}







TrelloPowerUp.initialize({




    'card-badges': function(t, options){
        

      return t.card('customFieldItems')
      .then(function(card) {
        
        return myFunction(card)




      })

 

 


    },




    'card-detail-badges': function(t, options) {

        return t.card('customFieldItems')
        .then(function(card) {
          
         

        if (card.customFieldItems != '') {
            console.log(card);
    
    
            var value_text = QRCodeField(card) 
            
    
    
                if (value_text) {
    
    
                    if (isBase64(value_text)) {
    
                        var decodedString = b64DecodeUnicode(value_text)
                        console.log(decodedString);
                        var base64_clean = cleanandreplace(decodedString)
                         
                       console.log(base64_clean);
    
                        if (base64_clean) {
    
                            var matches = base64_clean;
                                 
                     var name = matches[1];
                     var name = name.replace("@", '');
                     var vatnumber = matches[2];
                     var dateandtime = matches[3];
                     var amount = matches[4]; 
                     var vat_amount = matches[5];
                    
            
            
                     return [
                      {title: 'Name: ',color: 'blue',text: name,},
                      {title: 'Vat Number: ',color: 'blue',text: vatnumber,},
                      {title: 'Date & Time: ',color: 'blue',text: dateandtime,},
                      {title: 'Amount: ',color: 'blue',text: amount,},
                      {title: 'Vat Amount: ',color: 'blue', text: vat_amount,},
                             ]
                            
                        }
                        
                   
                        return [{text: 'Not ZATCA Qr-Code',color: "red",}, ]
    
    
                        
                    }
                        return [{text: 'Wrong Qr-Code',color: "red",}, ]
                    
                    
            
    
                    
                }
    
                    return [{text: 'No Qr-Code',color: "yellow",}];
                
    
     
    
    
    
    
    
            
           }

       return [{text: 'No customFieldItems',color: "light-gray",}];

       
  
  
        })
    
      },





  });



  

function calc()
            {
                var n1 = parseFloat(document.getElementById('n1').value);
                var n2 = parseFloat(document.getElementById('n2').value);
                
                var oper = document.getElementById('operators').value;
                
                if(oper === '+')
                {
                    document.getElementById('result').value = n1+n2;
                }
                
                if(oper === '-')
                {
                    document.getElementById('result').value = n1-n2;
                }
                
                if(oper === '/')
                {
                    document.getElementById('result').value = n1/n2;
                }
                
                if(oper === 'X')
                {
                    document.getElementById('result').value = n1*n2;
                }
            }

            // In this function I used the same code as in my hard GI but I made a few changes.
            // I added an HTML page that is linked via javascript to connect the code to text boxes 
            // where you can input your numbers and then a selector so you can pick the operation that you want. 
            // Lastly the result will show up in a text box with the answer after clicking the equals button.
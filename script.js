/*CSS selectors => .abc#def : a condition when class is 'abc' and its id is 'def', both conditions should follow.
a[href = "www.google.com"] : an anchor tag whose value is "www.google.com" 
.a .b : a tag whose class is 'b' and its parent is 'a' [only when there is space in between.]*/
$(document).ready(function(){
    let cellContainer = $(".input-cell-container");
    for(let i = 1; i <= 100; i++){

        let ans = "";
        let n = i;
    
        while(n > 0){
            let rem = n % 26;
            if(rem == 0){
                ans = "Z" + ans;
                n = Math.floor(n/26) - 1;
            }else{
                ans = String.fromCharCode(rem - 1 + 65) + ans;
                n = Math.floor(n/26);
            }
        }

        let column = $(`<div class="column-name colId-${i}" id = "colCod-$(ans)">${ans}</div>`);
        $(".column-name-container").append(column);

        let row = $(`<div class="row-name" id="rowId-${i}">${i}</div>`);
        $(".row-name-container").append(row);
    }

    

});


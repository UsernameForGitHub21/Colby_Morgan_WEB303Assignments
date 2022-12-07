$(document).ready(function() {
    var $imgs = $('#gallery img');
    var $search = $('#filter-search');
    var cache = [];



    function getAjax() {
        $.ajax({
            url: "Data.json",
        }).done(function (characterData) {
            cache = characterData;
            var $tbody = $('tbody');
            characterData.forEach((character) => {
                var $row = $(`<tr>
                <td>${character.firstName}</td>
                <td>${character.lastName}</td>
                <td>${character.gender}</td>
                <td>${character.alignment}</td>
                <td>${character.yearIntroduced}</td>
                <td>${character.birthDate}</td>
                </tr>`);
                $tbody.append($row)
            })
        });
    }



    function searchName() {
        var $Input = $('#filter-search');
        $Input.on('keyup', function (event) {
            var searchWord = event.target.value.toLowerCase();
            var $tbody = $('tbody');
            $tbody.empty();

            cache.forEach((character) => {
                var $row = $(`<tr>
                    <td>${character.firstName}</td>
                    <td>${character.lastName}</td>
                    <td>${character.gender}</td>
                    <td>${character.alignment}</td>
                    <td>${character.yearIntroduced}</td>
                    <td>${character.birthDate}</td>
                </tr>`);

                if (character.firstName.toLowerCase().includes(searchWord)) {
                    $row.css({ background: 'darkgreen', color: 'white' })
                }
                $tbody.append($row)
            })
        })
    }



    function buttonA() {
        var $buttonA = $('#button-A');
        $buttonA.on('click', () => {
            var $tbody = $('tbody');
            $tbody.empty();
            var count = 0;

            cache.forEach((character) => {
                var firstLetter = character.LastName[0].toLowerCase();
                var $row = $(`<tr>
                <td>${character.firstName}</td>
                <td>${character.lastName}</td>
                <td>${character.gender}</td>
                <td>${character.alignment}</td>
                <td>${character.yearIntroduced}</td>
                <td>${character.birthDate}</td>
                </tr>`);
                var AM = 'abcdefghklm';
                $tbody.append($row)

                if (AM.includes(firstLetter)) {
                    count = count + 1;
                    $row.show();
                } else {
                    $row.hide();
                }
            })
            $buttonA.text(`A - M (${count})`)
        })
    }



    function buttonZ() {
        var $buttonZ = $('#button-Z');
        $buttonZ.on('click', () => {
            var count = 0
            var $tbody = $('tbody');
            $tbody.empty();

            cache.forEach((character) => {
                var firstLetter = character.LastName[0].toLowerCase();
                var $row = $(`<tr>
                <td>${character.firstName}</td>
                <td>${character.lastName}</td>
                <td>${character.gender}</td>
                <td>${character.alignment}</td>
                <td>${character.birthDate}</td>
                </tr>`);
                var NZ = 'nopqrstyuvwz';
                $tbody.append($row)

                if (NZ.includes(firstLetter)) {
                    count = count + 1;
                    $row.show();
                } else {
                    $row.hide();
                }
            })
            $buttonZ.text(`N - Z (${count})`)
        })
    }


    var compare = {
        name: function(a,b){
            a = a.replace(/^the /i, '');
            b =  b.replace(/^the /i, '');
    
            if (a < b){
                return -1;
            } else {
                return a>b ? 1 : 0;
            }
        },
        duration: function(a,b){
            a = a.split(':');
            b = b.split(':');
    
            a = Number(a[0])*60 + Number(a[1]);
            b = Number(b[0])*60 + Number(b[1]);
    
            return a - b;
    
        },
        date: function(a,b){
            a = new Date(a);
            b = new Date(b);
    
            return a - b;
        }
    
    
    };


    $('.sortable').each(function(){
        var $table = $(this);
        var $tbody = $table.find('tbody');
        var $controls = $table.find('th');
        var rows = $tbody.find('tr').toArray();
    
        $controls.on('click',function(){
            var $header = $(this);
            var order = $header.data('sort');
            var column;
          
            //If selected item has ascending or descending class, reverse contents
            if ($header.is('.ascending') || $header.is('.descending')){
                $header.toggleClass('ascending descending');
               
                $tbody.append(rows.reverse());
                
    
            } else {
                $header.addClass('ascending');
                //Remove asc or desc from all other headers
                $header.siblings().removeClass('ascending descending');
                
                if (compare.hasOwnProperty(order)){
                    column = $controls.index(this);
                 rows.sort(function(a,b){
                        a = $(a).find('td').eq(column).text();
                        b = $(b).find('td').eq(column).text();
                        console.log('a: ',a,'   b: ', b)
                        return  compare[order](a,b);
                        
                        
                    });
                    $tbody.append(rows);
                }
            }
        })
    })

    getAjax();
    searchName();
    buttonA();
    buttonZ();
});


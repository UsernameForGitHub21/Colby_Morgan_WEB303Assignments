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


    getAjax();
    searchName();
    buttonA();
    buttonZ();
});
/*
    Assignment 05
*/

$(document).ready(function () {
    
    class containItem{

        constructor(id, name, desc, cat){
            this.id = id;
            this.name = name;
            this.desc = desc;
            this.cat = cat;
        }

        updateContentIteam(id, name, desc, cat){
            if(this.id === id){
                if(name != null){
                    this.name = name;
                }
                if(desc != null){
                    this.desc = desc;
                }
                if(cat != null){
                    this.cat = cat;
                }
            }
        }

        toString(Item){
            $('div#content-item-list').html('<div class="content-item-wrapper"><div class="content-iteam-' + this.id + '"><h4>' + this.name + '</h4><p>' + this.desc + '</p><div>' + this.cat + '</div></div></div>');
        }

    }

    
    sports = [soccer, basketball, golf, hockey, football];

    $('div#content-item-list').html('<ul><li>' + sports[0] + '</li><li>' + sports[1] + '</li><li>' + sports[2] + '</li><li>' + sports[3] + '</li><li>' + sports[4] + '</li></ul>');
    $('div#content-item-list').css({"border": "5px", "width": "80%", "padding": "20px", "margin-left": "auto", "margin-right": "auto", "margin-top": "10px", "margin-bottom": "10px"});

});



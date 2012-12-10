define(["jquery", "../user","../persistent","../achievements"], function($, User, Persistent, Achievements){
        var ruleslist = {},
            counter = 0,
            friends = [],
            achievements = [];

	return function(){

        var $mainframe = $("#main-frame");
        $mainframe.find(".friend-display li div").button();
        $mainframe.find(".friend-display").selectable({
            stop: function() {
                
                friends = [];
                $(this).children().removeClass("ui-selected");

                $( "li.ui-selected", this ).each(function(){
                    friends.push($(this).attr("tag"));
                    $(this).children().addClass("ui-selected");
                });
            }
        });

		$( "#from" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            onSelect: function( selectedDate ) {
                $( "#to" ).datepicker( "option", "minDate", selectedDate );
            }
        });
        $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            onSelect: function( selectedDate ) {
                $( "#from" ).datepicker( "option", "maxDate", selectedDate );
            }
        });

        $("#add-rule-button").click(function(){
            var rule = $("#rule-input").val();
            $("#rule-input").val("");
            ruleslist[counter] = rule;
            $new = $("<div style='position: relative'/>");
            $button = $('<button class="removerule"/>').html("remove").attr("arr-id",counter);
            $li = $("<li/>").append(rule, $button);
            $("#rule-box").append($new.html($li));
            counter++;
        });

        $('#rule-box button.removerule').live('click', function(){
                $(this).parent().remove();
                var id = $(this).attr("arr-id");
                ruleslist[id] = null;
                counter--;
                console.log(rules);
            });

        $("#achievement-box").click(function(){
            Achievements.createAchievement(function(e){
                achievements.push(e);
            });
        }).button();

        $("#create-button").click(function(){
            var name = $("#name-input").val();
            var description = $("#description-input").val();
            var arrRules = [];
            for(var x in ruleslist){
                arrRules.push(ruleslist[x]);
            }
            var rules = arrRules;
            var users = friends;
            var public = false;
            if($('#public-input').is(":checked")){ public = true; }
            var date = $("#from").val()+" - " +$("#to").val();
            Persistent.createChallenge(name,description,rules,users,public,date,achievements);
            return false;
        });

        //Disable the enter key.
        $('input').keypress(function (e) {
            var code = null;
            code = (e.keyCode ? e.keyCode : e.which);
            return (code == 13) ? false : true;
        });
	};
});

/* Achvievement
{
    name: string,
    description: string,
    image: string,
    color: string
}
*/
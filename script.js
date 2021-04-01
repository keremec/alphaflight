<script type="text/javascript">
    
        function estimate(){
            var x = prompt("Enter your estimate:");
            var out;
            
            if((x == null)||(x == '')){out = "Did you forget<br>to give input?";}
            else{ out = "Estimated delay is:<br>" + x + " mins"; }
            
            document.getElementById("display-estimate").innerHTML="<p class='estimate-header'>" + out +"</p>";
        }
    
    </script>

<script type="text/javascript">
        
        function teoman(){
            document.getElementById("hall").innerHTML = "<div class='hall-box'><div class='hall-member-img' style='background-image: url(member-img/teoman.jpg);'></div><div class='hall-button-box'><button class='hall-button' style='float: left;' onclick='zeynep()'>&lt;</button><button class='hall-button' style='float: right;' onclick='dennis()'>&gt;</button></div><div class='hall-member-info'><h3 class='hall-member-role'>Lead Developer<br>Teoman Berkay AYAZ</h3></div></div>"
        }
        
        function dennis(){
            document.getElementById("hall").innerHTML = "<div class='hall-box'><div class='hall-member-img' style='background-image: url(member-img/def-avatar.jpg);'></div><div class='hall-button-box'><button class='hall-button' style='float: left;' onclick='teoman()'>&lt;</button><button class='hall-button' style='float: right;' onclick='kerem()'>&gt;</button></div><div class='hall-member-info'><h3 class='hall-member-role'>Python Developer<br>Dennis Brezina</h3></div></div>"
        }
        
        function kerem(){
            document.getElementById("hall").innerHTML = "<div class='hall-box'><div class='hall-member-img' style='background-image: url(member-img/def-avatar.jpg);'></div><div class='hall-button-box'><button class='hall-button' style='float: left;' onclick='dennis()'>&lt;</button><button class='hall-button' style='float: right;' onclick='zeynep()'>&gt;</button></div><div class='hall-member-info'><h3 class='hall-member-role'>Project Tester<br>Kerem Safa Dirican</h3></div></div>"
        }
        
        function zeynep(){
            document.getElementById("hall").innerHTML = "<div class='hall-box'><div class='hall-member-img' style='background-image: url(member-img/def-avatar.jpg);'></div><div class='hall-button-box'><button class='hall-button' style='float: left;' onclick='kerem()'>&lt;</button><button class='hall-button' style='float: right;' onclick='teoman()'>&gt;</button></div><div class='hall-member-info'><h3 class='hall-member-role'>Project Documentator<br>Zeynep Simge Sedef</h3></div></div>"
        }
        
        </script>
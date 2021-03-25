<script type="text/javascript">
        function delay_out() {
            var y = prompt("Enter Delay:");
            var out;
            if((y==null) || (y=='')){
                out = "Did you forget <br>to give input?"
            }
            else{out="Estimated Delay is:<br>" + y + " min.";}
        document.getElementById("delay-out").innerHTML = "<h3 class='delay-header' style='margin-top: 35px;'>"+ out +"</h3>";
        
}
    </script>

<script type="text/javascript">
        
    function teoman(){
        document.getElementById("gallery").innerHTML = "<div class='gallery-box'><button class='gallery-button' style='float: left;' onclick='zeynep()'> &lt; </button><div class='gallery-content'><img class='gallery-img' src='teoman.jpg'><div class='gallery-text-box'><h2 class='gallery-header'>Teoman Berkay Ayaz<br>Lead Developer</h2><p class='gallery-text'>&nbsp; &nbsp; <em>\"I do not understand why my teammates did not want their pictures on the website. I think its... pretty \"FLY\". Get it?\"</em></p><p class='gallery-contact'>Contact Info: tberkayayaz@gmail.com</p></div></div><button class='gallery-button' onclick='dennis()' style='float: right;'> &gt; </button></div>";
    }
        
    function dennis(){
        document.getElementById("gallery").innerHTML = "<div class='gallery-box'><button class='gallery-button' style='float: left;' onclick='teoman()'> &lt; </button><div class='gallery-content'><img class='gallery-img' src='def-avatar.jpg'><div class='gallery-text-box'><h2 class='gallery-header'>Dennis Brezina<br>Python Developer</h2><p class='gallery-text'>&nbsp; &nbsp; <em>\"Did not wish to share a quote\"</em></p><p class='gallery-contact'>Contact Info: dennisbrezina0@gmail.com</p></div></div><button class='gallery-button' onclick='kerem()' style='float: right;'> &gt; </button></div>";
    }
        
    function kerem(){
        document.getElementById("gallery").innerHTML = "<div class='gallery-box'><button class='gallery-button' style='float: left;' onclick='dennis()'> &lt; </button><div class='gallery-content'><img class='gallery-img' src='def-avatar.jpg'><div class='gallery-text-box'><h2 class='gallery-header'>Kerem Safa Dirican<br>Project Tester</h2><p class='gallery-text'>&nbsp; &nbsp; <em>\"Did not wish to share a quote\"</em></p><p class='gallery-contact'>Contact Info: Did not give info</p></div></div><button class='gallery-button' onclick='zeynep()' style='float: right;'> &gt; </button></div>";
    }
        
    function zeynep(){
        document.getElementById("gallery").innerHTML = "<div class='gallery-box'><button class='gallery-button' style='float: left;' onclick='kerem()'> &lt; </button><div class='gallery-content'><img class='gallery-img' src='def-avatar.jpg'><div class='gallery-text-box'><h2 class='gallery-header'>Zeynep Simge Sedef<br>Project Documentator</h2><p class='gallery-text'>&nbsp; &nbsp; <em>\"Did not wish to share a quote\"</em></p><p class='gallery-contact'>Contact Info: Did not give info</p></div></div><button class='gallery-button' onclick='teoman()' style='float: right;'> &gt; </button></div>";
    }
    
    </script>
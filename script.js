
        function delay_out() {
            var y = prompt("Enter Delay:");
            var out;
            if(y==null){
                out = "Did you forget <br>to give input?"
            }
            else if(y.type != Number.type){
                out = "Your input <br>should be a number."
            }
            else{out="Estimated Delay is About:<br>" + y + " min.";}
        document.getElementById("delay-in-out").innerHTML = "<label class='form-control-lg' style='background-color: #70ACB1; color: #59606D; margin-top: 20px;'>"+ out +"</label><br><button type='button' style='height:125px ;width: 125px; background-color: #cd5c5c; color: #59606D; margin-top: 20px; padding: 25px; border-style:solid; border-width: thin; border-color: black; border-radius: 50%;' onclick='delay_out()'>Get New<br>Estimate</button>";
}

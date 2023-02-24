// Write your JavaScript code here.
// Remember to pay attention to page loading!
document.addEventListener("DOMContentLoaded", function() {
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    

    let rocketImg = document.getElementById("rocket");
    rocketImg.style.position = "absolute";
    rocketImg.style.left = "0px";
    rocketImg.style.bottom = "0px";


    takeOffButton.addEventListener("click", function(){
        let launchReady = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (launchReady === true) {
            document.getElementById("flightStatus").textContent = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").textContent = "10000";
        };
    });

    landingButton.addEventListener("click", function (){
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").textContent = "The shuttle has landed."
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").textContent = "0";
    });

    abortButton.addEventListener("click", function(){
        let abortStatus = window.confirm("Confirm that you want to abort the mission.");

        if (abortStatus === true) {
            document.getElementById("flightStatus").textContent = "Mission Aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "red";
            document.getElementById("spaceShuttleHeight").textContent = "0";
        };
    });

    upButton.addEventListener("click", function (){
        let alt = parseInt(document.getElementById("spaceShuttleHeight").textContent);
        alt += 10000;
        document.getElementById("spaceShuttleHeight").textContent = String(alt);

        rocketImg.style.bottom = String(parseInt(rocketImg.style.bottom) + 10)+"px";
    });

    
    downButton.addEventListener("click", function(){
        let alt = parseInt(document.getElementById("spaceShuttleHeight").textContent);
        alt += -10000;
        document.getElementById("spaceShuttleHeight").textContent = String(alt);

        rocketImg.style.bottom = String(parseInt(rocketImg.style.bottom) - 10)+"px";
    });
    
    leftButton.addEventListener("click", function(){
        rocketImg.style.left = String(parseInt(rocketImg.style.left) - 10)+"px";
    });

    rightButton.addEventListener("click", function(){
        rocketImg.style.left = String(parseInt(rocketImg.style.left) + 10)+"px";
    });
});
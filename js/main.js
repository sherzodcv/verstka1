function fuu(){
    

    var turi = document.getElementById("main2-id").getAttribute("class")

    if( turi === 'noner' ){
        document.getElementById("main2-id").setAttribute("class", "main-section2")
    }else{
        document.getElementById("main2-id").setAttribute("class", "noner") // Set qo'shish
    }
}
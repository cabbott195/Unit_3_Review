function test(){
    //input NO ERRORS BETWEEN THESE
    var input = "rthkunfaakmwmush qxlnvjguikqcyfzt sleaoasjspnjctqt lactpmehuhmzwfjl bvggvrdgjcspkkyj nwaceixfiasuzyoz hsapdhrxlqoiumqw lsitcmhlehasgejo hksifrqlsiqkzyex dfwuxtexmnvjyxqc iawwfwylyrcbxwak mamtkmvvaeeifnve qiqtuihvsaeebjkd skerkykytazvbupg kgnxaylpgbdzedoo plzkdktirhmumcuf pexcckdvsrahvbop jpocepxixeqjpigq vnsvxizubavwrhtc lqveclebkwnajppk ikbzllevuwxscogb xvfmkozbxzfuezjt ukeazxczeejwoxli tvtnlwcmhuezwney hoamfvwwcarfuqro wkvnmvqllphnsbnf kiggbamoppmfhmlf ughbudqakuskbiik avccmveveqwhnjdx llhqxueawluwmygt mgkgxnkunzbvakiz fwjbwmfxhkzmwtsq kzmtudrtznhutukg gtvnosbfetqiftmf aoifrnnzufvhcwuy cldmefgeuwlbxpof xdqfinwotmffynqz pajfvqhtlbhmyxai jkacnevnrxpgxqal esxqayxzvortsqgz glfoarwvkzgybqlz xdjcnevwhdfsnmma jyjktscromovdchb pvguwmhdvfxvapmz iheglsjvxmkzgdbu lwjioxdbyhqnwekv zcoguugygkwizryj ogvnripxxfeqpxdh hkvajhsbfnzsygbm cnjqeykecopwabpq wojjtbcjinoiuhsj kpwpvgxbyzczdzjq wrvhylisemlewgzk uiezkmnhilfzahtm mucteynnuxpxzmvt zaiwbgxefusfhmst apptbogpxivjwink qryboarjtwjhjgjb irehxupgyseaahzd fobstqxguyubggoh ysriumfghtxtfxwe auchdmasvfeliptw mztuhefcrnknyrdl tyjmkhihbwabjtaa yquzkdtgsljkaebw almvdvofjtkyzbmd emqftiuqqpdwwbrv hrrhmqfpepvbawvw atrkgykycvgxbpyb dhthetnealksbdan zzqafhgicubptiyo qdtaieaziwhbttnw kyskgapdgqrtrefw edwzlpqztpydmdlr awszjnlmvlyqsuvl kcrtmtshtsgixvcp jtaskgkijivbbkri mmggfwapsetemiuj itagrrnjbnmhgppd uqmbezechbrpbnqq nnyimvtascflpzsa knqeimypkdttyudj vgoiyvtvegwyxjjd qubzdxsbecktzrho zehojtvktsbbxijb xepmjrekwcgoxyoh bnptxnocbpbqbyeq sfvynsywscbnymos dsltfbpcmffbluba kncrlzlmkikylppa" 
    //input NO ERRORS BETWEEN THESE

    //there are many errors in here, please read the comments and follow the 
    //errors that we went over in class. I will also warn that I added errors 
    //in the HTML this time as well =) good luck!

    //set where the output will go into the HTML
    var output = document.getElementById("output");

    //resets the ans to 0 incase the button is pressed multiple times
    var ans = 0;
    
    //breaks up the input based on spaces
    input = input.split(" ");

    //this for loop will go through every input and check if there is a pair of letters that are the same
    //PLEASE DO NOT ADD MATH OR CHANGE ANY OF THE VARIABLES >>> THERE ARE NO LOGICAL ERRORS BELOW THIS POINT
    for(var x = 0; x < input.length; x++){
        var pair = false;
        var doubleLetters = false;

        //this loop goes through every letter in every input
        for(var i =0; i < input[x].length; i++){

            //compares every 2 letters to every other 2 letters and checks for a pair
            for(var j = i+2; j < input[x].length; j++){
                if(input[x].slice(i, i+2) === input[x].slice(j, j+2)){
                    pair = true;
                }
            }

            //check if it has a double separated by one letter
            if(input[x].charAt(i)===input[x].charAt(i+2)){
                doubleLetters = true;
            }
        }

        //if it has a pair and double then count as a pass.
        if(doubleLetters === true && pair === true){
            ans ++;
        }
    }
    output.innerHTML = ans;
}

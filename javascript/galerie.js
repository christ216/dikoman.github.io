$(document).ready(function() {  
    
    /*$('.photoFX').fadeIn(3000); */   
    
    $("#menuToggle").click(function() {
        $("#blackishBackground").toggle();
    });
    
         $(".photoFX").click(function() {
             $("#imageViewer").toggle();
             $('body').css('overflow', 'hidden');
         });
    
    
    
    
    
    
    
    $(".photo1").click(function() {
        $('#container').fadeOut(1000);
        $('#container4').fadeTo(1000, 1);
        $('#container4').css("z-index", 11);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;   
    });
    
                    $("#container4 .questionDrainage").click(function() {
                        $('.conteneurInfoDrainage').css('visibility', 'visible');
                        $('.conteneurInfoDrainage').fadeTo(1000, 1);
                        $('.conteneurInfoDrainage').css("z-index", 18);
                        
                     });
    
                     $(".infoDrainage p:nth-child(1)").click(function() {
                        $('.conteneurInfoDrainage').css('visibility', 'hidden');
                        $('.conteneurInfoDrainage').fadeTo(1000, 0);
                        $('.conteneurInfoDrainage').css("z-index", 1);
                     });
    
        $("#container4 .retour p:nth-child(2)").click(function() {
              /* Au click du bouton retour dans la section Kinésithérapie, on nous ramène aux services de base + On arrive en haut de la page */
              $('#container').fadeIn(1000);
              $('#container4').fadeTo(1000, 0);
              $('#container4').css("z-index", 8);
              document.body.scrollTop = 0; 
              document.documentElement.scrollTop = 0; 
          });
    
    
    
    
    
    
    
    
     $(".photo2").click(function() {
        $('#container').fadeOut(1000);
        $('#containerPrix').fadeTo(1000, 1);
        
        $('#containerPrix').css("z-index", 10);
        $('#containerPrix #retourDeAcupuncture').css("z-index", 11);
        
        /* On fait apparaître les éléments du service choisi */
        $('#containerPrix #retourDeAcupuncture').fadeTo(1000, 1);
        $('#containerPrix .photo2').fadeIn(1000);
        $('.infoPrixAcupuncture').fadeIn(1000);
        
        /* On nous amène en haut de la page choisi*/
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;    
    });
    
                     $("#containerPrix .infoPrixAcupuncture p:nth-child(3) span").click(function() {
                        $('.conteneurMarcoDyotte').css('visibility', 'visible');
                        $('.conteneurMarcoDyotte').fadeTo(1000, 1);
                        $('.conteneurMarcoDyotte').css("z-index", 18);
                        
                     });
    
                     $(".infoMarcoDyotte p:nth-child(1)").click(function() {
                        $('.conteneurMarcoDyotte').css('visibility', 'hidden');
                        $('.conteneurMarcoDyotte').fadeTo(1000, 0);
                        $('.conteneurMarcoDyotte').css("z-index", 1);
                     });
    
            $("#retourDeAcupuncture").click(function() {
               /* On enlève le service choisi pour arriver à la section Kinésithérapie */
               $('#containerPrix').fadeTo(1000, 0);
               $('#container').fadeIn(1000);
               
               $('#containerPrix').css("z-index", 8);
               $('#containerPrix #retourDeAcupuncture').css("z-index", 8);
               
               $('#containerPrix #retourDeAcupuncture').fadeTo(1000, 0);
               $('#containerPrix .photo2').fadeOut(1000);
               $('.infoPrixAcupuncture').fadeOut(1000);
               
               document.body.scrollTop = 0; 
               document.documentElement.scrollTop = 0; 
           });
    
    
    
    
    
    
    
    
     $(".photo3").click(function() {
        $('#container').fadeOut(1000);
        $('#container3').fadeTo(1000, 1);
        $('#container3').css("z-index", 11);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;   
    });
    
          $("#container3 .retour p:nth-child(2)").click(function() {
              /* Au click du bouton retour dans la section Kinésithérapie, on nous ramène aux services de base + On arrive en haut de la page */
              $('#container').fadeIn(1000);
              $('#container3').fadeTo(1000, 0);
              $('#container3').css("z-index", 8);
              document.body.scrollTop = 0; 
              document.documentElement.scrollTop = 0; 
          });
  
    
    
    
    
    
    
    
     $(".photo4").click(function() {
        /* Au click de la section Kinésithérapie, on enlève la section services de base et on affiche les éléments de Kinésithérapie + On arrive en haut de la page */
        $('#container').fadeOut(1000);
        $('#container2').fadeTo(1000, 1);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;   
    });
    
                  $("#container2 .questionKinesitherapie").click(function() {
                        $('.conteneurInfoKine').css('visibility', 'visible');
                        $('.conteneurInfoKine').fadeTo(1000, 1);
                        $('.conteneurInfoKine').css("z-index", 18);
                        
                     });
    
                     $(".infoKine p:nth-child(1)").click(function() {
                        $('.conteneurInfoKine').css('visibility', 'hidden');
                        $('.conteneurInfoKine').fadeTo(1000, 0);
                        $('.conteneurInfoKine').css("z-index", 1);
                     });
    
          $("#container2 .retour p:nth-child(2)").click(function() {
              /* Au click du bouton retour dans la section Kinésithérapie, on nous ramène aux services de base + On arrive en haut de la page */
              $('#container').fadeIn(1000);
              $('#container2').fadeTo(1000, 0);
              document.body.scrollTop = 0; 
              document.documentElement.scrollTop = 0; 
          });
    
    
    
    
    
    
    
    
     $(".photo5").click(function() {
        $('#container').fadeOut(1000);
        $('#containerPrix').fadeTo(1000, 1);
        
        $('#containerPrix').css("z-index", 10);
        $('#containerPrix #retourDeOsteopathie').css("z-index", 11);
        
        /* On fait apparaître les éléments du service choisi */
        $('#containerPrix #retourDeOsteopathie').fadeTo(1000, 1);
        $('#containerPrix .photo5').fadeIn(1000);
        $('.infoPrixOsteopathie').fadeIn(1000);
        
        /* On nous amène en haut de la page choisi*/
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;    
    });
    
                    $("#containerPrix .infoPrixOsteopathie p:nth-child(3) span").click(function() {
                           $('.conteneurMarcoDyotte').css('visibility', 'visible');
                           $('.conteneurMarcoDyotte').fadeTo(1000, 1);
                           $('.conteneurMarcoDyotte').css("z-index", 17);
                        });
        
                        $(".infoMarcoDyotte p:nth-child(1)").click(function() {
                           $('.conteneurMarcoDyotte').css('visibility', 'hidden');
                           $('.conteneurMarcoDyotte').fadeTo(1000, 0);
                           $('.conteneurMarcoDyotte').css("z-index", 1);
                        });
    
               $("#retourDeOsteopathie").click(function() {
               /* On enlève le service choisi pour arriver à la section Kinésithérapie */
               $('#containerPrix').fadeTo(1000, 0);
               $('#container').fadeIn(1000);
               
               $('#containerPrix').css("z-index", 8);
               $('#containerPrix #retourDeOsteopathie').css("z-index", 8);
               
               $('#containerPrix #retourDeOsteopathie').fadeTo(1000, 0);
               $('#containerPrix .photo5').fadeOut(1000);
               $('.infoPrixOsteopathie').fadeOut(1000);
               
               document.body.scrollTop = 0; 
               document.documentElement.scrollTop = 0; 
           });
    
    
    
    
    
    
   
    $(".photo6").click(function() {
        /* On enlève la section Kinésithérapie pour arriver dans un service précis */
        $('#container2').fadeTo(1000, 0);
        $('#containerPrix').fadeTo(1000, 1);
        
        /* On fait passer le service à l'avant dans l'index pour bien naviguer dedans */
        $('#containerPrix').css("z-index", 10);
        $('#containerPrix #retourDeEnveloppementArticulaire').css("z-index", 11);
        
        /* On fait apparaître les éléments du service choisi */
        $('#containerPrix #retourDeEnveloppementArticulaire').fadeTo(1000, 1);
        $('#containerPrix .photo6').fadeIn(1000);
        $('.infoPrixEnveloppementArticulaire').fadeIn(1000);
        
        /* On nous amène en haut de la page choisi*/
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;    
    });
    
           $("#retourDeEnveloppementArticulaire").click(function() {
               /* On enlève le service choisi pour arriver à la section Kinésithérapie */
               $('#containerPrix').fadeTo(1000, 0);
               $('#container2').fadeTo(1000, 1);
               
               $('#containerPrix').css("z-index", 8);
               $('#containerPrix #retourDeEnveloppementArticulaire').css("z-index", 8);
               
               $('#containerPrix #retourDeEnveloppementArticulaire').fadeTo(1000, 0);
               $('#containerPrix .photo6').fadeOut(1000);
               $('.infoPrixEnveloppementArticulaire').fadeOut(1000);
               
               document.body.scrollTop = 0; 
               document.documentElement.scrollTop = 0; 
           });
    
    
    
    
    
    
    
    
     $(".photo7").click(function() {
        $('#container2').fadeTo(1000, 0);
        $('#containerPrix').fadeTo(1000, 1);
        
        $('#containerPrix').css("z-index", 10);
        $('#containerPrix #retourDeSessionExercice').css("z-index", 11);
        
        $('#containerPrix #retourDeSessionExercice').fadeTo(1000, 1);
        $('#containerPrix .photo7').fadeIn(1000);
        $('.infoPrixSessionExercice').fadeIn(1000);
        
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;     
    });
    
            $("#retourDeSessionExercice").click(function() {
               $('#containerPrix').fadeTo(1000, 0);
               $('#container2').fadeTo(1000, 1);
               
               $('#containerPrix').css("z-index", 8);
               $('#containerPrix #retourDeSessionExercice').css("z-index", 8);
               
               $('#containerPrix #retourDeSessionExercice').fadeTo(1000, 0);
               $('#containerPrix .photo7').fadeOut(1000);
               $('.infoPrixSessionExercice').fadeOut(1000);
               
               document.body.scrollTop = 0; 
               document.documentElement.scrollTop = 0; 
           });
    
    
    
    
    
    
            
    
     $(".photo8").click(function() {
        $('#container2').fadeTo(1000, 0);
        $('#containerPrix').fadeTo(1000, 1);
        
        $('#containerPrix').css("z-index", 10);
        $('#containerPrix #retourDeAnalysePosturale').css("z-index", 11);
        
        $('#containerPrix #retourDeAnalysePosturale').fadeTo(1000, 1);
        $('#containerPrix .photo8').fadeIn(1000);
        $('.infoPrixAnalysePosturale').fadeIn(1000);
        
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;   
    });
    
            $("#retourDeAnalysePosturale").click(function() {
               $('#containerPrix').fadeTo(1000, 0);
               $('#container2').fadeTo(1000, 1);
               
               $('#containerPrix').css("z-index", 8);
               $('#containerPrix #retourDeAnalysePosturale').css("z-index", 8);
               
               $('#containerPrix #retourDeAnalysePosturale').fadeTo(1000, 0);
               $('#containerPrix .photo8').fadeOut(1000);
               $('.infoPrixAnalysePosturale').fadeOut(1000);
               
               document.body.scrollTop = 0; 
               document.documentElement.scrollTop = 0; 
           });
    
    
    
    
    
    
    
        $(".photo9").click(function() {
           $('#container3').fadeTo(1000, 0);
           $('#containerPrix').fadeTo(1000, 1);
           
           $('#containerPrix').css("z-index", 11);
           $('#containerPrix #retourDePierresChaudes').css("z-index", 12);
           
           $('#containerPrix #retourDePierresChaudes').fadeTo(1000, 1);
           $('#containerPrix .photo9').fadeIn(1000);
           $('.infoPrixPierresChaudes').fadeIn(1000);
           
           document.body.scrollTop = 0; 
           document.documentElement.scrollTop = 0;   
    });
    
            $("#retourDePierresChaudes").click(function() {
               $('#containerPrix').fadeTo(1000, 0);
               $('#container3').fadeTo(1000, 1);
               
               $('#containerPrix').css("z-index", 8);
               $('#containerPrix #retourDePierresChaudes').css("z-index", 8);
               
               $('#containerPrix #retourDePierresChaudes').fadeTo(1000, 0);
               $('#containerPrix .photo9').fadeOut(1000);
               $('.infoPrixPierresChaudes').fadeOut(1000);
               
               document.body.scrollTop = 0; 
               document.documentElement.scrollTop = 0; 
           });
    
    
    
    
    
    
    
    
        $(".photo10").click(function() {
           $('#container3').fadeTo(1000, 0);
           $('#containerPrix').fadeTo(1000, 1);
           
           $('#containerPrix').css("z-index", 11);
           $('#containerPrix #retourDeFemmeEnceinte').css("z-index", 12);
           
           $('#containerPrix #retourDeFemmeEnceinte').fadeTo(1000, 1);
           $('#containerPrix .photo10').fadeIn(1000);
           $('.infoPrixFemmeEnceinte').fadeIn(1000);
           
           document.body.scrollTop = 0; 
           document.documentElement.scrollTop = 0;   
    });
    
            $("#retourDeFemmeEnceinte").click(function() {
               $('#containerPrix').fadeTo(1000, 0);
               $('#container3').fadeTo(1000, 1);
               
               $('#containerPrix').css("z-index", 8);
               $('#containerPrix #retourDeFemmeEnceinte').css("z-index", 8);
               
               $('#containerPrix #retourDeFemmeEnceinte').fadeTo(1000, 0);
               $('#containerPrix .photo10').fadeOut(1000);
               $('.infoPrixFemmeEnceinte').fadeOut(1000);
               
               document.body.scrollTop = 0; 
               document.documentElement.scrollTop = 0; 
           });
    
    
    
    
    
    
    
        $(".photo11").click(function() {
           $('#container3').fadeTo(1000, 0);
           $('#containerPrix').fadeTo(1000, 1);
           
           $('#containerPrix').css("z-index", 11);
           $('#containerPrix #retourDeSuedoisTherapeutique').css("z-index", 12);
           
           $('#containerPrix #retourDeSuedoisTherapeutique').fadeTo(1000, 1);
           $('#containerPrix .photo11').fadeIn(1000);
           $('.infoPrixSuedoisTherapeutique').fadeIn(1000);
           
           document.body.scrollTop = 0; 
           document.documentElement.scrollTop = 0;   
    });
    
            $("#retourDeSuedoisTherapeutique").click(function() {
               $('#containerPrix').fadeTo(1000, 0);
               $('#container3').fadeTo(1000, 1);
               
               $('#containerPrix').css("z-index", 8);
               $('#containerPrix #retourDeSuedoisTherapeutique').css("z-index", 8);
               
               $('#containerPrix #retourDeSuedoisTherapeutique').fadeTo(1000, 0);
               $('#containerPrix .photo11').fadeOut(1000);
               $('.infoPrixSuedoisTherapeutique').fadeOut(1000);
               
               document.body.scrollTop = 0; 
               document.documentElement.scrollTop = 0; 
           });
    
    
    
    
    
    
    
    
    
        $(".photo12").click(function() {
           $('#container3').fadeTo(1000, 0);
           $('#containerPrix').fadeTo(1000, 1);
           
           $('#containerPrix').css("z-index", 11);
           $('#containerPrix #retourDeBebe').css("z-index", 12);
           
           $('#containerPrix #retourDeBebe').fadeTo(1000, 1);
           $('#containerPrix .photo12').fadeIn(1000);
           $('.infoPrixBebe').fadeIn(1000);
           
           document.body.scrollTop = 0; 
           document.documentElement.scrollTop = 0;   
    });
    
            $("#retourDeBebe").click(function() {
               $('#containerPrix').fadeTo(1000, 0);
               $('#container3').fadeTo(1000, 1);
               
               $('#containerPrix').css("z-index", 8);
               $('#containerPrix #retourDeBebe').css("z-index", 8);
               
               $('#containerPrix #retourDeBebe').fadeTo(1000, 0);
               $('#containerPrix .photo12').fadeOut(1000);
               $('.infoPrixBebe').fadeOut(1000);
               
               document.body.scrollTop = 0; 
               document.documentElement.scrollTop = 0; 
           });
    
    
    
    
    
    
    
    
    
        $(".photo13").click(function() {
           $('#container4').fadeTo(1000, 0);
           $('#containerPrix').fadeTo(1000, 1);
           
           $('#containerPrix').css("z-index", 11);
           $('#containerPrix #retourDeEnveloppementCorporel').css("z-index", 12);
           
           $('#containerPrix #retourDeEnveloppementCorporel').fadeTo(1000, 1);
           $('#containerPrix .photo13').fadeIn(1000);
           $('.infoPrixEnveloppementCorporel').fadeIn(1000);
           
           document.body.scrollTop = 0; 
           document.documentElement.scrollTop = 0;   
    });
    
            $("#retourDeEnveloppementCorporel").click(function() {
               $('#containerPrix').fadeTo(1000, 0);
               $('#container4').fadeTo(1000, 1);
               
               $('#containerPrix').css("z-index", 8);
               $('#containerPrix #retourDeEnveloppementCorporel').css("z-index", 8);
               
               $('#containerPrix #retourDeEnveloppementCorporel').fadeTo(1000, 0);
               $('#containerPrix .photo13').fadeOut(1000);
               $('.infoPrixEnveloppementCorporel').fadeOut(1000);
               
               document.body.scrollTop = 0; 
               document.documentElement.scrollTop = 0; 
           });
    
    
    
    
    
    
    
        $(".photo14").click(function() {
           $('#container4').fadeTo(1000, 0);
           $('#containerPrix').fadeTo(1000, 1);
           
           $('#containerPrix').css("z-index", 11);
           $('#containerPrix #retourDeExfoliationCorporelle').css("z-index", 12);
           
           $('#containerPrix #retourDeExfoliationCorporelle').fadeTo(1000, 1);
           $('#containerPrix .photo14').fadeIn(1000);
           $('.infoPrixExfoliationCorporelle').fadeIn(1000);
           
           document.body.scrollTop = 0; 
           document.documentElement.scrollTop = 0;   
    });
    
            $("#retourDeExfoliationCorporelle").click(function() {
               $('#containerPrix').fadeTo(1000, 0);
               $('#container4').fadeTo(1000, 1);
               
               $('#containerPrix').css("z-index", 8);
               $('#containerPrix #retourDeExfoliationCorporelle').css("z-index", 8);
               
               $('#containerPrix #retourDeExfoliationCorporelle').fadeTo(1000, 0);
               $('#containerPrix .photo14').fadeOut(1000);
               $('.infoPrixExfoliationCorporelle').fadeOut(1000);
               
               document.body.scrollTop = 0; 
               document.documentElement.scrollTop = 0; 
           });
        
    
    
    
    
    
    
        $(".photo15").click(function() {
           $('#container4').fadeTo(1000, 0);
           $('#containerPrix').fadeTo(1000, 1);
           
           $('#containerPrix').css("z-index", 11);
           $('#containerPrix #retourDeDrainageLymphatique').css("z-index", 12);
           
           $('#containerPrix #retourDeDrainageLymphatique').fadeTo(1000, 1);
           $('#containerPrix .photo15').fadeIn(1000);
           $('.infoPrixDrainageLymphatique').fadeIn(1000);
           
           document.body.scrollTop = 0; 
           document.documentElement.scrollTop = 0;   
    });
    
            $("#retourDeDrainageLymphatique").click(function() {
               $('#containerPrix').fadeTo(1000, 0);
               $('#container4').fadeTo(1000, 1);
               
               $('#containerPrix').css("z-index", 8);
               $('#containerPrix #retourDeDrainageLymphatique').css("z-index", 8);
               
               $('#containerPrix #retourDeDrainageLymphatique').fadeTo(1000, 0);
               $('#containerPrix .photo15').fadeOut(1000);
               $('.infoPrixDrainageLymphatique').fadeOut(1000);
               
               document.body.scrollTop = 0; 
               document.documentElement.scrollTop = 0; 
           });
    
/*------------------------------------------------------------------------------------*/
   
    
    $(function(){
        var $w = $(window),
            $menu = $('.topnav'),
            $logo = $('.logoTxtNav'),
            $text = $('.textePresentation'),
            $spans = $('.spans'),
            distance = 1;
        
        $w.on('scroll', function () {
            $menu[($w.scrollTop() > distance ? 'fadeOut' : 'fadeIn')](500);
        });
    
        $menu[($w.scrollTop() > distance ? 'hide' : 'show')]();
            
        $w.on('scroll', function () {
            $logo[($w.scrollTop() > distance ? 'fadeOut' : 'fadeIn')](100);
        });
    
        $logo[($w.scrollTop() > distance ? 'hide' : 'show')]();
            
        $w.on('scroll', function () {
            $text[($w.scrollTop() > distance ? 'fadeOut' : 'fadeIn')](100);
        });
    
        $text[($w.scrollTop() > distance ? 'hide' : 'show')]();
        
        $w.on('scroll', function () {
            $spans[($w.scrollTop() > distance ? 'fadeOut' : 'fadeIn')](100);
        });
    
        $spans[($w.scrollTop() > distance ? 'hide' : 'show')]();
    });
    
});
  
    
/*------------------------------------------------------------------------------------*/

/*
Not a super optimized galery as it need a new script 
for ever category of pictures, total of 8 different scripts and initiations.
Might upgrade later..
*/   

/*
var gauche = document.getElementById("gauche");
                
    gauche.addEventListener( "click", function() {
                                        afficheImage(1);
                                        });
                
var droite = document.getElementById("droite");
                
    droite.addEventListener( "click", function() {
                                        afficheImage(0);
                                        }); 
    

var gauche1 = document.getElementById("gauche1");
                
    gauche1.addEventListener( "click", function() {
                                        afficheImage1(1);
                                        });
                
var droite1 = document.getElementById("droite1");
                
    droite1.addEventListener( "click", function() {
                                        afficheImage1(0);
                                        }); 
    
    
});
*/

/*------------------------------------------------------------------------------------*/

/*
 function afficheImage(iDir1) {
        var iNumImg = parseInt(document.getElementById("1photo1").dataset.index);
        var aImg = document.getElementById('1photo1').dataset.liste.split(",");
        var oImg = document.getElementById("imageSlide");
        var sSrc = document.getElementById("imageSlide").getAttribute("src");	
        
        if(iDir1 == 1){

            if(iNumImg == aImg.length - aImg.length){
            iNumImg = aImg.length-1;
            document.getElementById('1photo1').dataset.index = iNumImg;
            oImg.setAttribute("src", aImg[iNumImg]);
            }else{ 
            iNumImg -= 1;  
            document.getElementById('1photo1').dataset.index = iNumImg;
            oImg.setAttribute("src", aImg[iNumImg]);
            }
    
        }
            
        if(iDir1 == 0){
        
            if(iNumImg == aImg.length-1){
            iNumImg = aImg.length - aImg.length;
            document.getElementById('1photo1').dataset.index = iNumImg;
            oImg.setAttribute("src", aImg[iNumImg]);
            }else{     
            iNumImg += 1;  
            document.getElementById('1photo1').dataset.index = iNumImg;
            oImg.setAttribute("src", aImg[iNumImg]);
            }
            
     }
     return true
 }

 function afficheImage1(iDir) {
        var iNumImg = parseInt(document.getElementById("1photo2").dataset.index1);
        var aImg = document.getElementById('1photo2').dataset.liste1.split(",");
        var oImg = document.getElementById("imageSlide");
        var sSrc = document.getElementById("imageSlide").getAttribute("src");	
        
        if(iDir == 1){

            if(iNumImg == aImg.length - aImg.length){
            iNumImg = aImg.length-1;
            document.getElementById('1photo2').dataset.index = iNumImg;
            oImg.setAttribute("src", aImg[iNumImg]);
            }else{ 
            iNumImg -= 1;  
            document.getElementById('1photo2').dataset.index = iNumImg;
            oImg.setAttribute("src", aImg[iNumImg]);
            }
    
        }
            
        if(iDir == 0){
        
            if(iNumImg == aImg.length-1){
            iNumImg = aImg.length - aImg.length;
            document.getElementById('1photo2').dataset.index1 = iNumImg;
            oImg.setAttribute("src", aImg[iNumImg]);
            }else{     
            iNumImg += 1;  
            document.getElementById('1photo2').dataset.index1 = iNumImg;
            oImg.setAttribute("src", aImg[iNumImg]);
            }
            
     }
     return true
 }
*/

/*------------------------------------------------------------------------------------*/

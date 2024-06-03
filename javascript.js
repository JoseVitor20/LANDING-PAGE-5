// FUNÇÃO PARA ABRIR O MENU QUANDO O CLICAR NO ANBURGUE

    document.querySelector('div.abrir').addEventListener('click',function(){
        document.querySelector('nav.mobile').style.cssText = "background:rgb(212, 211, 211);width:45%;"

        document.querySelector('div.fechar').style.display = 'block'
    })

// FUNÇÃO PARA ABRIR O MENU QUANDO O CLICAR NO ANBURGUE


// FUNÇÃO PARA FECHAR O MENU QUANDO CLICAR NO X

    document.querySelector('div.fechar').addEventListener('click',function(){

        document.querySelector('nav.mobile').style.width = '0%'
        this.style.display = 'none'
    })

// FUNÇÃO PARA FECHAR O MENU QUANDO CLICAR NO X


// FUNÇÃO PARA FECHAR O MENU QUANDO O SITE FOR REDIMENCIONADO

    function atualizarLARGURABody(){
        var LARGURABody = document.body.scrollWidth;
        if(LARGURABody < 600){
            document.querySelector('nav.mobile').style.width = '0%' 
            document.querySelector('div.fechar').style.display = 'none'
        }else{
            document.querySelector('nav.mobile').style.width = '0%' 
            document.querySelector('div.fechar').style.display = 'none' 
        }        
    }

    window.addEventListener('resize',atualizarLARGURABody)

// FUNÇÃO PARA FECHAR O MENU QUANDO O SITE FOR REDIMENCIONADO

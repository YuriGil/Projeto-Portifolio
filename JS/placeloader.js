window.onload = function() {
    // Após 2 segundos, inicia o fade out da tela de carregamento
    setTimeout(function() {
        let loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        
        // Após a transição, remove a tela de carregamento e exibe o conteúdo
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 1000); // Duração da transição do fade out (1 segundo)
    }, 2000);
};

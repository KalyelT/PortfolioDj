// Script para o portfólio do DJ KT
// Adiciona interatividade ao site

// Função para animar o título ao carregar a página
window.addEventListener('load', function() {
    const titulo = document.querySelector('h1');
    titulo.style.opacity = '0';
    titulo.style.transition = 'opacity 2s';
    setTimeout(() => {
        titulo.style.opacity = '1';
    }, 500);
});

// Função para confirmar o clique no link de email
const linkEmail = document.querySelector('a[href^="mailto:"]');
if (linkEmail) {
    linkEmail.addEventListener('click', function(event) {
        const confirmar = confirm('Deseja abrir o cliente de email para entrar em contato?');
        if (!confirmar) {
            event.preventDefault();
        }
    });
}

// Animação simples para os parágrafos
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((p, index) => {
    p.style.animationDelay = `${index * 0.5}s`;
    p.style.animation = 'fadeInUp 1s ease-out forwards';
    p.style.opacity = '0';
});

// CSS para a animação (adicionado via JS para simplicidade)
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
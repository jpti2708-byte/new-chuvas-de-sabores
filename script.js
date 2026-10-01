// ============================
// INFORMAÇÕES DOS PRODUTOS
// ============================

const produtos = {

    esfirra: {

        icon: "🥙",

        categoria: "SALGADO",

        nome: "Esfirra",

        descricao:
            "Uma deliciosa esfirra com massa macia e recheio saboroso, preparada com muito carinho.",

        ingredientes:
            "Massa leve, recheio saboroso e temperos selecionados.",

        preco:
            "Consulte o preço"
    },


    coxinha: {

        icon: "🍗",

        categoria: "SALGADO",

        nome: "Coxinha",

        descricao:
            "Coxinha douradinha por fora, com massa macia e delicioso recheio cremoso de frango.",

        ingredientes:
            "Massa de coxinha, frango desfiado, temperos e recheio cremoso.",

        preco:
            "Consulte o preço"
    },


    pao: {

        icon: "🥪",

        categoria: "LANCHE",

        nome:
            "Pão com Presunto e Queijo",

        descricao:
            "A combinação clássica de presunto e queijo em um lanche simples, gostoso e perfeito para qualquer hora.",

        ingredientes:
            "Pão, presunto e queijo.",

        preco:
            "Consulte o preço"
    },


    chocolate: {

        icon: "🥐",

        categoria: "CROISSANT",

        nome:
            "Croissant de Chocolate",

        descricao:
            "Croissant com massa delicada e crocante, acompanhado de um delicioso recheio de chocolate.",

        ingredientes:
            "Massa folhada e chocolate.",

        preco:
            "Consulte o preço"
    },


    frango: {

        icon: "🥐",

        categoria: "CROISSANT",

        nome:
            "Croissant de Frango",

        descricao:
            "Croissant dourado e crocante com recheio cremoso de frango bem temperado.",

        ingredientes:
            "Massa folhada, frango desfiado e temperos.",

        preco:
            "Consulte o preço"
    }

};


// ============================
// PEGAR ELEMENTOS DO HTML
// ============================

const modal =
    document.getElementById("modal");

const fechar =
    document.getElementById("closeModal");

const modalIcon =
    document.getElementById("modalIcon");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalIngredients =
    document.getElementById("modalIngredients");

const modalPrice =
    document.getElementById("modalPrice");

const modalOrder =
    document.getElementById("modalOrder");


// ============================
// PEGAR TODOS OS CARDS
// ============================

const cards =
    document.querySelectorAll(".food-card");


// ============================
// QUANDO CLICAR NO CARD
// ============================

cards.forEach(card => {

    card.addEventListener("click", () => {

        // Descobre qual produto foi clicado

        const nomeProduto =
            card.dataset.food;

        // Busca os dados

        const produto =
            produtos[nomeProduto];


        // Coloca as informações no modal

        modalIcon.textContent =
            produto.icon;

        modalCategory.textContent =
            produto.categoria;

        modalTitle.textContent =
            produto.nome;

        modalDescription.textContent =
            produto.descricao;

        modalIngredients.textContent =
            produto.ingredientes;

        modalPrice.textContent =
            produto.preco;


        // ============================
        // BOTÃO DO WHATSAPP
        // ============================

        const mensagem =
            `Olá! Gostaria de pedir ${produto.nome}.`;

        const mensagemCodificada =
            encodeURIComponent(mensagem);

        /*
          TROQUE O NÚMERO ABAIXO
          PELO SEU WHATSAPP.

          Exemplo:

          5511999999999
        */

        modalOrder.href =
            `https://wa.me/5500000000000?text=${mensagemCodificada}`;


        // Abre o modal

        modal.classList.add("active");

        // Impede a página de rolar

        document.body.style.overflow =
            "hidden";

    });

});


// ============================
// FECHAR MODAL
// ============================

function fecharModal() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "auto";
}


// Clique no X

fechar.addEventListener(
    "click",
    fecharModal
);


// Clique fora da janela

modal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === modal
        ) {

            fecharModal();

        }

    }
);


// Tecla ESC

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            fecharModal();

        }

    }
);
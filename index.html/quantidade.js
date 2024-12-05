document.addEventListener('DOMContentLoaded', () => {
    const decreaseButton = document.querySelector('.decrease');
    const increaseButton = document.querySelector('.increase');
    const quantitySpan = document.querySelector('#item-quantidade');
  
    decreaseButton.addEventListener('click', () => {
      let currentQuantity = parseInt(quantitySpan.textContent, 10);
      if (currentQuantity > 1) { // Impede que a quantidade vá para zero ou negativa
        quantitySpan.textContent = currentQuantity - 1;
      }
    });
  
    increaseButton.addEventListener('click', () => {
      let currentQuantity = parseInt(quantitySpan.textContent, 10);
      quantitySpan.textContent = currentQuantity + 1;
    });
  });




  document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os itens do carrinho
    const cartItems = document.querySelectorAll(".item");

    // Atualiza o subtotal e o total do carrinho
    function updateCartTotals() {
        let subtotal = 0;

        cartItems.forEach((item) => {
            const price = parseFloat(item.querySelector(".preco").textContent.replace("R$ ", "").replace(".", "").replace(",", "."));
            const quantity = parseInt(item.querySelector("#item-quantidade").textContent);
            subtotal += price * quantity;
        });

        // Atualiza os valores exibidos no subtotal e no total
        document.querySelector(".total p span").textContent = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;

        const estimatedTax = 50; // Valor fixo do imposto estimado
        const total = subtotal + estimatedTax;
        document.querySelector(".final span").textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
    }

    // Adiciona eventos de clique para os botões de aumentar e diminuir
    cartItems.forEach((item) => {
        const decreaseButton = item.querySelector(".decrease");
        const increaseButton = item.querySelector(".increase");

        decreaseButton.addEventListener("click", () => {
            const quantityElement = item.querySelector("#item-quantidade");
            let quantity = parseInt(quantityElement.textContent);

            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateCartTotals();
            }
        });

        increaseButton.addEventListener("click", () => {
            const quantityElement = item.querySelector("#item-quantidade");
            let quantity = parseInt(quantityElement.textContent);

            quantity++;
            quantityElement.textContent = quantity;
            updateCartTotals();
        });
    });

    // Inicializa os totais no carregamento da página
    updateCartTotals();
});



document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os itens do carrinho
  const cartItems = document.querySelectorAll(".item");

  // Atualiza o subtotal e o total do carrinho
  function updateCartTotals() {
      let subtotal = 0;

      const updatedCartItems = document.querySelectorAll(".item");

      updatedCartItems.forEach((item) => {
          const price = parseFloat(item.querySelector(".preco").textContent.replace("R$ ", "").replace(".", "").replace(",", "."));
          const quantity = parseInt(item.querySelector("#item-quantidade").textContent);
          subtotal += price * quantity;
      });

      // Atualiza os valores exibidos no subtotal e no total
      document.querySelector(".total p span").textContent = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;

      const estimatedTax = 50; // Valor fixo do imposto estimado
      const total = subtotal + estimatedTax;
      document.querySelector(".final span").textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
  }

  // Adiciona eventos de clique para os botões de aumentar e diminuir
  cartItems.forEach((item) => {
      const decreaseButton = item.querySelector(".decrease");
      const increaseButton = item.querySelector(".increase");
      const removeButton = item.querySelector(".remover");

      decreaseButton.addEventListener("click", () => {
          const quantityElement = item.querySelector("#item-quantidade");
          let quantity = parseInt(quantityElement.textContent);

          if (quantity > 1) {
              quantity--;
              quantityElement.textContent = quantity;
              updateCartTotals();
          }
      });

      increaseButton.addEventListener("click", () => {
          const quantityElement = item.querySelector("#item-quantidade");
          let quantity = parseInt(quantityElement.textContent);

          quantity++;
          quantityElement.textContent = quantity;
          updateCartTotals();
      });

      removeButton.addEventListener("click", () => {
          item.remove();
          updateCartTotals();
      });
  });

  // Inicializa os totais no carregamento da página
  updateCartTotals();
});

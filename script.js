const products = [
    // --- 1. PIZZAS (8) ---
    { id: 1, name: "Muzzarella Clásica", price: 6500, desc: "Salsa de tomate y muzzarella premium.", img: "img/pizzas1.jpg", category: "pizzas" },
    { id: 2, name: "Pizza de Pepperoni", price: 7800, desc: "Pepperoni americano y extra queso.", img: "img/pizzas2.jpg", category: "pizzas" },
    { id: 3, name: "Fugazzetta Especial", price: 7200, desc: "Mucha cebolla, queso y aceitunas negras.", img: "img/pizzas3.jpg", category: "pizzas" },
    { id: 4, name: "Pizza de Jamón y Morrón", price: 7500, desc: "Jamón cocido, morrones asados y olivas.", img: "img/pizzas4.jpg", category: "pizzas" },
    { id: 5, name: "Pizza Napolitana", price: 7300, desc: "Rodajas de tomate, ajo y perejil.", img: "img/pizzas5.jpg", category: "pizzas" },
    { id: 6, name: "Pizza 4 Quesos", price: 8200, desc: "Muzza, provolone, roquefort y parmesano.", img: "img/pizzas6.jpg", category: "pizzas" },
    { id: 7, name: "Pizza de Rúcula y Crudo", price: 8900, desc: "Rúcula fresca, jamón crudo y parmesano.", img: "img/pizzas7.jpg", category: "pizzas" },
    { id: 8, name: "Pizza Tropical", price: 7600, desc: "Jamón, ananá y azúcar negra.", img: "img/pizzas8.jpg", category: "pizzas" },

    // --- 2. EMPANADAS (8) ---
    { id: 9, name: "Carne Suave", price: 5200, desc: "Docena de carne con aceitunas.", img: "img/empanada1.jpg", category: "empanadas" },
    { id: 10, name: "Carne Picante", price: 5200, desc: "Docena de carne con ají molido.", img: "img/empanada2.jpg", category: "empanadas" },
    { id: 11, name: "Jamón y Queso", price: 5000, desc: "Docena clásicas de jamón y muzzarella.", img: "img/empanada3.jpg", category: "empanadas" },
    { id: 12, name: "Pollo al Verdeo", price: 5400, desc: "Docena de pollo, cebolla de verdeo.", img: "img/empanada4.jpg", category: "empanadas" },
    { id: 13, name: "Humita", price: 5200, desc: "Docena de choclo y salsa blanca.", img: "img/empanada5.jpg", category: "empanadas" },
    { id: 14, name: "Verdura y Queso", price: 5000, desc: "Docena de acelga y queso reggianito.", img: "img/empanada6.jpg", category: "empanadas" },
    { id: 15, name: "Roquefort y Apio", price: 5600, desc: "Docena gourmet con nueces.", img: "img/empanada7.jpg", category: "empanadas" },
    { id: 16, name: "Cebolla y Queso", price: 5000, desc: "Docena con cebollas caramelizadas.", img: "img/empanada8.jpg", category: "empanadas" },

    // --- 3. SANDWICH (8) ---
    { id: 17, name: "Lomo Completo", price: 9200, desc: "Lechuga, tomate, huevo, jamón y queso.", img: "img/sandwich1.jpg", category: "sandwich" },
    { id: 18, name: "Hamburguesa Doble", price: 7800, desc: "Doble carne 180g, cheddar y bacon.", img: "img/sandwich2.jpg", category: "sandwich" },
    { id: 19, name: "Sándwich de Bondiola", price: 8500, desc: "Bondiola braseada a la cerveza.", img: "img/sandwich3.jpg", category: "sandwich" },
    { id: 20, name: "Milanesa en Sándwich", price: 8200, desc: "Carne vacuna, mayonesa casera.", img: "img/sandwich4.jpg", category: "sandwich" },
    { id: 21, name: "Choripán Gourmet", price: 5500, desc: "Chorizo de cerdo y chimichurri casero.", img: "img/sandwich5.jpg", category: "sandwich" },
    { id: 22, name: "Sándwich de Pollo Crispy", price: 7500, desc: "Pollo frito, pepinillos y alioli.", img: "img/sandwich6.jpg", category: "sandwich" },
    { id: 23, name: "Baguette de Jamón Crudo", price: 6800, desc: "Pan francés, crudo y manteca.", img: "img/sandwich7.jpg", category: "sandwich" },
    { id: 24, name: "Sándwich Veggie", price: 6200, desc: "Vegetales asados y queso crema.", img: "img/sandwich8.jpg", category: "sandwich" },

    // --- 4. COMIDA ELABORADA (8) ---
    { id: 25, name: "Ravioles al Fileto", price: 8200, desc: "Rellenos de ricota y nuez.", img: "img/elaborada1.jpg", category: "elaborada" },
    { id: 26, name: "Sorrentinos de Jamón", price: 8900, desc: "Con salsa rosa casera.", img: "img/elaborada2.jpg", category: "elaborada" },
    { id: 27, name: "Pastel de Papa", price: 7800, desc: "Gratinado al horno de barro.", img: "img/elaborada3.jpg", category: "elaborada" },
    { id: 28, name: "Pollo al Horno", price: 9500, desc: "Con papas rústicas y romero.", img: "img/elaborada4.jpg", category: "elaborada" },
    { id: 29, name: "Risotto de Hongos", price: 11200, desc: "Arroz arborio y mix de setas.", img: "img/elaborada5.jpg", category: "elaborada" },
    { id: 30, name: "Lasagna Especial", price: 9800, desc: "Boloñesa, blanca y mucho queso.", img: "img/elaborada6.jpg", category: "elaborada" },
    { id: 31, name: "Bife de Chorizo", price: 14500, desc: "400g de carne seleccionada.", img: "img/elaborada7.jpg", category: "elaborada" },
    { id: 32, name: "Matambre a la Pizza", price: 10500, desc: "Con papas fritas incluidas.", img: "img/elaborada8.jpg", category: "elaborada" },

    // --- 5. ENSALADAS (8) ---
    { id: 33, name: "César Clásica", price: 6500, desc: "Pollo, lechuga y croutons.", img: "img/ensaladas1.jpg", category: "ensaladas" },
    { id: 34, name: "Griega Tradicional", price: 6800, desc: "Pepino, tomate, aceitunas y feta.", img: "img/ensaladas2.jpg", category: "ensaladas" },
    { id: 35, name: "Ensalada de Atún", price: 7200, desc: "Arroz, huevo y lomitos de atún.", img: "img/ensaladas3.jpg", category: "ensaladas" },
    { id: 36, name: "Rúcula y Queso", price: 5800, desc: "Rúcula fresca y lascas de parmesano.", img: "img/ensaladas4.jpg", category: "ensaladas" },
    { id: 37, name: "Ensalada Completa", price: 5500, desc: "Lechuga, tomate, cebolla y huevo.", img: "img/ensaladas5.jpg", category: "ensaladas" },
    { id: 38, name: "Poke de Salmón", price: 12500, desc: "Salmón rosado y palta.", img: "img/ensaladas6.jpg", category: "ensaladas" },
    { id: 39, name: "Ensalada Caprese", price: 6200, desc: "Tomate, muzzarella y albahaca.", img: "img/ensaladas7.jpg", category: "ensaladas" },
    { id: 40, name: "Ensalada Waldorf", price: 7000, desc: "Manzana, apio y nueces.", img: "img/ensaladas8.jpg", category: "ensaladas" },

    // --- 6. AGUAS SABORIZADAS (8) ---
    { id: 41, name: "Levité Manzana 1.5L", price: 2800, desc: "Bebida saborizada sin gas.", img: "img/aguas1.jpg", category: "aguas" },
    { id: 42, name: "Levité Naranja 1.5L", price: 2800, desc: "Sabor natural cítrico.", img: "img/aguas2.jpg", category: "aguas" },
    { id: 43, name: "Levité Pomelo 1.5L", price: 2800, desc: "Sabor pomelo rosado.", img: "img/aguas3.jpg", category: "aguas" },
    { id: 44, name: "Levité Pera 1.5L", price: 2800, desc: "Refrescante sabor pera.", img: "img/aguas4.jpg", category: "aguas" },
    { id: 45, name: "Aquarius Manzana 1.5L", price: 2900, desc: "Línea Coca-Cola saborizada.", img: "img/aguas5.jpg", category: "aguas" },
    { id: 46, name: "Aquarius Pera 1.5L", price: 2900, desc: "Agua saborizada premium.", img: "img/aguas6.jpg", category: "aguas" },
    { id: 47, name: "Agua con Gas 500ml", price: 1800, desc: "Botella individual purificada.", img: "img/aguas7.jpg", category: "aguas" },
    { id: 48, name: "Agua sin Gas 500ml", price: 1800, desc: "Baja en sodio.", img: "img/aguas8.jpg", category: "aguas" },

    // --- 7. GASEOSAS (8) ---
    { id: 49, name: "Coca-Cola 1.75L", price: 3200, desc: "Sabor original refrescante.", img: "img/gaseosas1.jpg", category: "gaseosas" },
    { id: 50, name: "Coca-Cola Zero 1.75L", price: 3200, desc: "Sin azúcar, mismo sabor.", img: "img/gaseosas2.jpg", category: "gaseosas" },
    { id: 51, name: "Sprite 1.75L", price: 3100, desc: "Sabor lima-limón.", img: "img/gaseosas3.jpg", category: "gaseosas" },
    { id: 52, name: "Fanta Naranja 1.75L", price: 3100, desc: "Refresco sabor naranja.", img: "img/gaseosas4.jpg", category: "gaseosas" },
    { id: 53, name: "Paso de los Toros 1.5L", price: 3000, desc: "Tónica o Pomelo amargo.", img: "img/gaseosas5.jpg", category: "gaseosas" },
    { id: 54, name: "Seven Up 1.5L", price: 3100, desc: "Lima limón clásica.", img: "img/gaseosas6.jpg", category: "gaseosas" },
    { id: 55, name: "Schweppes Tónica", price: 2900, desc: "Agua tónica premium.", img: "img/gaseosas7.jpg", category: "gaseosas" },
    { id: 56, name: "Cerveza Quilmes 1L", price: 3800, desc: "Clásica argentina fría.", img: "img/gaseosas8.jpg", category: "gaseosas" },

    // --- 8. VINOS (8) ---
    { id: 57, name: "Malbec Estándar", price: 6500, desc: "Ideal para carnes rojas.", img: "img/vinos1.jpg", category: "vinos" },
    { id: 58, name: "Cabernet Sauvignon", price: 7200, desc: "Cuerpo intenso y aroma.", img: "img/vinos2.jpg", category: "vinos" },
    { id: 59, name: "Chardonnay Blanco", price: 6800, desc: "Fresco, ideal para pastas.", img: "img/vinos3.jpg", category: "vinos" },
    { id: 60, name: "Rosado de Malbec", price: 7500, desc: "Fresco y frutado.", img: "img/vinos4.jpg", category: "vinos" },
    { id: 61, name: "Malbec Reserva", price: 12500, desc: "Crianza en roble francés.", img: "img/vinos5.jpg", category: "vinos" },
    { id: 62, name: "Espumante Brut", price: 11000, desc: "Para celebraciones especiales.", img: "img/vinos6.jpg", category: "vinos" },
    { id: 63, name: "Vino de la Casa 1L", price: 4500, desc: "Vino tinto de mesa.", img: "img/vinos7.jpg", category: "vinos" },
    { id: 64, name: "Vino Blanco Dulce", price: 5800, desc: "Cosecha tardía.", img: "img/vinos8.jpg", category: "vinos" }
];

let cart = [];
let subtotal = 0;
const COSTO_ENVIO = 2500;

const grid = document.getElementById('grid');

function renderProducts(filter = 'todos') {
    grid.innerHTML = "";
    const filtered = filter === 'todos' ? products : products.filter(p => p.category === filter);
    
    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="card">
                <img src="${p.img}" alt="${p.name}">
                <div class="card-info">
                    <div>
                        <h3>${p.name}</h3>
                        <p>${p.desc}</p>
                    </div>
                    <div>
                        <span class="price-tag">$${p.price}</span>
                        <button class="btn-add" onclick="addItem('${p.name}', ${p.price})">AGREGAR</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function filterProducts(category) {
    const buttons = document.querySelectorAll('.btn-cat');
    buttons.forEach(btn => btn.classList.remove('active'));
    // Buscamos el botón que disparó el evento para darle la clase active
    if (event) {
        event.currentTarget.classList.add('active');
    }
    renderProducts(category);
}

renderProducts();

function addItem(name, price) {
    cart.push({ name, price });
    subtotal += price;
    updateUI();
}

function updateUI() {
    const bar = document.getElementById('cart-bar');
    const totalFinal = subtotal + COSTO_ENVIO;
    
    if (cart.length > 0) {
        bar.style.display = 'flex';
        document.getElementById('cart-count').innerText = cart.length;
        document.getElementById('cart-total-display').innerHTML = `
            <div class="cart-total-info">
                <span>Subtotal: $${subtotal}</span>
                <strong>Total: $${totalFinal}</strong>
            </div>
        `;
    } else {
        bar.style.display = 'none';
    }
}

function clearCart() {
    if (confirm("¿Quieres borrar todo el pedido?")) {
        cart = [];
        subtotal = 0;
        updateUI();
    }
}

function sendOrder() {
    const phone = "5492657521775"; 
    const nombre = document.getElementById('user-name').value;
    const direccion = document.getElementById('user-address').value;

    if (!nombre || !direccion) {
        alert("Por favor, completa tu nombre y dirección para el envío.");
        return;
    }

    if (cart.length === 0) {
        alert("¡El carrito está vacío!");
        return;
    }

    const totalFinal = subtotal + COSTO_ENVIO;
    
    let message = "🍔 *NUEVO PEDIDO | PATRIC SOFT ®*\n";
    message += "--------------------------------------\n\n";
    
    cart.forEach(item => { 
        message += `✅ *${item.name}* \n    ↳ $${item.price}\n\n`; 
    });
    
    message += "--------------------------------------\n";
    message += `📦 *Envío:* $${COSTO_ENVIO}\n`;
    message += `💰 *TOTAL A PAGAR: $${totalFinal}*\n\n`;
    
    message += "👤 *DATOS DEL CLIENTE:*\n";
    message += `📝 Nombre: ${nombre}\n`;
    message += `📍 Dirección: ${direccion}\n`;
    message += "--------------------------------------\n";
    message += "_(Confirmar pedido para iniciar cocina)_";

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

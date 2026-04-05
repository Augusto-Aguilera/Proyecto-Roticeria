const products = [
    { id: 1, name: "Burger King-Style", price: 6200, desc: "Triple carne smashed, cheddar y cebolla.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
    { id: 2, name: "Pizza Napolitana", price: 7500, desc: "Pomodoro italiano y albahaca fresca.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
    { id: 3, name: "Empanadas Salteñas", price: 5000, desc: "Docena fritas o al horno de barro.", img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500" },
    { id: 4, name: "Lomo Master", price: 8500, desc: "Bife de lomo, jamón crudo y rúcula.", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400" },
    { id: 5, name: "Milanesa Especial", price: 7100, desc: "Gratinada con 4 quesos y papas fritas.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
    { id: 6, name: "Papas Rústicas", price: 3800, desc: "Con salsa brava y verdeo fresco.", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400" },
    { id: 7, name: "Sandwich de Pollo", price: 5900, desc: "Pollo crispy, palta y alioli.", img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=400" },
    { id: 8, name: "Poke Bowl", price: 6800, desc: "Salmón, arroz, mango y palta.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
    { id: 9, name: "Tacos de Ternera", price: 5500, desc: "Tortilla de maíz y salsa pico de gallo.", img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400" },
    { id: 10, name: "Cerveza Artesanal", price: 2500, desc: "Lata 473ml (IPA, APA o Honey).", img: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=500" }
];

let cart = [];
let subtotal = 0;
const COSTO_ENVIO = 2500;

// Cargar productos
const grid = document.getElementById('grid');
products.forEach(p => {
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

function addItem(name, price) {
    cart.push({ name, price });
    subtotal += price;
    updateUI();
}

// Reemplazá tu updateUI por esta
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
        bar.style.display = 'none'; // Oculta la barra si el carrito está vacío
    }
}

// Agregá esta función nueva al final
function clearCart() {
    if (confirm("¿Quieres borrar todo el pedido?")) {
        cart = [];
        subtotal = 0;
        updateUI();
    }
}


function sendOrder() {
    // Número actualizado de Patric
    const phone = "5492657521775"; 
    const totalFinal = subtotal + COSTO_ENVIO;
    
    // Armado del mensaje en formato Lista
    let message = "🍔 *NUEVO PEDIDO | PATRIC SOFT ®*\n";
    message += "--------------------------------------\n\n";
    
    cart.forEach(item => { 
        message += `✅ *${item.name}* \n   ↳ $${item.price}\n\n`; 
    });
    
    message += "--------------------------------------\n";
    message += `📦 *Envío:* $${COSTO_ENVIO}\n`;
    message += `💰 *TOTAL A PAGAR: $${totalFinal}*\n\n`;
    message += "_(Por favor, confirme el pedido para iniciar la cocina)_";

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

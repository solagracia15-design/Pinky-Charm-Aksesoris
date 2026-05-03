const produk = [
  { nama: "Kalung Mutiara", harga: 50000, kategori: "kalung", img: "images/kalung.jpg" },
  { nama: "Gelang Emas", harga: 75000, kategori: "gelang", img: "images/gelang.jpg" },
  { nama: "Cincin Cantik", harga: 40000, kategori: "cincin", img: "images/cincin.jpg" },
  { nama: "Jepit Rambut Korea", harga: 20000, kategori: "rambut", img: "images/jepit.jpg" },
  { nama: "Ikat Rambut Lucu", harga: 15000, kategori: "rambut", img: "images/ikat.jpg" },
  { nama: "Bando Fashion", harga: 25000, kategori: "rambut", img: "images/bando.jpg" }
];

let cart = [];

function tampilkanProduk(data) {
  const container = document.getElementById("produk-container");
  container.innerHTML = "";

  data.forEach((item, index) => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.img}" alt="${item.nama}">
        <h3>${item.nama}</h3>
        <p>Rp ${item.harga}</p>
        <button onclick="tambahCart(${index})">Tambah</button>
      </div>
    `;
  });
}

function filterProduk(kategori) {
  if (kategori === "all") {
    tampilkanProduk(produk);
  } else {
    const filtered = produk.filter(p => p.kategori === kategori);
    tampilkanProduk(filtered);
  }
}

function tambahCart(index) {
  cart.push(produk[index]);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");

  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    cartItems.innerHTML += `<li>${item.nama} - Rp ${item.harga}</li>`;
    sum += item.harga;
  });

  total.innerText = sum;
}

// load awal
tampilkanProduk(produk);

function checkoutWhatsApp() {
  const nomorWA = "6282343133894"; //
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  let pesan = "Halo kak, saya mau order:\n\n";

  let total = 0;

  cart.forEach((item, i) => {
    pesan += `${i + 1}. ${item.nama} - Rp ${item.harga}\n`;
    total += item.harga;
  });

  pesan += `\nTotal: Rp ${total}\n\nTerima kasih 😊`;

  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
}

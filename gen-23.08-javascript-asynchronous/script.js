const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchButton.addEventListener("click", () => {
    // Menambahkan penundaan selama 2 detik sebelum mengambil nilai dari input pengguna
    setTimeout(async () => {
        const searchHasil = searchInput.value.trim();

        if (searchHasil != "") {
            // Tambahkan penanganan error dengan try-catch
            try {
                const response = await axios.get(`https://dummyjson.com/products/search?q=${searchHasil}`);

                if (response.status != 200) {
                    throw new Error("Network response was not ok");
                }

                const data = response.data;
                if (data.length == 0) {
                    // Tampilkan pesan "Data tidak ada" di konsol jika tidak ada hasil pencarian
                    console.log("Data tidak ada");
                } else {
                    // Tampilkan pesan "Data sukses" di konsol jika ada hasil pencarian
                    console.log("Data sukses");
                }
                displaySearchResults(data);

                // Menampilkan pesan "Pencarian selesai" ke konsol
                // console.log("Hasil pencarian sukses");

                // Menampilkan pesan "Pencarian selesai"
                const message = document.createElement("p");
                message.textContent = "Pencarian selesai";
                searchResults.appendChild(message);
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }, 2000); // 2000 milidetik (2 detik) penundaan
});

function displaySearchResults(results) {
    searchResults.innerHTML = ""; // Kosongkan hasil pencarian sebelumnya

    const preElement = document.createElement("pre");


    if (results.length == 0) {
        searchResults.innerHTML = "<p>Tidak ada hasil ditemukan.</p>";
        return;
    }


    preElement.textContent = JSON.stringify(results, null, 2); // Tampilkan JSON dengan format yang lebih mudah dibaca
    searchResults.appendChild(preElement);
}

window.onload = function () {
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 999); 
  
    const diff = end - now;
  
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
  
    alert(
      `🎉 Promo Spesial Hari Ini! \nDiskon 50% hanya berlaku sampai tengah malam!\nSisa waktu: ${hours} jam ${minutes} menit`
    );
  };
  
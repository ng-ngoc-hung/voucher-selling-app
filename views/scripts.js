function addToCart(voucherString) {
  fetch("/addtocart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: voucherString, // Assuming voucherString is an object
  })
    .then((response) => response.json())
    .then((data) => {
      const responseBox = document.getElementById("responseBox");
      responseBox.style.display = "block";
      const responseMessage = document.getElementById("responseMessage");
      responseMessage.textContent = data.message; 
      
      setTimeout(() => {
        const responseBox = document.getElementById("responseBox");
        responseBox.style.display = "none";
      }, 1000);
    })
    .catch((error) => {
      console.error("Error adding voucher to cart:", error);
      // Handle error if necessary
    });
}


async function removeItem(voucherData) {
    try {
        const response = await fetch('/removevoucher', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: voucherData
        });

        if (response.ok) {
            location.reload();
        } else {
            console.error('Failed to remove item');
        }
    } catch (error) {
        console.error('Error removing item:', error);
    }
}


function addToMyVoucher(voucherlist) {
  fetch("/addtomyvoucher", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: voucherlist // Stringify the array
  })
  .then(response => {
      if (response.ok) {
          console.log("Vouchers added successfully!");
          window.location.href = "/myvoucher";
      } else {
          console.error("Failed to add vouchers");
      }
  })
  .catch(error => {
      console.error("Error adding vouchers:", error);
  });
}


async function removeVoucher(voucherData) {
  try {
      const response = await fetch('/removemyvoucher', {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
          body: voucherData
      });

      if (response.ok) {
          location.reload();
      } else {
          console.error('Failed to remove item');
      }
  } catch (error) {
      console.error('Error removing item:', error);
  }
}
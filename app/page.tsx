<!DOCTYPE html>
<html>
<head>
<title>Excel Pro GH</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://js.paystack.co/v1/inline.js"></script>
<style>
body{background:#0a1931;color:white;font-family:Arial;text-align:center;margin:0;padding:20px}
.btn{background:#ffcc00;color:black;padding:18px 30px;border-radius:50px;font-weight:900;border:none;font-size:18px;cursor:pointer;margin:10px}
.card{background:white;color:black;padding:20px;border-radius:15px;max-width:400px;margin:20px auto}
img{border-radius:50%;width:120px;border:4px solid #ffcc00}
</style>
</head>
<body>

<h1 style="color:#ffcc00">EXCEL PRO GH 🇬🇭</h1>
<img src="https://cdn.jsdelivr.net/gh/kennysmithderulo-cmyk/Excelprogh@main/profile.jpg">
<h2>Kenny Smith Derulo</h2>
<p>Excel Expert for Ghanaian Businesses</p>

<div class="card">
<h3>📊 Excel Mastery Pack</h3>
<p>50+ Templates + Video Tutorials</p>
<h2>₵50</h2>
<button class="btn" onclick="pay(50,'Excel Pack')">💳 PAY WITH PAYSTACK</button>
</div>

<div class="card">
<h3>📈 Business Dashboard</h3>
<p>Sales + Inventory Dashboard</p>
<h2>₵100</h2>
<button class="btn" onclick="pay(100,'Dashboard')">💳 PAY ₵100</button>
</div>

<p>WhatsApp: 024 XXX XXXX | Accra, Ghana</p>

<script>
function pay(amount, product){
  var email = prompt("Enter your email:");
  if(!email || !email.includes("@")){ alert("Enter valid email"); return; }
  var handler = PaystackPop.setup({
    key: 'pk_live_f0406495db009afc29da2b4ac5d7a3cbdd4afb4d9dcd24', // REPLACE WITH YOUR FULL KEY
    email: email,
    amount: amount*100,
    currency: 'GHS',
    ref: 'EXCEL'+Date.now(),
    callback: function(res){
      alert("✅ Payment Success! Ref: "+res.reference+" - We will send "+product+" to "+email);
    },
    onClose: function(){ alert("Payment cancelled"); }
  });
  handler.openIframe();
}
</script>
</body>
</html>

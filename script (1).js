<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FlexZone - Premium T-Shirts</title>

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:Arial, sans-serif;
    }

    body{
      background:#f4f4f4;
      color:#111;
    }

    header{
      background:#111;
      color:white;
      text-align:center;
      padding:20px;
    }

    header h1{
      font-size:28px;
      letter-spacing:3px;
    }

    .hero{
      text-align:center;
      padding:40px 20px;
      background:white;
    }

    .hero h2{
      font-size:26px;
      margin-bottom:10px;
    }

    .hero p{
      color:#555;
    }

    .btn-whatsapp{
      display:inline-block;
      margin:20px auto;
      background:#25D366;
      color:white;
      padding:12px 20px;
      border-radius:8px;
      text-decoration:none;
      font-weight:bold;
    }

    .products{
      display:grid;
      grid-template-columns:repeat(auto-fit, minmax(220px,1fr));
      gap:15px;
      padding:20px;
    }

    .card{
      background:white;
      padding:15px;
      border-radius:12px;
      text-align:center;
      box-shadow:0 2px 10px rgba(0,0,0,0.1);
      transition:0.3s;
    }

    .card:hover{
      transform:translateY(-5px);
    }

    .price{
      color:green;
      font-weight:bold;
      margin:10px 0;
    }

    .card a{
      display:inline-block;
      background:#111;
      color:white;
      padding:10px 15px;
      border-radius:6px;
      text-decoration:none;
    }

    footer{
      text-align:center;
      padding:20px;
      background:#111;
      color:white;
      margin-top:20px;
    }
  </style>

</head>
<body>

<header>
  <h1>FLEXZONE</h1>
  <p>Premium Streetwear T-Shirts</p>
</header>

<section class="hero">
  <h2>Upgrade Your Style 🔥</h2>
  <p>Trendy • Comfortable • Affordable</p>

  <a class="btn-whatsapp" href="https://wa.me/8801XXXXXXXXX" target="_blank">
    Order on WhatsApp
  </a>
</section>

<section class="products">

  <div class="card">
    <h3>Classic Black Tee</h3>
    <p class="price">৳499</p>
    <a href="#">Buy Now</a>
  </div>

  <div class="card">
    <h3>White Minimal Tee</h3>
    <p class="price">৳499</p>
    <a href="#">Buy Now</a>
  </div>

  <div class="card">
    <h3>Oversized Street Tee</h3>
    <p class="price">৳599</p>
    <a href="#">Buy Now</a>
  </div>

</section>

<footer>
  <p>© 2026 FlexZone. All rights reserved.</p>
</footer>

</body>
</html>

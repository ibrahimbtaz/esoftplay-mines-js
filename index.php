<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Game Mines</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>Game Mines</h1>
    <div class="row">
      <div class="col-md-12">
        <div class="grid">
          <?php
          // Inisialisasi papan game
          $grid = [];
          for ($i = 0; $i < 8; $i++) {
            for ($j = 0; $j < 8; $j++) {
              $grid[$i][$j] = 0;
            }
          }

          // Acak 4 bom
          $bom = [];
          while (count($bom) < 4) {
            $i = rand(0, 7);
            $j = rand(0, 7);
            if (!in_array([$i, $j], $bom)) {
              $bom[] = [$i, $j];
            }
          }

          // Hitung jumlah bom di sekitar setiap kotak
          for ($i = 0; $i < 8; $i++) {
            for ($j = 0; $j < 8; $j++) {
              for ($di = -1; $di <= 1; $di++) {
                for ($dj = -1; $dj <= 1; $dj++) {
                  if ($i + $di >= 0 && $i + $di < 8 && $j + $dj >= 0 && $j + $dj < 8 && in_array([$i + $di, $j + $dj], $bom)) {
                    $grid[$i][$j]++;
                  }
                }
              }
            }
          }

          // Tampilkan papan game
          for ($i = 0; $i < 8; $i++) {
            echo "<div class=\"row\">";
            for ($j = 0; $j < 8; $j++) {
              $class = "";
              if (in_array([$i, $j], $bom)) {
                $class = "bom";
              } else if ($grid[$i][$j] == 0) {
                $class = "kosong";
              } else {
                $class = "ada-bom";
              }
              echo "<div class=\"col-md-1 cell {$class}\"></div>";
            }
            echo "</div>";
          }
          ?>
        </div>
      </div>
    </div>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script>
    // Fungsi untuk membuka kotak
    function bukaKotak(i, j) {
      // Jika kotak tersebut adalah bom, maka tampilkan alert
      if (in_array([$i, $j], <?php echo json_encode($bom); ?>)) {
        alert("Kamu kena bom!");
        return;
      }

      // Jika kotak tersebut sudah dibuka, maka kembali
      if ($(this).hasClass("buka")) {
        return;
      }

      // Buka kotak
      $(this).removeClass("kosong ada-bom").addClass("buka");

      // Jika kotak tersebut tidak memiliki bom, maka buka kotak-kotak di sekitarnya
      for (var di = -1; di <= 1; di++) {
        for (var dj = -1; dj <= 1; dj++) {
          if (i + di >= 0 && i + di < 8 && j + dj >= 0 && j + dj < 8) {
            bukaKotak(i + di, j + dj);
          }
        }
      }
    }

    // Inisialisasi kotak-kotak
    $(".grid .cell").on("click", bukaKotak);
  </script>
</body>
</html>

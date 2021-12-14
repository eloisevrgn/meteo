
<!doctype html>
<html lang="fr">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- custom css-->
        <link href="../css/ma_meteo.css" rel="stylesheet">
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <!-- titre de l'onglet-->
        <title>Ma Météo</title>
    </head>
    <body>
        <header>
            <h1 class="my_title">Ma météo</h1>
        </header>

        <div class="container-fluid" id="ma_base">
            <div class="row">
                <div class="col-3 ma_colonne_1">
                    
                    <h5>Quelle ville ?</h5>
                    

                    <form action="" method="post" class="form-example">
                        <div class="form-example">
                          <label for="ville">Entrez la ville:</label></br>
                          <input type="text" name="ville" id="ville" required>
                        </div>
                        <div class="form-example">
                        
                          <input type="button" value="Valider" onclick="readVille()" >
                        </div>
                    </form>

                </div>

                <div class="col-9 ma_colonne_2" id="ma_colonne2">

                </div>


            </div>
        </div>
        
    
        <script src="../js/ma_meteo.js"></script>
    </body>
</html>


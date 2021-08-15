<?php
    $arquivo = $_FILES['arquivo'];
    $extensao = pathinfo($arquivo["name"]);
    $destino = "media/audio/cidaeadao." . $extensao['extension'];

    if(file_exists($destino))
    {
        unlink($destino);

    }

    if (move_uploaded_file($arquivo["tmp_name"], $destino))
    {
        header("Location: annotations.html");
    }
    else
    {
        echo "Ocorreu um erro no upload. Tente novamente.";
    }
?>
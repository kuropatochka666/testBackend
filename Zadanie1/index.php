<?php
if(ctype_digit($_POST['year'])) {
    $year = intval($_POST['year']);
    if ($year == 0) {
        $result = 'Нет';
    } else if($year % 4 == 0 && $year % 100 != 0 || $year % 400 == 0 ){
        $result = 'Да';
        
    }
    else {
        $result = 'Нет';
    }
    
}
else{
    $result = 'Ошибка входных данных';
}



echo json_encode($result);



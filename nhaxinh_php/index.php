<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once("layout/head.php") ?>
</head>

<body>
    <?php include_once("layout/header.php") ?>

    <!-- Start Navigation  navbar-sticky -->
    <?php include_once("layout/header-menu.php") ?>
    <!-- End Navigation -->

    

    <?php 
    if (isset($_GET['page_layout'])){
        switch ($_GET['page_layout']){
            case "gioi-thieu": 
                include_once("gioi-thieu.php"); 
                break;
            case "tin-tuc": 
                include_once("tin-tuc.php"); 
                break;
            case "thiet-ke": 
                include_once("thiet-ke.php"); 
                break;
            case "thi-cong": 
                include_once("thi-cong.php"); 
                break;
            case "bao-gia": 
                include_once("bao-gia.php"); 
                break;
            case "du-an": 
                include_once("du-an.php"); 
                break;
            case "thu-vien": 
                include_once("thu-vien.php"); 
                break;
            
        }
        include_once("layout/contact.php");
        include_once("layout/project.php");
    }
    else{
        include_once("layout/homepage-main.php");
    }
    ?>
    
    <?php 
    include_once("layout/footer.php");
    include_once("layout/side-button.php");
    include_once("layout/js-include.php") ;
    ?>
</body>

</html>
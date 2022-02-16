

<style>
@media dompdf{
    body{
        font-size: 10px;
    }

    .report-title{
        background-color: rgb(240, 239, 239);
        margin-top: 0;
        margin-bottom: 15px;
    }
    .report-context{
        display: none;
    }

    .subtitle-1{
        margin-left: 15px;
        font-size:1.8em;
    }

    .subtitle-1 strong{
        font-size:1.2em;
        margin-left:24px;
        margin-right: 24px;
    }

    .subtitle-2{
        font-size:1.5em;
        margin-left: 15px;
    }
    .subtitle-2 strong{
        font-size:1.2em;
        margin-left:24px;
        margin-right: 24px;
    }

    .subtitle-3{
        margin-left: 15px;
        font-size:1.2em;
    }

    .subtitle-3 strong{
        margin-right: 24px;
        margin-left:24px;
    }
    table{
        width: 100%;
        margin-bottom: 10px;
    }

    td{
        padding: 4px 0px 4px 14px !important;
        border: 0;
        width: 100%;

    }
    /* thead{
        background-color: rgb(232, 252, 252);
        color: rgb(104, 126, 126) ;
        padding: 0;

    } */
    thead{
        background-color: orange;
        color: #fff ;
        padding: 0;

    }
    .table th, .table td {
        padding: 4px;
        border: 0;
        width: 100%;
    }

    .title{
        background-color: orange;
        color: #fff ;
        padding: 10px 0 10px 4px;
        }
    h2{
        color: rgb(76, 84, 84) !important;
        padding: 5px;

    }

    strong{
        font-size: 1.2rem;
    }
    tfoot{

        font-size: 1.1rem;
    }
    /* tfoot span{
        color: rgb(76, 84, 84);
    } */
    tfoot span{
        color: #fff;
    }
    .cont{
        width: 90% !important;
        border: 0;
        margin: auto;

    }
    .title-top{


    }
    .clickable{
        cursor: pointer;
        box-shadow: 1px 1px 3px gray;
        padding: 5px;
        border-radius: 3px;
    }
    tbody{
        transition: .5s all ;
        width: 100%;
    }

    /* .table-footer{
        color:rgb(5, 40, 199);
        border: 1px solid rgb(223, 220, 220);
        border-radius:5px;
        font-size:1.3em;
        background-color:rgb(166, 248, 230);
    } */
    .table-footer{
        color:#fff;
        border: 1px solid rgb(223, 220, 220);
        border-radius:5px;
        font-size:1.3em;
        background-color:rgb(49, 49, 49);
        width: 100%;
    }

    .navbar{
        display: none !important;
    }
    .text-right{
        float: right;
        margin-right: 22px;
        margin-left: 50%;
    }
    .float-right{

        margin-right: 22px;
        margin-left: 50%;
    }



}
@media print {

    .title{

        color: rgb(39, 39, 39) !important ;
        padding: 10px 0 10px 4px;
        }

}


</style>

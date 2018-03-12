<template>
 <div class="sidebar">
        <ul>
            <li><a href=""><i class="fas fa-home"></i></a></li>
            <li><a href=""><i class="fas fa-cog"></i></a></li>

        </ul>
    </div>
</template>

<script>


</script>

<style scoped>
    .sidebar {
        width: 60px;
        height: 100vh;
        background-image: linear-gradient(-139deg, #0B346F 0%, #1D728E 100%);
        /*        float: left*/
    }

    
/*
 .sidebar:after { content: ""; display: block; clear: both; }
*/

    .sidebar ul {
        width: 50%;
        color: #fff;
        margin-right: 25%;
        margin-left: 25%;
        margin-top: 100px;
    }

    .sidebar ul li {
        margin-top: 20px;
        list-style: none;

    }

    .sidebar ul li>a {
        text-decoration: none;
        color: #fff;
        font-size: 20px;

    }

</style>

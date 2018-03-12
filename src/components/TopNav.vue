<template>
     <div class="topnav">
        <div id="campaign-header">
            <h2>Campaign</h2>
        </div>
        <div id="user-image">
            <img src="../assets/profile.png" alt="">
        </div>
    </div>
</template>

<script>


</script>

<style scoped>
    .topnav {
        background: #FFFFFF;
        box-shadow: 0 1px 4px 0 rgba(187, 202, 212, 0.50);
        margin-left: 60px;
        padding: 10px;
        max-height: 30px;
        /*        position: relative;*/
    }

    /*
    .topnav:after {
        content: '';
        display: block;
        clear: both;
    }
*/

    #campaign-header {
        font-size: 14px;
        width: 40%;
        float: left
    }

    #user-image {
        float: right;
        position: relative;
        padding: 2px;
        top: -5px;
        margin-right: 10px;



    }

    #user-image img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

</style>

<template>
  <div id="app">
    <side-menu id='sidemenu'></side-menu>
    <top-nav id='topnav'></top-nav>
    <filter-bar id='filterbar'></filter-bar>
    <router-view></router-view>
  </div>
</template>

<script>
    import SideMenu from '@/components/SideMenu'
    import TopNav from '@/components/TopNav'
    import FilterBar from '@/components/FilterBar2'

    export default {
        name: 'App',
        components: {
            'side-menu': SideMenu,
            'top-nav': TopNav,
            'filter-bar': FilterBar
        }
    }

</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }


    body {
        background-color: #F2F5F7;
        font-family: 'Open Sans', sans-serif;
        color: #555555;
    }

    #sidemenu {
        float: left
    }

    #sidemenu:after {
        content: "";
        display: block;
        clear: both;
    }

    #topnav {
        position: relative;
    }

    #topnav:after {
        content: '';
        display: block;
        clear: both;
    }

    #filterbar {
        display: block;
    }

    #filterbar:after {
        display: block;
        content: '';
        clear: both;
    }

</style>

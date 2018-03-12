<template>
         <div class="filterbar">
        <div class="dropdown" id="regionfilter">
            <select name="region">
                <option value="ANZ">ANZ</option>
                <option value="EU">EU</option>
                <option value="US">US</option>
            </select>
        </div>

        <div class="dropdown" id="prodfilter">
            <select name="region">
                <option value="ANZ">Freshdesk</option>
                <option value="EU">Freshsales</option>
                <option value="US">Freshservice</option>
                <option value="US">Freshservice2</option>
            </select>
        </div>


<!--
<div class="dropdown" id="prodfilter">
    <select name="region">
                <option value="Search">Search</option>
                <option value="Display">Dislplay</option>

            </select>
</div>
-->
<!--        <date-picker class="dropdown" i18n="EN" initRange="today" righttoleft="true" compact="false"></date-picker>-->
        <date-range class="dropdown" i18n="EN"  righttoleft="true" compact="false" v-on:selected="changeDate($event)" ></date-range>

    </div>
</template>

<script>
    import DateRange from '@/components/DateRange/RangedatePicker'
    import VueRangedatePicker from 'vue-rangedate-picker';

    export default {
        name: 'App',
        components: {
            'date-picker': VueRangedatePicker,
            'date-range': DateRange
        },
        data() {
            return {
                dateRange: new Date()

            }
        },
        methods: {
            changeDate: function(data) {
                this.dateRange = data;
                console.log(this.dateRange.start);
            }
        }
    }

</script>

<style scoped>
    .filterbar {
        background: #F8F9FB;
        box-shadow: 0 2px 2px 0 rgba(192, 208, 219, 0.50);
        margin-left: 40px;
        max-height: 50px;
        widows: 100%;

    }

    select {
        height: 30px;
        width: 200px;
        border-radius: 0;
        padding-left: 10px;
        background: #fff;
        overflow: hidden;



        /* Removes the default <select> styling */
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .dropdown {
        float: left;
        margin: 10px;
        max-width: 80px;
        margin-left: 100px;
        margin-right: 100px;


    }

    /* Slector CSS */


</style>

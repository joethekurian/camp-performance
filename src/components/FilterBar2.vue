<template>
         <div class="filterbar">
        <div class="dropdown custom-select" id="regionfilter">
            <select name="region">
                <option value="ANZ">ANZ</option>
                <option value="EU">EU</option>
                <option value="US">US</option>
            </select>
        </div>

        <div class="dropdown custom-select" id="prodfilter">
            <select name="region">
                <option value="ANZ">Freshdesk</option>
                <option value="EU">Freshsales</option>
                <option value="US">Freshservice</option>

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



    .dropdown {
        float: left;
        margin: 10px;
        max-width: 80px;
        margin-left: 100px;
        margin-right: 100px;


    }

.custom-select select {
  display: none; /*hide original SELECT element:*/
}
.select-selected {
  background-color: DodgerBlue;
}
/*style the arrow inside the select element:*/
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}
/*point the arrow upwards when the select box is open (active):*/
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}
/*style the items (options), including the selected item:*/
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}
/*style items (options):*/
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}
/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}
.select-items div:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

    /* Slector CSS */


</style>

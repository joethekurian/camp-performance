<style>
.wrapper {
	margin: 0 20%;
	height: 600px;
	overflow-y: scroll;
	overflow-x: hidden;
}

.itemlist {
	background-color: #fff;
	margin-top: 10px;
	width: 100%;
	max-height: 70px;
	padding: 15px;
	overflow: hidden;
	border-radius: 3px;
	box-shadow: 0 2px 2px 0 rgba(192, 208, 219, 0.50);
}

.itemlist:nth-child(1) {
	margin-top: 50px;
}

.campaign-item {
	float: left;
	width: 50%;
	margin-left: 2%
}

.campaign-item h4 {
	font-size: 15px;
	margin-left: 0px;
}

.campaign-sub {
	font-size: 12px;
	margin-top: 10px;
	border-top: 1px solid #F2F5F7;
	padding-top: 5px
}

.campaign-sub p {
	margin-left: 0px;
}

.campaign-alert {
	float: right;
	font-size: 14px;
	margin-top: 30px;
	margin-right: 2%;
	color: #E75F66;
}

.itemlist:after {
	display: block;
	content: '';
	clear: both;
}
</style>

<template>
<div class="wrapper">
	<div class="itemlist" v-for='item in items'>
		<div class="campaign-item">
			<router-link v-bind:to="'/changehistory/' + item.campaignName">
				<h4>{{item.campaignName}}</h4> </router-link>
			<div class="campaign-sub">
				<p>Product: Freshservice</p>
				<p>Region: India</p>
			</div>

		</div>
		<div class="campaign-alert">
			<p>{{item.changeCount}} changes have been made</p>
		</div>
	</div>


</div>
</template>

<script>
export default {
	data() {
		return {
			items: []
		}
	},

	created: function() {
		this.fetchItems();
	},

	methods: {
		fetchItems() {
			let uri = 'http://localhost:3000';
			this.axios.get(uri).then((response) => {
				this.items = response.data;
				console.log(this.items[0]);

			});
		}
	}
}
</script>

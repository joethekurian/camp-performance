<template>
<div>

	<table>
		<tr>
			<th>Date</th>
			<th>Change</th>
			<th>AdGroup</th>

			<th>Impression Before</th>
			<th>Impression After</th>
			<th>Imp.Diff</th>
		</tr>
		<tr v-for='change in dispData'>
			<td>{{change.date | moment("dddd, MMMM Do YYYY")}}</td>
			<td>
				<div class="category">
					{{change.category}}
				</div>
				<div v-if="change.keyword ||change.changeData" class="subCategory">
					{{change.keyword}}<br> {{change.changeData}}
				</div>

			</td>
			<td>{{change.adGroup}}</td>

			<td>{{change.impBefore}}</td>
			<td>{{change.impAfter}}</td>

			<td v-if="change.impBefore>0">{{(((change.impAfter-change.impBefore)/change.impBefore)*100).toFixed(2)}}%</td>
			<td v-else>No Prev Data</td>

		</tr>
	</table>
</div>
</template>

<script>
export default {
	data() {
		return {
			id: this.$route.params.id,
			changes: [],
			metric: [],
			dispData: []
		}
	},

	created: function() {
		this.fetchItems();

	},

	methods: {
		fetchItems() {

			let uri = 'http://localhost:3000/changehistory/' + this.$route.params.id;
			this.axios.get(uri).then((response) => {
				this.changes = response.data.change;
				this.metric = response.data.metric;

				return this.changes
			}).then(() => {
				this.changes.forEach((change) => {
					this.dispData.push(this.getDispData(change))
					//console.log(change)
				})
			});
		},
		getDispData(change) {
			//console.log(change)

			let dispItem = {
				category: change.category,
				keyword: change.keyword,
				date: change.date,
				changeData: change.changeData,
				adGroup: change.adGroup,
				impBefore: 0,
				impAfter: 0

			}
			// if (change.category == "CPC decreased" || change.category == "CPC increased") {
			// 	let keywordMetric = this.metric.filter((item) => {
			//
			// 		if (item.Criteria == change.keyword) {
			// 			return true
			// 		}
			// 	})
			// 	keywordMetric.forEach((item) => {
			//
			// 		if (item.Date < change.date) {
			// 			dispItem.impBefore += item.Impressions
			//
			// 		} else {
			// 			dispItem.impAfter += item.Impressions
			//
			// 		}
			// 	})
			//
			// }
			let keywordMetric = this.metric.filter((item) => {
				if (change.category == "CPC decreased" || change.category == "CPC increased") {
					if (item.Criteria == change.keyword) {
						return true
					}
				} else if (change.category == "Negative Keyword added" || change.category == "Keyword Added" || change.category == "User List Bid Adjustment") {
					if (item.CampaignName == change.campaignName) {
						return true
					}
				} else if (change.category == "Adgroup Paused" || change.category == "Adgroup active") {
					if (item.CampaignName == change.campaignName) {
						return true
					}
				} else {
					return true
				}

			})

			keywordMetric.forEach((item) => {

				if (item.Date <= change.date) {
					dispItem.impBefore += item.Impressions

				} else {
					dispItem.impAfter += item.Impressions

				}
			})





			//console.log(keywordMetric)

			//if (keywordMetric != undefined || keywordMetric.length != 0) {





			return dispItem
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
table {
	margin-left: 100px;
	margin-top: 50px;
	font-size: 14px;
}

th,
td {
	width: 150px;
	padding: 5px;
	text-align: left;
	border-bottom: 1px solid rgba(192, 208, 219, 0.50);
}

.subCategory {
	font-size: 12px;
}
</style>

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Campaigns from '@/components/Campaigns'
import CampaignDetail from '@/components/CampaignDetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Campaigns',
            component: Campaigns
    },
        {
            path: '/changehistory/:id',
            name: 'CampaignDetail',
            component: CampaignDetail
    }
  ]
})

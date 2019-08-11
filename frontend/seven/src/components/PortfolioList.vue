<template>
    <div>
        <div v-for="(portfolio, i) in portfolios" :key="i">
            <Portfolio
                :index = "i"
                :date = "portfolio.portDatetime"
                :title = "portfolio.portTitle"
                :body = "portfolio.portContent"
                :imgSrc = "portfolio.portImg"
            />
        </div>
    </div>
</template>

<script>
import Portfolio from '@/components/Portfolio'

export default {
    name: 'PortfolioList',
    components: {
        Portfolio
    },
    computed: {
        portfolios: function() {
            return this.$store.getters.getPortfolios
        }
    }
}
</script>
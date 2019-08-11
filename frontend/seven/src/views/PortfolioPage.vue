<template>
    <div>
        <h1>Portfolio</h1>
        <PortfolioList/>
    </div>
</template>

<script>
import PortfolioList from '@/components/PortfolioList'

export default {
    name: 'Portfoliopage',
    components: {
        PortfolioList
    }
}
</script>
<template>
    <div>
        <home-header></home-header>
        <home-know></home-know>
        <home-suggestions></home-suggestions>
        <home-facts></home-facts>
        <home-show-comments></home-show-comments>
    </div>
</template>

<script>
//import elements

import appHeader from './appHeader'
import appKnowHow from './appKnowHow'
import appSuggestions from './appSuggestions'
import appFacts from './appFacts'
import appShowComments from './appShowComments'

// ------------------

export default {

    components: {
        'home-header' : appHeader,
        'home-know': appKnowHow,
        'home-suggestions': appSuggestions,
        'home-facts' : appFacts,
        'home-show-comments' : appShowComments
    }
    
}
</script>

<style lang="scss" scoped>

</style>



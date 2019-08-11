<template>
    <div>
        <h1>Post</h1>
        <PostList/>
    </div>
</template>

<script>
import PostList from '@/components/PostList'

export default {
    name: 'Postpage',
    components: {
        PostList
    }
}
</script>
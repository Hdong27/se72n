<template>
    <div>
        <div v-for="(post, i) in posts" :key="i">
            <Post
                :index = "i"
                :date = "post.postDatetime"
                :title = "post.postTitle"
                :body = "post.postContent"
            />
        </div>
    </div>
</template>

<script>
import Post from '@/components/Post'

export default {
    name: 'PostList',
    components: {
        Post
    },
    computed: {
        posts: function() {
            return this.$store.getters.getPosts
        }
    }
}
</script>
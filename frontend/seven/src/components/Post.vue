<template>
    <div>
        <h5>{{title}}</h5>
        <p>{{date}}</p>
        <p>{{body}}</p>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        index: {type: Number},
        date: {type: String},
        title: {type: String},
        body: {type: String},
    }
}
</script>
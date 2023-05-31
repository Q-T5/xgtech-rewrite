<template>
	<div class="p-2 shadow-sm">
		<h1 class="font-ubuntu text-3xl">{{ title }}</h1>
	</div>
</template>

<script lang="js">
	import { ref } from 'vue';
	export default {
	    name: "TopInfoBarComp",
	    props: {
	        title: {
	            required: true,
	            default: "Generic Component Title",
	            type: String
	        }
	    },
	    setup(props) {
            const title = ref(props.title);

            return {
                title
            }
	    }
	}
</script>

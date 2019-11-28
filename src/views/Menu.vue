<template>
    <div>
        <home-plans></home-plans>
    </div>
</template>

<script>
import HomePlans from '@/components/HomePlans';

export default {
    name: 'Menu',
    props: ['results'],
    components: {
        HomePlans
    }
};
</script>

<style scoped></style>

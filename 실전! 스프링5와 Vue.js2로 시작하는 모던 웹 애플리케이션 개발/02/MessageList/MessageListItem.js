export default{
    name: 'MessageListItem',
    template: `
        {{ item.text }} - {{ item.createdAt }}
        <button @click="deleteClicked">X</button>
    `,
    props:{
        item:{
            type: Object,
            required: true
        }
    },
    methods: {
        deleteClicked(){
            this.$emit('delete');
        }
    }
}
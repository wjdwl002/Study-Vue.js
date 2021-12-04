import MessageListItem from './MessageListItem'

export default{
    name: 'MessageList',
    template:`
        <ul>
            <message-list-item v-for="item in items" :item="item" @delete="deleteMessage(item)>
            </message-list-item>
        </ul>
    `,
    components:{
        MessageListItem
    },
    props:{
        items: {
            type: Array,
            required: true,
        }
    },
    methods:{
        deleteMessage(message){
            this.$emit('delete', message);
        }
    }
}

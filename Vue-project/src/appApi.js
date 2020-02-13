import Vue from 'vue'
import axios from 'axios'

export default{
    login:function(){
        return axios.post('/login')
    },
    register:function(){
        return axios.post('/register')
    }
}
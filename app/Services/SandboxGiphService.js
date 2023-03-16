import { appState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"

const sandboxApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/',
    timeout: 5000
})


class SandboxGiphService{

    async getAllGiphs(){
        const res = await sandboxApi.get('api/gifts')
        console.log(res.data)
        appState.gifts = res.data.map(g => new Gift(g))
        console.log('from appstate', appState.gifts)

    }

    async createGift(formData) {
        const res = await sandboxApi.post('api/gifts', formData)
        

    }

}

export const sandboxGiphService = new SandboxGiphService()
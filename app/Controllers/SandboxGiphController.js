import { appState } from "../AppState.js"
import { sandboxGiphService } from "../Services/SandboxGiphService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"
import { getFormData } from "../Utils/FormHandler.js"

function _drawGifts() {
    let gifts = appState.gifts
    let template = ''
    gifts.forEach(g=>template += g.giftTemplate)
    setHTML('giftPage', template)
}

export class SandboxGiphController{
    constructor() {
        console.log('from sandbox controller')
        this.getAllGighs()
        appState.on('gifts', _drawGifts)
    }

    async getAllGighs() {
        try {
            await sandboxGiphService.getAllGiphs()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async createGift() {
        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        try {
            await sandboxGiphService.createGift(formData)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}
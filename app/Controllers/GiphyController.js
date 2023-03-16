import { appState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { giphyService } from "../Services/GiphyService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawSearchResults() {
    let template = ''
    appState.searchResults.forEach(result => {
        console.log(result)
        template += Gift.resultTemplate(result.images.fixed_height.url)
    })
    setHTML('search-results', template)
}


export class GiphyController{
    constructor() {
    console.log('test from giphy controller')
    appState.on('searchResults', _drawSearchResults)
    }

    async getNewGiphs() {
        event.preventDefault()
        const form = event.target
        console.log(form.search.value)
        try {
            await giphyService.getNewGiphs(form.search.value)
        } catch (error) {
            console.error(error)
            Pop.error(error)
            
        }
    }

}




export class Gift {
    constructor(data){
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened

    }


    get giftTemplate() {
        return`
        <div class="col-4 card p-2">
            <img src="${this.url}" alt="">
            <h5 class="text-center">${this.tag}</h5>
        </div>
`
    }

    static resultTemplate(url) {
        return`
        <div class="col-6 card">
              <img src="${url}" alt="">
            </div>
        
            `
    }
}
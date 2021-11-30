class FormBuilder{    
    
    documentBody;
    form;
    documentForm;
    endpoint;

    constructor(properties, documentId, documentForm = 'form', endpoint){
        this.documentBody = document.getElementById(documentId);
        this.documentForm = document.getElementById(documentForm);

        this.form = {};
        this.documentBody.innerHTML = '';
        this.endpoint = endpoint;

        properties.forEach( p => {
            console.log(p);
            this.form[p.id] = document.getElementById(p.id);

            if(p.type === 'select'){
                let options = '';
                p.options.forEach(o => {
                    options += `<option value="${ o.id }"> ${ o.nombre } (${ o.id })</option>`
                });
                this.append(`
                <div class="form-group">
                    <label for="${ p.id }"> ${ p.name } </label>
                    <select class="form-control" id="${ p.id }" placeholder="${ p.placeholder }" required>
                        <option selected disabled> ${ p.placeholder }</option>
                        ${ options }
                    </select> 
                </div>`);
            }else{
                this.append(`
                <div class="form-group">
                    <label for="${ p.id }"> ${ p.name } </label>
                    <input type="${ p.type }" class="form-control" id="${ p.id }" placeholder="${ p.placeholder }" required> 
                </div>`);
            }
        });

        const self = this;

        this.documentForm.addEventListener('submit', async(e) => {
            e.preventDefault();

            if(confirm('¿Desea agregar este registro?')){

                let body = {};
                Object.keys(self.form).forEach(p => {
                    console.log(p);
                    const value = document.getElementById(p);
                    console.log(value);
                    body[p] = value.value;
                });

                body = JSON.stringify(body);

                let ok = await insertRecord(endpoint, body);

                if (ok){
                    alertar('Registro agregado', 'success');
                    self.documentForm.reset();
                }else{
                    alertar('No se pudo insertar el registro', 'danger');
                }

            }

        });
    }

    append(text){
        this.documentBody.innerHTML += text;
    }

}
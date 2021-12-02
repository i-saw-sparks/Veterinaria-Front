class FormBuilder {

    documentBody;
    form;
    documentForm;
    endpoint;
    id;
    endpoint;

    constructor(properties, documentId, documentForm = 'form', endpoint) {
        this.documentBody = document.getElementById(documentId);
        this.documentForm = document.getElementById(documentForm);

        this.form = {};
        this.documentBody.innerHTML = '';
        this.endpoint = endpoint;
        this.id = this.getId();
        this.endpoint = endpoint;

        properties.forEach(p => {
            console.log(p);
            const min = p['min'] || "";
            this.form[p.id] = document.getElementById(p.id);

            if (p.type === 'select') {
                let options = '';
                p.options.forEach(o => {
                    options += `<option value="${o.id}"> ${o.nombre} (${o.id})</option>`
                });
                this.append(`
                <div class="form-group">
                    <label for="${p.id}"> ${p.name} </label>
                    <select class="form-control" id="${p.id}" placeholder="${p.placeholder}" required>
                        <option selected disabled value=""> ${p.placeholder}</option>
                        ${options}
                    </select> 
                </div>`);
            } else {
                if (p.value) {
                    this.append(`
                    <div class="form-group">
                        <label for="${p.id}"> ${p.name} </label>
                        <input type="${p.type}" min="${min}" class="form-control" id="${p.id}" placeholder="${p.placeholder}" value="${p.value}" required> 
                    </div>`);
                } else {
                    this.append(`
                    <div class="form-group">
                        <label for="${p.id}"> ${p.name} </label>
                        <input type="${p.type}" min="${min}" class="form-control" id="${p.id}" placeholder="${p.placeholder}"  required> 
                    </div>`);
                }

            }
        });

        const self = this;

        this.documentForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            let body = {};
            Object.keys(self.form).forEach(p => {
                console.log(p);
                const value = document.getElementById(p);
                console.log(value);
                body[p] = value.value;
            });

            body['id'] = this.id;
            console.log(body);

            body = JSON.stringify(body);


            if (this.id === '') {
                if (confirm('¿Desea agregar este registro?')) {

                    let ok = await insertRecord(endpoint, body);

                    if (ok) {
                        alertar('Registro agregado', 'success');
                        self.documentForm.reset();
                    } else {
                        alertar('No se pudo insertar el registro', 'danger');
                    }

                }
            } else {
                if (confirm('¿Desea actualizar este registro?')) {
                    let ok = await updateRecord(endpoint, body);

                    if (ok) {
                        alertar('Registro editado', 'success');
                        setTimeout(() => {

                            window.location.assign(this.endpoint + 's.html');

                        }, 2500);
                    } else {
                        alertar('No se pudo editar el registro', 'danger');
                    }
                }
            }

        });
    }

    append(text) {
        this.documentBody.innerHTML += text;
    }

    getId() {
        const queryString = window.location.search;

        if (queryString == '') {
            return '';
        } else {

            const urlParams = new URLSearchParams(queryString);
            return urlParams.get('id') || '';
        }
    }

    async load() {
        if (this.id !== '') {
            const body = await getRecord(this.endpoint, this.id);
            console.log({ body });
            Object.keys(body).forEach(k => {
                try {
                    const form = document.getElementById(k);

                    if (form.type == 'date') {
                        form.value = body[k].substring(0, body[k].indexOf('T'));
                    } else {
                        form.value = body[k];
                    }
                } catch (e) {
                }
            });
        }

    }

}
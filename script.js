const handleSubmit=(event)=>{
    event.preventDefault();

    const name = document.querySelector(`input[name=name]`).value;
    const email = document.querySelector(`input[name=email]`).value;
    const telefone = document.querySelector(`input[name=telefone]`).value
    const endereco = document.querySelector(`input[name=endereco]`).value
    const genero = document.querySelector(`select[name=genero]`).value
    const nascimento = document.querySelector(`input[name=nascimento]`).value
    const preference = document.querySelector(`input[name=preference]`).value

    fetch('https://api.sheetmonkey.io/form/sYCX4U2YCEZG7AESmAq1wb', {
        method: 'post',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },

        body: JSON.stringify({name:name, email:email, telefone:telefone, endereco:endereco, genero:genero, nascimento:nascimento, Preferências:preference})
    })
}

document.querySelector('form').addEventListener("submit", handleSubmit)
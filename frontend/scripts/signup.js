const API_URL = "HTTP://localhost:8080";

async function signup(event){
    event.preventDefault();

    const usernameinput = document.getElementById("username").value;
    const passwordinput = document.getElementById("password").value;

    try{
        const response = await fetch('${API_URL}/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ username: usernameinput, password: passwordinput })
        });

        if (response.ok) {
            alert("Usuario cadastrado com sucesso!");
            window.location.href = "login.html";
        } else {
            alert("Erro ao cadastrar usuario!");
        }
    }catch (error) {
        console.error("Erro ao cadastrar usuario:", error);
        alert("Erro ao conectar com o servidor");
    }

}
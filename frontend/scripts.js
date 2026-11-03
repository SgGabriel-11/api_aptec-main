const API_URL = "HTTP://localhost:8080";

async function login(event){
    event.preventDefault();

    const usernameinput = document.getElementById("username").value;
    const passwordinput = document.getElementById("password").value;

    try {
        const response = await fetch('${API_URL}/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ username: usernameinput, password: passwordinput })
        });

        if (response.ok) {
            const token = response.headers.get("Authentication");

            if(token){
                localStorage.setItem("Authorization", token);

                alert("Login Realizado com sucesso");

                window.location.href = "index.html";
            } else {
                alert("Usuario ou senha invalidos!");
            }
    }

    }catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Erro ao conectar com o servidor");
    }
}
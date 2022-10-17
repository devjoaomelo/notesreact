import { Container, Profile } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/devjoaomelo.png"
                alt="Foto do usuário"
                />

                <div>
                    <span>Bem vindo,</span>
                    <strong>João Melo!</strong>
                </div>

            </Profile>

        </Container>
    );
}
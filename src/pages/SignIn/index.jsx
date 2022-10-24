import { Background, Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth'
import { useState } from 'react';

export function SignIn(){
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const { signIn } = useAuth();
    function handleSignIn(){
        signIn({ email, password });
    }
    return (
        <Container>
            <Form>
                <h1>Personal Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input placeholder="E-mail"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />

                <Input placeholder="Senha"
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}>
                </Button>

                <Link to="/register">Crie sua conta</Link>

            </Form>

            <Background />
            
        </Container>
    );
}
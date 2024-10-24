export default function Footer() {
    return (  
        <div style={{
            padding: '12rem',
            backgroundColor: '#131313',
            color: '#D9D9D9',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',   
            }}>
                <strong style={{
                    fontSize: '4rem',
                    color: '#0C95E2',
                }}>PROJETOS</strong>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10rem',
                gap: '10rem',
                position: 'relative',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                }}>
                    <strong style={{
                        fontSize: '2rem',
                        color: '#0C95E2',
                    }}>placeholder4j</strong>
                    <span style={{
                        textAlign: 'center',
                        wordWrap: 'break-word',
                        width: '20rem',
                    }}>
                        Substitua partes de um texto por placeholders dinâmicos.
                        Através da implementação de uma interface, é possível criar uma representação de um campo de texto com placeholders.
                    </span>
                    <a href="https://github.com/luiz-otavio/placeholder4j">
                        <img src='/portfolio/github-1.svg' style={{
                            width: '3rem',
                            height: '3rem',
                        }}/>
                    </a>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                }}>
                    <strong style={{
                        fontSize: '2rem',
                        color: '#0C95E2',
                     }}>Slime Korld</strong>
                    <span style={{
                        textAlign: 'center',
                        wordWrap: 'break-word',
                        width: '20rem',
                    }}>
                        Salve, gerencie e crie mundos de alta performance para Minecraft com Slime Korld.
                        Através de uma interface simples, é possível criar mundos de baixo consumo de memória e armazenamento 
                        com opções de personalização.
                    </span>
                    <a href="https://github.com/luiz-otavio/slime-korld" target="_blank">
                        <img src='/portfolio/github-1.svg' style={{
                            width: '3rem',
                            height: '3rem',
                        }}/>
                    </a>
                </div>                    
            </div>
        </div>  
    )
}
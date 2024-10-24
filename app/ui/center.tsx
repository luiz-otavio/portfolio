export default function Center() {
    return (  
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10rem',
                padding: '12rem',
                backgroundColor: '#131313',
                color: '#D9D9D9',
            }}>
                <div style={{
                    borderRight: '1rem solid #0C95E2'
                }}>
                    <strong style={{
                        fontSize: '6rem',
                        fontStyle: 'bold',
                        margin: '0',
                        wordWrap: 'break-word',
                        width: '30rem',
                        color: '#0C95E2',
                    }}>SOBRE MIM</strong>
                </div>
                <div>
                    <p style={{
                        fontSize: '2rem',
                        margin: '0',
                        wordWrap: 'break-word',
                        width: '50rem',
                    }}>
                        Meu nome é Luiz Otávio, sou um arquiteto de software e tenho 18 anos.
                        Atualmente enfrento desafios de engenharia de software e busco soluciona-los com estrategias de arquitetura, design e implementação de software.
                        Meu foco principal é no controle de dados e na segurança da informação, mas também tenho interesse em jogos e web. 
                        Possuo projetos disponiveis no meu Github e estou sempre aberto a novas oportunidades e desafios.   
                    </p>
                </div>
            </div>
        <div>
           
        </div>
    </div>  
    )
}
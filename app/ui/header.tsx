export type HeaderProps = {
    LinkedinURL: string;
    GithubURL: string;
}

// Request to get the image from the github profile
function GetGithubImage(username: string): string {
    return "https://github.com/" + username + ".png";
}

export default function Header(props: HeaderProps) {
  return (
    <div style={{
        padding: '0',
        margin: '0',
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem',
            alignItems: 'center',
            borderBottom: '3px solid #0C95E2',
            backgroundColor: '#131313',
        }}>
            <h1 style={{
                display: 'flex',
                alignItems: 'center',
                margin: '0',
                textSizeAdjust: 'auto',
                color: '#D9D9D9',
            }}>Portfolio</h1>
            <div style={{    
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                justifyContent: 'center',
            }}>
                <a href={props.GithubURL} target='_blank'>
                    <img src='/portfolio/github-1.svg' style={{
                        width: '3rem',
                        height: '3rem',
                    }}/>
                </a>
                <a href={props.LinkedinURL} target='_blank'>
                    <img src='/portfolio/linkedin.png' style={{
                        width: '3rem',
                        height: '3rem',
                    }}/>
                </a>
            </div>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10rem',
            padding: '18rem',
            backgroundColor: '#131313',
            color: '#D9D9D9',
        }}>
            <div>
                <img src={GetGithubImage('luiz-otavio')} style={{
                    width: '20rem',
                    height: '20rem',
                    border: '3px solid #0C95E2',
                    borderColor: '#0C95E2',
                    borderRadius: '50%',
                }}/>
            </div>
            <div>
                <h1 style={{
                    fontSize: '4rem',
                    margin: '0',
                    color: '#0C95E2',
                }}>E ai, beleza?</h1>
                <p style={{
                    fontSize: '1.5rem',
                    wordWrap: 'break-word',
                    width: '35rem',
                }}>
                    Eu me chamo Luiz, e desenvolvo soluções e aplicações para você e sua empresa, portanto,
                    que tal darmos uma olhada nesse meu trabalho de portfolio? Garanto que você vai gostar!
                </p>
            </div>
        </div>
    </div>
  )
}
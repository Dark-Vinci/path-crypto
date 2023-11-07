import style from './header.module.scss';

export function Header(): JSX.Element {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1>
                    Meet the <strong>future of crypto investing.</strong>
                </h1>
                <div className={style.description}>
                    <p>Whether you’re building your first portfolio or you’ve been in crypto for years, Path aims to give you a simpler, smarter way to invest in digital assets.</p>
                </div>

                <form action=".">
                    <div className={style.label}>
                        <label htmlFor="">🚀 Coming soon! Be the first to know.</label>
                    </div>
                    <div className={style.form_container}>
                        <input type="text" />
                        <button>submit</button>
                    </div>
                </form>
            </div>

            <div className={style.video}>
                <iframe 
                    src="https://player.vimeo.com/video/770601792?background=1&autoplay=1&loop=1&autopause=0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="This is a unique title"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

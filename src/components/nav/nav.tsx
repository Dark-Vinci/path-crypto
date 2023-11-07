import style from './nav.module.scss'

export function Navigation(): JSX.Element {
    return (
        <div className={style.container}>
            <div className={style.blurry_overlay}></div>
            <div className={style.content}>
                <div className={style.logo}>
                    <div className={style.icon}>
                        <img src='https://assets-global.website-files.com/62a0c3db69e9f31272bb38a0/6329fe611a33acfb8529f09d_Path-logo.svg' alt=""/>
                    </div>
                </div>

                <div className={style.location}>
                    <ul>
                        <li>Institutions</li>
                        <li>Blogs</li>
                        <li>Company</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

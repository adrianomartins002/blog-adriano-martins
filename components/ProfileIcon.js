import styles from './ProfileIcon.module.css';
import { useRouter } from 'next/router';

export default function ProfileIcon() {
    const router = useRouter()
    return (
        
        <div className={styles.perfil} onClick={()=>router.push("/aboutme")}>
            <img src="https://avatars.githubusercontent.com/u/26367831?v=4"></img>
            <span>Adriano Martins</span>
        </div>
        
    )
}
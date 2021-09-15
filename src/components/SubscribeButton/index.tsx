import { signIn, useSession } from "next-auth/client";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const [session] = useSession();
    function handleSubscribe() {
        if (!session) {
            signIn();
            return;
        }

        //TODO Criação da checkout session
    }

    return (
        <button className={styles.subscribeButton} type="button" onClick={handleSubscribe}>
            Subscribe now
        </button>
    );
}

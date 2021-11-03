import { useRouter } from "next/router"

export default function confirm() {
    const router = useRouter();
    const { id, code } = router.query;

    const request = await fetch(`https://api.amemais.tech/user/account/confirm`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Content': 'application/json'
        },
        body: JSON.stringify({
            id,
            confirm_code: code
        })
    });

    const response = await request.json();

    if(response.status === 'success') {
        return(
            <div>
                <h1>A conta foi ativada com sucesso.</h1>
            </div>
        )
    }

    return(
        <div>
            <h1>A conta não foi ativada.</h1>
        </div>
    )

}
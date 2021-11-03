import { useRouter } from "next/router"

export async function getStaticProps(context) {
    const router = useRouter();
    const { id, code } = router.query;
    console.log(router.query)
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
    })

    const response = await request.json();

    return {
        props: { status: response.status }, // will be passed to the page component as props
    }
}

export const getStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export default function confirm({ status }) {
    if (status === 'success') {
        return (
            <div>
                <h1>A conta foi ativada com sucesso.</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>A conta não foi ativada.</h1>
        </div>
    )
}
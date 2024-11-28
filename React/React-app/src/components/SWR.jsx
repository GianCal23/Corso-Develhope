import useSWR from "swr"

const fetcher = (res) => res.json()

const ApiIntegrationSWR = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/beers/ale', fetcher)
    return (
        <div>
            <div>{loading ?}</div>
        </div>
    )
}
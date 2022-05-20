import { useEffect, useState } from "react"

const useToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://warm-citadel-87543.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return [toys, setToys]
}
export default useToys;

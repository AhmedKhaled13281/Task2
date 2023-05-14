import {useState , useEffect} from 'react'

const useFetch = () => {
    const [response , setResponse] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

    const sendRequest = async (body , url , methodType) => {
        try{
            const response = await fetch(url , {
                method : methodType,
                body : JSON.stringify(body),
                headers : {'Content-Type': 'application/json'}
            })
             const urlData = await response.json()
             setResponse(urlData)
             setLoading(false)
        }catch(err){
            setError(err)
            setLoading(false)

        }
    } 

    useEffect(() => {
        sendRequest()
    } , [])

    return {response ,  loading , error , sendRequest}
}

export default useFetch
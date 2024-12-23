const DynamicPage = async (props:any) => {
    console.log(props)
    const url = await fetch (`https://jsonplaceholder.typicode.com/posts/${props.params.id}`)
    const response = await url.json()
    console.log("Single Post",response)

    return(
        <div>
            <h2 className="text-2xl font-semibold bg-slate-300 py-4 text-center mt-4">{response.title}</h2>
        </div>
    )
}
export default DynamicPage;
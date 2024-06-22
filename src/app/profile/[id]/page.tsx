export default function UserProfile({params}:any){

    return(
        <div className="p-4">
            <p>
                Profile PAge
            </p>
            <div>
                <p>User: {params.id}</p>
            </div>
        </div>
    )
}
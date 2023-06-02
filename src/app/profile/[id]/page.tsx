"use server"

//import ApiService from '../../../services/ApiService';

//const apiServices = new ApiService('https://jsonplaceholder.typicode.com');

export default async function Profile({ params }: { params: { id: number } }) {

    //const user: User = await apiServices.getUserProfile(params.id);

    return (
        <section className="flex flex-col">
            <p>param from URL is: {params.id}</p>
            <p>TODO: get data from https://jsonplaceholder.typicode.com/users/{params.id}</p>
        </section>
    );
}

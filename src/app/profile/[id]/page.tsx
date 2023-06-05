//import ApiService from "@/services/ApiService";

import Link from "next/link";

//const apiService = new ApiService('https://jsonplaceholder.typicode.com');

async function getUser(id: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  //const res = await apiService.getUserProfile(id);
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { id: number };
}) {
  const user = await getUser(params.id);

  return {
    title: `Blog | ${user.name}`,
  };
}

export default async function Page({
  params
}: {
  params: { id: number }
}) {
  const user = await getUser(params.id);
  return <section className="flex flex-col self-center">
    <h1 className="text-5xl text-center m-6">{user.username}&apos;s profile</h1>

    <div className="flex flex-col md:flex-row">
      <div className="m-8">
        <h3 className="text-3xl">Personal info</h3>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
      <div className="m-8">
        <h3 className="text-3xl">Location</h3>
        <p>{user.address.street}</p>
        <p>{user.address.suite}</p>
        <p>{user.address.city}</p>
        <p>{user.address.zipcode}</p>
      </div>
    </div>
    <div className="flex flex-col self-start m-8">
      <p className="text-3xl md:text-center">Contact</p>
      <div className="flex flex-row flex-wrap">
        {/* <Link href={user.website} target="_blank" className="m-2">
          WEB
        </Link> */}
        {/* TODO fix link to absolute path */}

        <Link href="mailto:recipient@example.com" target="_blank" className="m-2">EMAIL</Link>


        <Link href={`https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat},${user.address.geo.lng}`} target="_blank" className="m-2">
          MAPA
        </Link>
      </div>
    </div>
  </section>
}
import React from 'react';
import ApiService from '@/services/ApiService';
import Link from 'next/link';
import { capitalizeFirstLetter } from '@/functions/capitalizeFirstLetter';

async function getUser(id: number): Promise<User> {
  const res = await ApiService.getInstance().getUserProfile(id);
  return res;
}

export async function generateMetadata({
  params
}: {
  params: { id: number };
}): Promise<unknown> {
  const user = await getUser(params.id);

  return {
    title: `Blog | ${user.name}`
  };
}

export default async function Page({
  params
}: {
  params: { id: number };
}): Promise<unknown> {
  const user = await getUser(params.id);
  return (
    <section className="flex flex-col self-center">
      <h1 className="m-6 text-5xl text-center">
        {user.username}&apos;s profile
      </h1>

      <div className="flex flex-col md:flex-row">
        <div className="m-8">
          <h3 className="text-3xl">Personal info</h3>
          <p>{user.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p>{capitalizeFirstLetter(user.company.bs)}</p>
        </div>
        <div className="m-8">
          <h3 className="text-3xl">Location</h3>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
        </div>
      </div>
      <div className="flex flex-col m-8">
        <p className="text-3xl md:text-center">Contact</p>
        <div className="flex flex-row flex-wrap md:justify-center">
          <a
            href={'https://www.' + user.website}
            className="my-2 mr-2"
            target="_blank"
            rel="noreferrer"
          >
            WEB
          </a>
          <Link href={'mailto:' + user.email} target="_blank" className="m-2">
            EMAIL
          </Link>
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat},${user.address.geo.lng}`}
            target="_blank"
            className="my-2 ml-2"
          >
            MAP
          </Link>
        </div>
      </div>
    </section>
  );
}

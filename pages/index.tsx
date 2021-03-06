import Head from 'next/head'
import { useQuery } from '@apollo/client';
import {query} from './query.js';

import styles from '../styles/Home.module.css'

interface CountryTypes{
  name:string;
  _id?: number;
}

export default function Home() {
  const { data, loading, error } = useQuery(query);
   // make sure all data is loaded
   if (loading) {
    return <p>loading...</p>;
  }
// check for errors
if (error) {
  return <p>: an error happened</p>;}

  return (
    <div className={styles.container}>
      <Head>
        <title>Countries GraphQL</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Countries</h1>
      <div>
        {data.countries.map((country:CountryTypes) => (
          <div key={country._id}>{country.name}</div>
        ))}
      </div>
    </div>
  );
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SimpleTable } from './components/Table/simple-table'
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";
import { randEmail, randFullName, randNumber, randPastDate, randPhoneNumber } from "@ngneat/falso";
import { SortData } from './components/Table/types'
import { useState } from 'react'
import { Button, Checkbox } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

djs.extend(advancedFormat);

// Generate mock data for our table
const data = Array(20)
  .fill(1)
  .map(() => {
    const date = randPastDate();
    return {
      id: randNumber(),
      name: randFullName(),
      contact: {
        email: randEmail(),
        phone: randPhoneNumber()
      },
      dob: {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate()
      }
    };
  });

export default function Home() {

  const [checked, setChecked] = useState<any[]>([]);
  const [sort, setSort] = useState<SortData>({ id: "name", dir: "asc" });

  const handleChecked = (id) => {
    console.log(id)
    if(checked.includes(id)) {
      const removed = checked.filter((item) => item !== id);
      setChecked(removed)
    } else {
      setChecked([...checked, id])
    }
  }

  console.log(checked)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </div>

        <div style={{ height:'100%', width: '100%', padding: '2rem'}}>
          <SimpleTable
            data={data}
            useCards
            sort={sort}
            onSort={(value) => {
              console.log(value)
              setSort(value)
            }}
            dataKeyFn={item => item?.name || "empty"}
            cols={[
              ["id", "Selected", item => <Checkbox isChecked={checked.includes(item.id)} onChange={() => handleChecked(item.id)} />],
              ["name", "Name", "name"],
              ["email", "Email", "contact.email", { sortable: false }],
              ["phone", "Phone", 
                item => <Button size={'sm'} h={'24px'} m={0} onClick={() => console.log(item)}>View</Button>
              ],
              [
                "dob",
                // eslint-disable-next-line react/jsx-key
                <i>Date Of Birth</i>,
                item =>
                  djs(`${item.dob.year}-${item.dob.month}-${item.dob.day}`).format(
                    "Do MMMM YYYY"
                  )
              ]
            ]}
          />
        </div>
      </main>
    </>
  )
}

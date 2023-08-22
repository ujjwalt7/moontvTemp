import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { GetSearch } from '../../api/GetSearch';
import Card from '../../components/Carousel/Cards/Card';
import CardSkeleton from '../../components/Skeleton/CardSkeleton';

export default function Search() {
  const searchParams= useSearchParams();
  const [search,setsearch] = useState(searchParams.get('s'))
  const router = useRouter();
  const page = Number(searchParams.get('page'))
  const {data,status} = useQuery(['search',search||"",page||1],GetSearch)
  console.log(search)
  const tempArr = [1,1,1,1,1,1,1,1,1,1]
  // console.log(data?.length===0)
  return (
    <div className='w-full'>
      <div className="w-full flex py-4 px-8 border-b border-grey gap-2 items-center">
        <div className="w-full">
          <input autoFocus  type="search" onChange={(e)=>{
            router.replace({
              query:{...router.query,s:e.target.value,page:1}
            });
            setsearch(e.target.value)
          }} name="search" id="search" value={search||""} className='w-full px-4 py-3 bg-grey rounded-lg outline-none font-medium md:text-[1rem] text-sm' placeholder='Type to search Movies, Tv shows, etc...' />
        </div>
        <div className="p-2 text-3xl border border-greyLight rounded-lg">
          <AiFillCloseCircle />
        </div>
      </div>
      <div className="w-full py-4">
      {data!==null&&data?.results?.length!==0&&data?.results!==null&&data!==undefined&&(<div className="w-full flex flex-col gap-4 py-4">
            <div className="w-full flex justify-between px-6">
                <div className="text-2xl font-medium">Results For:{search}</div>
                
            </div>
            <div className="w-full grid grid-cols-6 gap-2 px-8">
                {
                    status === 'success' && data?.results?.map((e,i)=>{
                        return (
                            <Card data={e} key={i} type="tv"/>
                        )
                    })
                }
                {
                    status==='loading' && tempArr.map((e)=>(<CardSkeleton key={e}/>))
                }
            </div>
            <div className="w-full flex justify-center">
            <div className="flex items-center gap-2">
            <Link href={`search?s=${search}&page=${page?page!==1?page-1:page:'1'}`} className="px-4 py-2 rounded-lg bg-grey hover:bg-greyLight transition-all duration-200">
                        Prev
                    </Link><Link href={`search?s=${search}&page=${page?page!==data?.total_pages?page+1:page+1:'2'}`} className="px-4 py-2 rounded-lg bg-grey hover:bg-greyLight transition-all duration-200">
                        Next
                    </Link>
                </div>
            </div>
        </div>)}
        {
          data?.total_results===0&&data&&(
            <div className="w-full py-4 text-xl flex justify-center items-center">No Results Found :/</div>
          )
        }
        {/* {
          !data&&(
            <div className="w-full py-4 text-xl flex justify-center items-center">Type In To Search</div>
          )
        } */}
      </div>
    </div>
  )
}

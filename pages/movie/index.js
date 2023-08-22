import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'
import { FetchData } from '../../api/FetchData'
import Card from '../../components/Carousel/Cards/Card'
import CardSkeleton from '../../components/Skeleton/CardSkeleton'

export default function MoviePage() {
    const tempArr = [1,2,3,4,5,6,6,7,8,8,4,43]
    const router = useRouter()
    const searchParams = useSearchParams()
    const page =  Number(searchParams.get('page'))
    const {data,status} = useQuery(['queryPage','popular_movies',page||'1'],FetchData)
  return (
    <>
    <div className="w-full">
        <div className="w-full flex flex-col gap-4 py-4">
            <div className="w-full flex px-8 justify-between">
                <div className="text-2xl font-medium uppercase">Movies</div>
                <div className="flex items-center gap-2">
                    <Link href={`movie?page=${page?page!==1?page-1:page:'1'}`} className="px-4 py-2 rounded-lg bg-grey hover:bg-greyLight transition-all duration-200">
                        Prev
                    </Link><Link href={`movie?page=${page?page!==1?page+1:page+1:'2'}`} className="px-4 py-2 rounded-lg bg-grey hover:bg-greyLight transition-all duration-200">
                        Next
                    </Link>
                </div>
            </div>
            <div className="w-full grid grid-cols-6 px-8 gap-2">
                {
                    status === 'success' && data?.map((e,i)=>{
                        return (
                            <Card data={e} key={i} type="movie"/>
                        )
                    })
                }
                {
                    status==='loading' && tempArr.map((e)=>(<CardSkeleton key={e}/>))
                }
            </div>
            <div className="w-full flex justify-center">
            <div className="flex items-center gap-2">
            <Link href={`movie?page=${page?page!==1?page-1:page:'1'}`} className="px-4 py-2 rounded-lg bg-grey hover:bg-greyLight transition-all duration-200">
                        Prev
                    </Link><Link href={`movie?page=${page?page!==1?page+1:page+1:'2'}`} className="px-4 py-2 rounded-lg bg-grey hover:bg-greyLight transition-all duration-200">
                        Next
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

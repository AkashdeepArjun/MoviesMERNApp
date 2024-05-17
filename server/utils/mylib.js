import url from 'node:url'

import queryString from'node:querystring'



const isEmpty =(obj)=>{

for (const prop in obj){
    
    return Object.hasOwn(obj,prop)?false:true

}
    return true
}


const parseLink = (link)=>{

    const qs=url.parse(link).query

    const finalResult=queryString.parse(qs)


    return finalResult


}


const getFullUrl =(request)=>{


    return (request.protocol+"://"+request.get('host')+request.originalUrl)




}

const getQueriesFromLink =(link)=>queryString.parse(link)


export  {isEmpty,parseLink,getFullUrl,getQueriesFromLink}
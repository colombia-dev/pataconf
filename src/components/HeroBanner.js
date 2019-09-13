import React from "react";
import {graphql, StaticQuery, useStaticQuery} from "gatsby";

const getHeroBannerData  = data =>  {
    const { title, description } = data.heroBannerJson

    return (<>
    <h1>{title}</h1>
    <h2>{description}</h2>
    </>)

    // return <div>{JSON.stringify(data)}</div>;
}

// const HeroBanner = () => (
//     <StaticQuery query={graphql`query BannerQuery {
//           heroBannerJson {
//             title
//             description
//           }
//         }`} render={data => (
//         <>
//             {getHeroBannerData(data)}
//         </>
//     )}/>
// );

const HeroBanner = () => {
    const data = useStaticQuery(graphql`query BannerQuery {
          heroBannerJson {
            title
            description
          }
        }`)

    return (
        <>
            {getHeroBannerData(data)}
        </>
    )
};

export default HeroBanner;

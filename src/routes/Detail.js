import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    const getDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getDetail();
    }, [id]);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={detail.large_cover_image} alt={detail.title} />
                    <h1>{detail.title}</h1>
                    <p>
                        {detail.year}년 {detail.runtime}분 평점 {detail.rating}
                    </p>
                    <hr />
                    <p>{detail.description_full}</p>
                </div>
            )}
        </div>
    );
};

export default Detail;

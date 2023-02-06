import Image from "next/image";
export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;

  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}popular?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const res = await data.json();
  return (
    <div className="">
      <div className="">
        <div className="flex-wrap justify-center content-center align-middle">
          <h2 className="text-2xl">{res.title}</h2>
          <h2 className="text-lg">{res.release_date}</h2>
          <h2>Runtime: {res.runtime} minutes</h2>
          <h2 className="bg-green-600 inline-block my-2 py-2 px-2 rounded-lg text-sm text-white">
            {res.status}
          </h2>
        </div>
        <div className="flex justify-center content-center align-middle ">
          <Image
            className="my-12 w-1/2 h-1/2 flex justify-center content-center align-middle "
            src={imagePath + res.backdrop_path}
            width={1000}
            height={1000}
            alt="/"
            priority
          />
        </div>
        <p className=" mb-6 shadow-md shadow-emerald-500">{res.overview}</p>
      </div>
    </div>
  );
}

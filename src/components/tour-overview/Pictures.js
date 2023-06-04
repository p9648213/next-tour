import Image from "next/image";

export default function Pictures({ tour }) {
  let renderPicture = tour.images.map((img, index) => {
    return (
      <div key={index} className="picture-box">
        <Image
          className={`picture-box__img picture-box__img--${index + 1}`}
          src={`${process.env.NEXT_PUBLIC_URL}/img/tours/${img}`}
          alt={`${tour.name} Tour ${index + 1}`}
          width={2000}
          height={1333}
        />
      </div>
    );
  });

  return <section className="section-pictures">{renderPicture}</section>;
}

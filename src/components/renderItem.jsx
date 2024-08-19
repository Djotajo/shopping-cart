function RenderItem({
  category,
  description,
  id,
  image,
  price,
  rating,
  count,
  title,
}) {
  return (
    <>
      <p>{category}</p>
      <p>{description}</p>
      <p>{id}</p>
      <img src={image} alt={description} />
      <p>{price}</p>
      <p>{rating}</p>
      <p>{count}</p>
      <p>{title}</p>
    </>
  );
}

export default RenderItem;
// category
// :
// "jewelery"
// description
// :
// "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days."
// id
// :
// 6
// image
// :
// "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
// price
// :
// 168
// rating
// :
// {rate: 3.9, count: 70}
// title
// :
// "Solid Gold Petite Micropave "

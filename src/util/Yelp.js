const apiKey = 'FullMStSWZu6915-YPCg5FPNanveiEU4ZYTW55PqBy8QjnJcNj3x0DK1s-Nl640czYe8SkqsYGEz-dsCkmtfzQm8hL8yQT7EHZ5eUlqDOIbw5a8-GUprAOc8NZf6XHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}N&sort_by=${sortBy}`, {
      headers: {Authorization: `Bearer ${apiKey}`}}
    ).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    })
  }
}

export default Yelp;

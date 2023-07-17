import type Car from "@/types/car";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ckyvgdvm",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}
const formatCar = (car: any): Car => ({
  images: car.images.map((e: any) => {
    return {
      alt: e.capture || "",
      url: urlFor(e.asset._ref).url(),
    };
  }),
  litters: car.litters,
  name: car.name,
  year: car.year,
  brand: car.brand,
  criteria: car.criteria,
  model: car.model,
  transmission: car.transmission,
  seats: car.seats,
  engine: car.engine,
  features: car.features,
  electric_type: car.electric_type,
  rent_period: car.rent_period,
  currency: car.currency,
  fuel_type: car.fuel_type,
  price: car.price,
  slug: car.slug.current,
  id: car._id,
  doors: car.doors,
  description: car.description,
  properties: car.properties,
  created_at: car._created_at,
});

// get single car by slug
export const getCarBySlug = async (slug: any) => {
  const car = await client.fetch(
    `*[_type=='cars' && slug.current == "${slug}"][0]`,
    {
      slug,
    }
  );

  return formatCar(car);
};

const buildSanityQuery = (query: any) => {
  const {
    brand,
    model,
    cursor,
    price,
    location,
    transmission,
    seats,
    fuel_type,
    electric,
    criteria,
  } = query;
  let sanityQuery = `*[_type=='cars' `;
  if (brand) {
    sanityQuery += ` && brand == "${brand}"`;
  }
  if (model) {
    sanityQuery += ` && model == "${model}"`;
  }
  if (location) {
    sanityQuery += ` && location == "${location}"`;
  }
  if (criteria && criteria !== "all") {
    sanityQuery += ` && criteria == "${criteria}"`;
  }
  if (price) {
    sanityQuery += ` && price > ${price.min} && price < ${price.max}`;
  }
  if (transmission) {
    sanityQuery += ` && transmission in [${transmission.map(
      (e: any) => `"${e}"`
    )}]`;
  }
  if (seats) {
    sanityQuery += ` && seats in [${seats.map((e: any) => `"${e}"`)}]`;
  }
  if (fuel_type) {
    sanityQuery += ` && fuel_type in [${fuel_type.map((e: any) => `"${e}"`)}]`;
  }
  if (electric) {
    sanityQuery += ` && electric in [${electric.map((e: any) => `"${e}"`)}]`;
  }

  if (cursor) {
    sanityQuery += ` && _id > "${cursor}"`;
  }
  return sanityQuery + "]";
};

const buildSanityPaginationQuery = (query: any) => {
  let pageSize = 4;
  const limit = 8;
  const { cursor, sort } = query;
  let sanityQuery = ``;
  if (cursor) {
    sanityQuery += ` | order(_id) [0...${pageSize}]`;
  } else {
    sanityQuery += ` | order(_createdAt) [0...${limit}]`;
  }
  if (sort) {
    const sortsAvailable = ["high_price", "low_price", "popular"];
    if (sortsAvailable.includes(sort)) {
      if (sort === "high_price") {
        sanityQuery += ` | order(price desc)`;
      }
      if (sort === "low_price") {
        sanityQuery += ` | order(price asc)`;
      }
      if (sort === "popular") {
        sanityQuery += ` | order(_createdAt desc)`;
      }
    }
  }

  return sanityQuery;
};

export const getCars = async (query: {
  brand?: string;
  model?: string;
  cursor?: string;
}): Promise<Car[]> => {
  const queryStr = buildSanityQuery(query) + buildSanityPaginationQuery(query);
  const cars = await client.fetch(queryStr);
  return cars.map(formatCar);
};

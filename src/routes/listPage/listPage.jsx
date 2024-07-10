import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ListPage() {
  const data = listData;

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();

  const [searchParams, setSearchParams] = useState({
    type: "",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  useEffect(() => {
    setSearchParams({
      type: query.get("type") || "buy",
      location: query.get("city") || "",
      minPrice: query.get("minPrice") || 0,
      maxPrice: query.get("maxPrice") || 0,
    });
  }, [query]);

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter
            location={searchParams.location}
            maxPrice={searchParams.maxPrice}
            minPrice={searchParams.minPrice}
            type={searchParams.type}
          />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;

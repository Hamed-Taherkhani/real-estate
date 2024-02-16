"use client";

import Range from "../inputs/range";
import RowSelectBox from "../inputs/row-select-box";

const category = [
  {
    title: "Buy",
    value: "buy",
  },
  {
    title: "Rent",
    value: "rent",
  },
  {
    title: "Mortgage",
    value: "mortgage",
  },
];

const beds_bath = [
  {
    title: "+1",
    value: 1,
  },
  {
    title: "+2",
    value: 2,
  },
  {
    title: "+3",
    value: 3,
  },
  {
    title: "+4",
    value: 4,
  },
];

export default function FilterForm() {
  const handleCategoryChange = (cat) => {
    console.log(cat);
  };

  const handlePriceChange = (price) => {
    console.log(price);
  };

  const handleBedCountChange = (count) => {
    console.log(count);
  };

  const handleBathCountChange = (count) => {
    console.log(count);
  };

  const handleSqrChange = (square) => {
    console.log(square);
  };

  return (
    <form className="flex flex-col gap-6">
      <RowSelectBox
        items={category}
        name="cat"
        defaultValue="buy"
        onChange={handleCategoryChange}
      />

      <div>
        <p className="mb-1">Price</p>
        <Range name="price" step={1000} onChange={handlePriceChange} />
      </div>

      <div>
        <p className="mb-1">Bedroom</p>
        <RowSelectBox
          items={beds_bath}
          name="bed"
          defaultValue={1}
          onChange={handleBedCountChange}
        />
      </div>

      <div>
        <p className="mb-1">Bathroom</p>
        <RowSelectBox
          items={beds_bath}
          name="bath"
          defaultValue={1}
          onChange={handleBathCountChange}
        />
      </div>

      <div>
        <p className="mb-1">Square Feet</p>
        <Range name="sqr" step={10} onChange={handleSqrChange} />
      </div>
    </form>
  );
}

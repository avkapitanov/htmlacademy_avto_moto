const product = {
  title: `Марпех 11`,
  price: 2300000,
  oldPrice: 2400000,
  creditStart: 11000,
  isNewModel: true,
  options: [
    {
      type: `engine-type`,
      text: `бензин`,
    },
    {
      type: `transmission`,
      text: `механика`,
    },
    {
      type: `power`,
      text: `100`,
    },
    {
      type: `engine-volume`,
      text: `1.4 л`,
    },
  ],
  characteristics: [
    {
      name: `Трансмиссия`,
      value: `Роботизированная`
    },
    {
      name: `Мощность двигателя, л.с.`,
      value: `249`
    },
    {
      name: `Тип двигателя`,
      value: `Бензиновый`
    },
    {
      name: `Привод`,
      value: `Полный`
    },
    {
      name: `Объем двигателя, л`,
      value: `2.4`
    },
    {
      name: `Макс. крутящий момент`,
      value: `370/4500`
    },
    {
      name: `Количество цилиндров`,
      value: `4`
    },
  ],
  images: [
    {
      middle: `./img/content/product-image-1.jpg`,
      middle2x: `./img/content/product-image-1@2x.jpg`,
      preview: `./img/content/product-image-preview-1.jpg`,
      preview2x: `./img/content/product-image-preview-1@2x.jpg`,
    },
    {
      middle: `./img/content/product-image-2.jpg`,
      middle2x: `./img/content/product-image-2@2x.jpg`,
      preview: `./img/content/product-image-preview-2.jpg`,
      preview2x: `./img/content/product-image-preview-2@2x.jpg`,
    },
    {
      middle: `./img/content/product-image-3.jpg`,
      middle2x: `./img/content/product-image-3@2x.jpg`,
      preview: `./img/content/product-image-preview-3.jpg`,
      preview2x: `./img/content/product-image-preview-3@2x.jpg`,
    },
  ],
};

export default product;

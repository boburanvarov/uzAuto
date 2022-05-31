export interface SelectedAvto  {
  colors: ColorsAvto[],
  min_price: string
  modifications: Modifications[],
  colorName?: string,
  img?: string,
  model_id?: number,
  name?: string,
}


export interface ColorsAvto{
  colorName?: string,
  hex_value?: string,
  img?: string,
  model_id?: number,
  name?: string
}
export interface  Modifications{
  acceleration: string,
  color_margins: any[],
  descriptions: string
  fuel_consumption: string,
  horsepower: string,
  modification_id: string
  name: string,
  options: any[],
  price: string,
  producing: string
  transmission: string
}

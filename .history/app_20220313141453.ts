export { };

type Product = {
    id: number,
    name: string,
    price: number
}
type Product2 = {
    id: number,
    name: string,
    status: boolean
}
type mergeType = Product | Product2;

const a: number = 20;
const myName: string = "TRần Minh Dũng";
const myStatus: boolean = true;
const myObj: { id: number, name: string } = { id: 1, name: "Dũng" };
const arrNumber: number[] = [1, 2, 3, 4];
const arrString: string[] = ["a", "b", "c"];
const arrObj: { id: number, price: number, name: string }[] = [{ id: 1, price: 2000, name: "Sản phẩm A" }];

const name: string | number = "Trần Minh Dũnggg";
const arrObject: mergeType[] = [
    { id: 1, price: 2000, name: "Sản phẩm A" },
    { id: 1, name: "Sản phẩm B", status: true }
];
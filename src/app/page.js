import { fetchAllProducts } from "@/actions";
import ProductCard from "../components/product-card";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const getSession = await auth();


  if(!getSession?.user) {
    return redirect('/unauth-page');
  }

  const getAllProducts = await fetchAllProducts();
  console.log("Products:",getAllProducts);

  return (
    <div>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto p-2">

        {getAllProducts && getAllProducts.data && getAllProducts.data.length > 0?
        getAllProducts?.data.map((productItem) => (
          <ProductCard item={productItem} />
        )):null}
      </div>
    </div>
  );
}

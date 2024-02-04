import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutCustomer_wishlist_productInput } from "../inputs/ProductCreateWithoutCustomer_wishlist_productInput";
import { ProductUpdateWithoutCustomer_wishlist_productInput } from "../inputs/ProductUpdateWithoutCustomer_wishlist_productInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutCustomer_wishlist_productInput", {})
export class ProductUpsertWithoutCustomer_wishlist_productInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutCustomer_wishlist_productInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutCustomer_wishlist_productInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutCustomer_wishlist_productInput, {
    nullable: false
  })
  create!: ProductCreateWithoutCustomer_wishlist_productInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}

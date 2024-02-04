import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutCustomer_wishlist_productInput } from "../inputs/ProductUpdateWithoutCustomer_wishlist_productInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutCustomer_wishlist_productInput", {})
export class ProductUpdateToOneWithWhereWithoutCustomer_wishlist_productInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCustomer_wishlist_productInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutCustomer_wishlist_productInput;
}

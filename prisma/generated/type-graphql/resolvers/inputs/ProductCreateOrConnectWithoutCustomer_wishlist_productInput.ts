import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutCustomer_wishlist_productInput } from "../inputs/ProductCreateWithoutCustomer_wishlist_productInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutCustomer_wishlist_productInput", {})
export class ProductCreateOrConnectWithoutCustomer_wishlist_productInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutCustomer_wishlist_productInput, {
    nullable: false
  })
  create!: ProductCreateWithoutCustomer_wishlist_productInput;
}

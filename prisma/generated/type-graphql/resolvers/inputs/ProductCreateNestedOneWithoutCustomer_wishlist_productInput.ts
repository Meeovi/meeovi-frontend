import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutCustomer_wishlist_productInput } from "../inputs/ProductCreateOrConnectWithoutCustomer_wishlist_productInput";
import { ProductCreateWithoutCustomer_wishlist_productInput } from "../inputs/ProductCreateWithoutCustomer_wishlist_productInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutCustomer_wishlist_productInput", {})
export class ProductCreateNestedOneWithoutCustomer_wishlist_productInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutCustomer_wishlist_productInput, {
    nullable: true
  })
  create?: ProductCreateWithoutCustomer_wishlist_productInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutCustomer_wishlist_productInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutCustomer_wishlist_productInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}

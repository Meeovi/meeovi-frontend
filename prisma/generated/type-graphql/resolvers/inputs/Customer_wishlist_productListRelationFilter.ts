import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlist_productWhereInput } from "../inputs/Customer_wishlist_productWhereInput";

@TypeGraphQL.InputType("Customer_wishlist_productListRelationFilter", {})
export class Customer_wishlist_productListRelationFilter {
  @TypeGraphQL.Field(_type => Customer_wishlist_productWhereInput, {
    nullable: true
  })
  every?: Customer_wishlist_productWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productWhereInput, {
    nullable: true
  })
  some?: Customer_wishlist_productWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productWhereInput, {
    nullable: true
  })
  none?: Customer_wishlist_productWhereInput | undefined;
}

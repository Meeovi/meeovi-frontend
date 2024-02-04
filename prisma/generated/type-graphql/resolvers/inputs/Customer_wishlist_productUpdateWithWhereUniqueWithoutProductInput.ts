import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlist_productUpdateWithoutProductInput } from "../inputs/Customer_wishlist_productUpdateWithoutProductInput";
import { Customer_wishlist_productWhereUniqueInput } from "../inputs/Customer_wishlist_productWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlist_productUpdateWithWhereUniqueWithoutProductInput", {})
export class Customer_wishlist_productUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Customer_wishlist_productWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_wishlist_productWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_wishlist_productUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Customer_wishlist_productUpdateWithoutProductInput;
}

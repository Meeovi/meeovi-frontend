import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistWhereInput } from "../inputs/Customer_wishlistWhereInput";

@TypeGraphQL.InputType("Customer_wishlistListRelationFilter", {})
export class Customer_wishlistListRelationFilter {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereInput, {
    nullable: true
  })
  every?: Customer_wishlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistWhereInput, {
    nullable: true
  })
  some?: Customer_wishlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistWhereInput, {
    nullable: true
  })
  none?: Customer_wishlistWhereInput | undefined;
}

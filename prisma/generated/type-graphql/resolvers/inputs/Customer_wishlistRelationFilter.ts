import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistWhereInput } from "../inputs/Customer_wishlistWhereInput";

@TypeGraphQL.InputType("Customer_wishlistRelationFilter", {})
export class Customer_wishlistRelationFilter {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereInput, {
    nullable: true
  })
  is?: Customer_wishlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistWhereInput, {
    nullable: true
  })
  isNot?: Customer_wishlistWhereInput | undefined;
}

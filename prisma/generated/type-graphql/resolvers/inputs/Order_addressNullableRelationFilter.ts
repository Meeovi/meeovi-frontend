import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressWhereInput } from "../inputs/Order_addressWhereInput";

@TypeGraphQL.InputType("Order_addressNullableRelationFilter", {})
export class Order_addressNullableRelationFilter {
  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  is?: Order_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  isNot?: Order_addressWhereInput | undefined;
}

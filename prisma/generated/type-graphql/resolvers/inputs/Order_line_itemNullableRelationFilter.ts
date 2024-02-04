import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemWhereInput } from "../inputs/Order_line_itemWhereInput";

@TypeGraphQL.InputType("Order_line_itemNullableRelationFilter", {})
export class Order_line_itemNullableRelationFilter {
  @TypeGraphQL.Field(_type => Order_line_itemWhereInput, {
    nullable: true
  })
  is?: Order_line_itemWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemWhereInput, {
    nullable: true
  })
  isNot?: Order_line_itemWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemWhereInput } from "../inputs/Order_line_itemWhereInput";

@TypeGraphQL.InputType("Order_line_itemListRelationFilter", {})
export class Order_line_itemListRelationFilter {
  @TypeGraphQL.Field(_type => Order_line_itemWhereInput, {
    nullable: true
  })
  every?: Order_line_itemWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemWhereInput, {
    nullable: true
  })
  some?: Order_line_itemWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemWhereInput, {
    nullable: true
  })
  none?: Order_line_itemWhereInput | undefined;
}

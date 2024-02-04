import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_item_downloadWhereInput } from "../inputs/Order_line_item_downloadWhereInput";

@TypeGraphQL.InputType("Order_line_item_downloadListRelationFilter", {})
export class Order_line_item_downloadListRelationFilter {
  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereInput, {
    nullable: true
  })
  every?: Order_line_item_downloadWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereInput, {
    nullable: true
  })
  some?: Order_line_item_downloadWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereInput, {
    nullable: true
  })
  none?: Order_line_item_downloadWhereInput | undefined;
}

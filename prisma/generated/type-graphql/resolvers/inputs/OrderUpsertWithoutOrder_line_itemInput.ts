import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrder_line_itemInput } from "../inputs/OrderCreateWithoutOrder_line_itemInput";
import { OrderUpdateWithoutOrder_line_itemInput } from "../inputs/OrderUpdateWithoutOrder_line_itemInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpsertWithoutOrder_line_itemInput", {})
export class OrderUpsertWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrder_line_itemInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutOrder_line_itemInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_line_itemInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrder_line_itemInput;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;
}

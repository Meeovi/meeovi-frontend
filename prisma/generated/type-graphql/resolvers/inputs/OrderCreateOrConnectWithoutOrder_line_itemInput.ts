import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrder_line_itemInput } from "../inputs/OrderCreateWithoutOrder_line_itemInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutOrder_line_itemInput", {})
export class OrderCreateOrConnectWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_line_itemInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrder_line_itemInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrder_transactionInput } from "../inputs/OrderCreateWithoutOrder_transactionInput";
import { OrderUpdateWithoutOrder_transactionInput } from "../inputs/OrderUpdateWithoutOrder_transactionInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpsertWithoutOrder_transactionInput", {})
export class OrderUpsertWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrder_transactionInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutOrder_transactionInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_transactionInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrder_transactionInput;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;
}

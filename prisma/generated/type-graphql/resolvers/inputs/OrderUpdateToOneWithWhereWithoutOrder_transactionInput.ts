import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutOrder_transactionInput } from "../inputs/OrderUpdateWithoutOrder_transactionInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpdateToOneWithWhereWithoutOrder_transactionInput", {})
export class OrderUpdateToOneWithWhereWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrder_transactionInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutOrder_transactionInput;
}

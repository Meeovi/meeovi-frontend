import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionUpdateWithoutOrder_transaction_captureInput } from "../inputs/Order_transactionUpdateWithoutOrder_transaction_captureInput";
import { Order_transactionWhereInput } from "../inputs/Order_transactionWhereInput";

@TypeGraphQL.InputType("Order_transactionUpdateToOneWithWhereWithoutOrder_transaction_captureInput", {})
export class Order_transactionUpdateToOneWithWhereWithoutOrder_transaction_captureInput {
  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  where?: Order_transactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionUpdateWithoutOrder_transaction_captureInput, {
    nullable: false
  })
  data!: Order_transactionUpdateWithoutOrder_transaction_captureInput;
}

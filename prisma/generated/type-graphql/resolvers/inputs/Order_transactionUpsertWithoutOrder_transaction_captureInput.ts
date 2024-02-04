import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateWithoutOrder_transaction_captureInput } from "../inputs/Order_transactionCreateWithoutOrder_transaction_captureInput";
import { Order_transactionUpdateWithoutOrder_transaction_captureInput } from "../inputs/Order_transactionUpdateWithoutOrder_transaction_captureInput";
import { Order_transactionWhereInput } from "../inputs/Order_transactionWhereInput";

@TypeGraphQL.InputType("Order_transactionUpsertWithoutOrder_transaction_captureInput", {})
export class Order_transactionUpsertWithoutOrder_transaction_captureInput {
  @TypeGraphQL.Field(_type => Order_transactionUpdateWithoutOrder_transaction_captureInput, {
    nullable: false
  })
  update!: Order_transactionUpdateWithoutOrder_transaction_captureInput;

  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutOrder_transaction_captureInput, {
    nullable: false
  })
  create!: Order_transactionCreateWithoutOrder_transaction_captureInput;

  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  where?: Order_transactionWhereInput | undefined;
}

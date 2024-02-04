import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateWithoutAdyen_payment_captureInput } from "../inputs/Order_transactionCreateWithoutAdyen_payment_captureInput";
import { Order_transactionUpdateWithoutAdyen_payment_captureInput } from "../inputs/Order_transactionUpdateWithoutAdyen_payment_captureInput";
import { Order_transactionWhereInput } from "../inputs/Order_transactionWhereInput";

@TypeGraphQL.InputType("Order_transactionUpsertWithoutAdyen_payment_captureInput", {})
export class Order_transactionUpsertWithoutAdyen_payment_captureInput {
  @TypeGraphQL.Field(_type => Order_transactionUpdateWithoutAdyen_payment_captureInput, {
    nullable: false
  })
  update!: Order_transactionUpdateWithoutAdyen_payment_captureInput;

  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutAdyen_payment_captureInput, {
    nullable: false
  })
  create!: Order_transactionCreateWithoutAdyen_payment_captureInput;

  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  where?: Order_transactionWhereInput | undefined;
}

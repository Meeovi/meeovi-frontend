import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateWithoutAdyen_paymentInput } from "../inputs/Order_transactionCreateWithoutAdyen_paymentInput";
import { Order_transactionUpdateWithoutAdyen_paymentInput } from "../inputs/Order_transactionUpdateWithoutAdyen_paymentInput";
import { Order_transactionWhereInput } from "../inputs/Order_transactionWhereInput";

@TypeGraphQL.InputType("Order_transactionUpsertWithoutAdyen_paymentInput", {})
export class Order_transactionUpsertWithoutAdyen_paymentInput {
  @TypeGraphQL.Field(_type => Order_transactionUpdateWithoutAdyen_paymentInput, {
    nullable: false
  })
  update!: Order_transactionUpdateWithoutAdyen_paymentInput;

  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutAdyen_paymentInput, {
    nullable: false
  })
  create!: Order_transactionCreateWithoutAdyen_paymentInput;

  @TypeGraphQL.Field(_type => Order_transactionWhereInput, {
    nullable: true
  })
  where?: Order_transactionWhereInput | undefined;
}

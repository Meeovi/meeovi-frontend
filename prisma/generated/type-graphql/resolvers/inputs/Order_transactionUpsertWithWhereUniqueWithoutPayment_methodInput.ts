import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateWithoutPayment_methodInput } from "../inputs/Order_transactionCreateWithoutPayment_methodInput";
import { Order_transactionUpdateWithoutPayment_methodInput } from "../inputs/Order_transactionUpdateWithoutPayment_methodInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionUpsertWithWhereUniqueWithoutPayment_methodInput", {})
export class Order_transactionUpsertWithWhereUniqueWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transactionUpdateWithoutPayment_methodInput, {
    nullable: false
  })
  update!: Order_transactionUpdateWithoutPayment_methodInput;

  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutPayment_methodInput, {
    nullable: false
  })
  create!: Order_transactionCreateWithoutPayment_methodInput;
}

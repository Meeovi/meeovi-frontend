import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutOrder_transactionInput } from "../inputs/Payment_methodCreateWithoutOrder_transactionInput";
import { Payment_methodUpdateWithoutOrder_transactionInput } from "../inputs/Payment_methodUpdateWithoutOrder_transactionInput";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";

@TypeGraphQL.InputType("Payment_methodUpsertWithoutOrder_transactionInput", {})
export class Payment_methodUpsertWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutOrder_transactionInput, {
    nullable: false
  })
  update!: Payment_methodUpdateWithoutOrder_transactionInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutOrder_transactionInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutOrder_transactionInput;

  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;
}

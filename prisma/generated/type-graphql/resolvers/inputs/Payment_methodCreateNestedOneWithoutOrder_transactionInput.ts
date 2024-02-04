import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateOrConnectWithoutOrder_transactionInput } from "../inputs/Payment_methodCreateOrConnectWithoutOrder_transactionInput";
import { Payment_methodCreateWithoutOrder_transactionInput } from "../inputs/Payment_methodCreateWithoutOrder_transactionInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateNestedOneWithoutOrder_transactionInput", {})
export class Payment_methodCreateNestedOneWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutOrder_transactionInput, {
    nullable: true
  })
  create?: Payment_methodCreateWithoutOrder_transactionInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateOrConnectWithoutOrder_transactionInput, {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutOrder_transactionInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput | undefined;
}

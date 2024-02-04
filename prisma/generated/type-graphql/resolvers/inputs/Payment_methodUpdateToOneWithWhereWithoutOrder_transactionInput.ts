import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodUpdateWithoutOrder_transactionInput } from "../inputs/Payment_methodUpdateWithoutOrder_transactionInput";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";

@TypeGraphQL.InputType("Payment_methodUpdateToOneWithWhereWithoutOrder_transactionInput", {})
export class Payment_methodUpdateToOneWithWhereWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutOrder_transactionInput, {
    nullable: false
  })
  data!: Payment_methodUpdateWithoutOrder_transactionInput;
}

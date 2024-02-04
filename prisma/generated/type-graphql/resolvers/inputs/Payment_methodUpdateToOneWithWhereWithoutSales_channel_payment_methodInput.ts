import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodUpdateWithoutSales_channel_payment_methodInput } from "../inputs/Payment_methodUpdateWithoutSales_channel_payment_methodInput";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";

@TypeGraphQL.InputType("Payment_methodUpdateToOneWithWhereWithoutSales_channel_payment_methodInput", {})
export class Payment_methodUpdateToOneWithWhereWithoutSales_channel_payment_methodInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutSales_channel_payment_methodInput, {
    nullable: false
  })
  data!: Payment_methodUpdateWithoutSales_channel_payment_methodInput;
}

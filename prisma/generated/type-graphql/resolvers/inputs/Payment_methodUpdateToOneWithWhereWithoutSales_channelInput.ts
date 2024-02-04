import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodUpdateWithoutSales_channelInput } from "../inputs/Payment_methodUpdateWithoutSales_channelInput";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";

@TypeGraphQL.InputType("Payment_methodUpdateToOneWithWhereWithoutSales_channelInput", {})
export class Payment_methodUpdateToOneWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Payment_methodUpdateWithoutSales_channelInput;
}

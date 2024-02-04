import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutSales_channelInput } from "../inputs/Payment_methodCreateWithoutSales_channelInput";
import { Payment_methodUpdateWithoutSales_channelInput } from "../inputs/Payment_methodUpdateWithoutSales_channelInput";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";

@TypeGraphQL.InputType("Payment_methodUpsertWithoutSales_channelInput", {})
export class Payment_methodUpsertWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: Payment_methodUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateOrConnectWithoutSales_channelInput } from "../inputs/Payment_methodCreateOrConnectWithoutSales_channelInput";
import { Payment_methodCreateWithoutSales_channelInput } from "../inputs/Payment_methodCreateWithoutSales_channelInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateNestedOneWithoutSales_channelInput", {})
export class Payment_methodCreateNestedOneWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutSales_channelInput, {
    nullable: true
  })
  create?: Payment_methodCreateWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateOrConnectWithoutSales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput | undefined;
}

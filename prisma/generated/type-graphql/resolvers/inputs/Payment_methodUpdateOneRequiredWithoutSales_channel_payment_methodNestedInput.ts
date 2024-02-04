import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateOrConnectWithoutSales_channel_payment_methodInput } from "../inputs/Payment_methodCreateOrConnectWithoutSales_channel_payment_methodInput";
import { Payment_methodCreateWithoutSales_channel_payment_methodInput } from "../inputs/Payment_methodCreateWithoutSales_channel_payment_methodInput";
import { Payment_methodUpdateToOneWithWhereWithoutSales_channel_payment_methodInput } from "../inputs/Payment_methodUpdateToOneWithWhereWithoutSales_channel_payment_methodInput";
import { Payment_methodUpsertWithoutSales_channel_payment_methodInput } from "../inputs/Payment_methodUpsertWithoutSales_channel_payment_methodInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodUpdateOneRequiredWithoutSales_channel_payment_methodNestedInput", {})
export class Payment_methodUpdateOneRequiredWithoutSales_channel_payment_methodNestedInput {
  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutSales_channel_payment_methodInput, {
    nullable: true
  })
  create?: Payment_methodCreateWithoutSales_channel_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateOrConnectWithoutSales_channel_payment_methodInput, {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutSales_channel_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpsertWithoutSales_channel_payment_methodInput, {
    nullable: true
  })
  upsert?: Payment_methodUpsertWithoutSales_channel_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateToOneWithWhereWithoutSales_channel_payment_methodInput, {
    nullable: true
  })
  update?: Payment_methodUpdateToOneWithWhereWithoutSales_channel_payment_methodInput | undefined;
}

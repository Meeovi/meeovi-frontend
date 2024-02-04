import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateOrConnectWithoutApp_payment_methodInput } from "../inputs/Payment_methodCreateOrConnectWithoutApp_payment_methodInput";
import { Payment_methodCreateWithoutApp_payment_methodInput } from "../inputs/Payment_methodCreateWithoutApp_payment_methodInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateNestedOneWithoutApp_payment_methodInput", {})
export class Payment_methodCreateNestedOneWithoutApp_payment_methodInput {
  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutApp_payment_methodInput, {
    nullable: true
  })
  create?: Payment_methodCreateWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateOrConnectWithoutApp_payment_methodInput, {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutApp_payment_methodInput } from "../inputs/Payment_methodCreateWithoutApp_payment_methodInput";
import { Payment_methodUpdateWithoutApp_payment_methodInput } from "../inputs/Payment_methodUpdateWithoutApp_payment_methodInput";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";

@TypeGraphQL.InputType("Payment_methodUpsertWithoutApp_payment_methodInput", {})
export class Payment_methodUpsertWithoutApp_payment_methodInput {
  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutApp_payment_methodInput, {
    nullable: false
  })
  update!: Payment_methodUpdateWithoutApp_payment_methodInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutApp_payment_methodInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutApp_payment_methodInput;

  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateOrConnectWithoutPayment_method_translationInput } from "../inputs/Payment_methodCreateOrConnectWithoutPayment_method_translationInput";
import { Payment_methodCreateWithoutPayment_method_translationInput } from "../inputs/Payment_methodCreateWithoutPayment_method_translationInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateNestedOneWithoutPayment_method_translationInput", {})
export class Payment_methodCreateNestedOneWithoutPayment_method_translationInput {
  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutPayment_method_translationInput, {
    nullable: true
  })
  create?: Payment_methodCreateWithoutPayment_method_translationInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateOrConnectWithoutPayment_method_translationInput, {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutPayment_method_translationInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput | undefined;
}

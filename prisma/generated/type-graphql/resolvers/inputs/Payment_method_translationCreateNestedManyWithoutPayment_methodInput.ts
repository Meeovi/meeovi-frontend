import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_method_translationCreateManyPayment_methodInputEnvelope } from "../inputs/Payment_method_translationCreateManyPayment_methodInputEnvelope";
import { Payment_method_translationCreateOrConnectWithoutPayment_methodInput } from "../inputs/Payment_method_translationCreateOrConnectWithoutPayment_methodInput";
import { Payment_method_translationCreateWithoutPayment_methodInput } from "../inputs/Payment_method_translationCreateWithoutPayment_methodInput";
import { Payment_method_translationWhereUniqueInput } from "../inputs/Payment_method_translationWhereUniqueInput";

@TypeGraphQL.InputType("Payment_method_translationCreateNestedManyWithoutPayment_methodInput", {})
export class Payment_method_translationCreateNestedManyWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => [Payment_method_translationCreateWithoutPayment_methodInput], {
    nullable: true
  })
  create?: Payment_method_translationCreateWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationCreateOrConnectWithoutPayment_methodInput], {
    nullable: true
  })
  connectOrCreate?: Payment_method_translationCreateOrConnectWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationCreateManyPayment_methodInputEnvelope, {
    nullable: true
  })
  createMany?: Payment_method_translationCreateManyPayment_methodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Payment_method_translationWhereUniqueInput[] | undefined;
}

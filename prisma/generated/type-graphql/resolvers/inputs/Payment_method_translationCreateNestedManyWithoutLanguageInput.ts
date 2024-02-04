import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_method_translationCreateManyLanguageInputEnvelope } from "../inputs/Payment_method_translationCreateManyLanguageInputEnvelope";
import { Payment_method_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Payment_method_translationCreateOrConnectWithoutLanguageInput";
import { Payment_method_translationCreateWithoutLanguageInput } from "../inputs/Payment_method_translationCreateWithoutLanguageInput";
import { Payment_method_translationWhereUniqueInput } from "../inputs/Payment_method_translationWhereUniqueInput";

@TypeGraphQL.InputType("Payment_method_translationCreateNestedManyWithoutLanguageInput", {})
export class Payment_method_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Payment_method_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Payment_method_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Payment_method_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Payment_method_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Payment_method_translationWhereUniqueInput[] | undefined;
}

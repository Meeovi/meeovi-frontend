import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_method_translationCreateManyLanguageInputEnvelope } from "../inputs/Payment_method_translationCreateManyLanguageInputEnvelope";
import { Payment_method_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Payment_method_translationCreateOrConnectWithoutLanguageInput";
import { Payment_method_translationCreateWithoutLanguageInput } from "../inputs/Payment_method_translationCreateWithoutLanguageInput";
import { Payment_method_translationScalarWhereInput } from "../inputs/Payment_method_translationScalarWhereInput";
import { Payment_method_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Payment_method_translationUpdateManyWithWhereWithoutLanguageInput";
import { Payment_method_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Payment_method_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Payment_method_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Payment_method_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Payment_method_translationWhereUniqueInput } from "../inputs/Payment_method_translationWhereUniqueInput";

@TypeGraphQL.InputType("Payment_method_translationUpdateManyWithoutLanguageNestedInput", {})
export class Payment_method_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Payment_method_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Payment_method_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Payment_method_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Payment_method_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Payment_method_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Payment_method_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Payment_method_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Payment_method_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Payment_method_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Payment_method_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Payment_method_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Payment_method_translationScalarWhereInput[] | undefined;
}

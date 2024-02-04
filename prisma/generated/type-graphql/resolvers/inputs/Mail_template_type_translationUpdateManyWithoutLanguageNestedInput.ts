import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_type_translationCreateManyLanguageInputEnvelope } from "../inputs/Mail_template_type_translationCreateManyLanguageInputEnvelope";
import { Mail_template_type_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Mail_template_type_translationCreateOrConnectWithoutLanguageInput";
import { Mail_template_type_translationCreateWithoutLanguageInput } from "../inputs/Mail_template_type_translationCreateWithoutLanguageInput";
import { Mail_template_type_translationScalarWhereInput } from "../inputs/Mail_template_type_translationScalarWhereInput";
import { Mail_template_type_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Mail_template_type_translationUpdateManyWithWhereWithoutLanguageInput";
import { Mail_template_type_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Mail_template_type_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Mail_template_type_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Mail_template_type_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Mail_template_type_translationWhereUniqueInput } from "../inputs/Mail_template_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_type_translationUpdateManyWithoutLanguageNestedInput", {})
export class Mail_template_type_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Mail_template_type_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Mail_template_type_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Mail_template_type_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Mail_template_type_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_template_type_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Mail_template_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Mail_template_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Mail_template_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_template_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Mail_template_type_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Mail_template_type_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Mail_template_type_translationScalarWhereInput[] | undefined;
}

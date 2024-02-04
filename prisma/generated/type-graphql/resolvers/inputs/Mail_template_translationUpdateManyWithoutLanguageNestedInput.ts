import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_translationCreateManyLanguageInputEnvelope } from "../inputs/Mail_template_translationCreateManyLanguageInputEnvelope";
import { Mail_template_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Mail_template_translationCreateOrConnectWithoutLanguageInput";
import { Mail_template_translationCreateWithoutLanguageInput } from "../inputs/Mail_template_translationCreateWithoutLanguageInput";
import { Mail_template_translationScalarWhereInput } from "../inputs/Mail_template_translationScalarWhereInput";
import { Mail_template_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Mail_template_translationUpdateManyWithWhereWithoutLanguageInput";
import { Mail_template_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Mail_template_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Mail_template_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Mail_template_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Mail_template_translationWhereUniqueInput } from "../inputs/Mail_template_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_translationUpdateManyWithoutLanguageNestedInput", {})
export class Mail_template_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Mail_template_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Mail_template_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Mail_template_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Mail_template_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_template_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Mail_template_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Mail_template_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Mail_template_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_template_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Mail_template_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Mail_template_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Mail_template_translationScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaCreateManyLanguageInputEnvelope } from "../inputs/Mail_template_mediaCreateManyLanguageInputEnvelope";
import { Mail_template_mediaCreateOrConnectWithoutLanguageInput } from "../inputs/Mail_template_mediaCreateOrConnectWithoutLanguageInput";
import { Mail_template_mediaCreateWithoutLanguageInput } from "../inputs/Mail_template_mediaCreateWithoutLanguageInput";
import { Mail_template_mediaScalarWhereInput } from "../inputs/Mail_template_mediaScalarWhereInput";
import { Mail_template_mediaUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Mail_template_mediaUpdateManyWithWhereWithoutLanguageInput";
import { Mail_template_mediaUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Mail_template_mediaUpdateWithWhereUniqueWithoutLanguageInput";
import { Mail_template_mediaUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Mail_template_mediaUpsertWithWhereUniqueWithoutLanguageInput";
import { Mail_template_mediaWhereUniqueInput } from "../inputs/Mail_template_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_mediaUpdateManyWithoutLanguageNestedInput", {})
export class Mail_template_mediaUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Mail_template_mediaCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Mail_template_mediaCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Mail_template_mediaUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_template_mediaCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereUniqueInput], {
    nullable: true
  })
  set?: Mail_template_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Mail_template_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereUniqueInput], {
    nullable: true
  })
  delete?: Mail_template_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_template_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Mail_template_mediaUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Mail_template_mediaUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Mail_template_mediaScalarWhereInput[] | undefined;
}

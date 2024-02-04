import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationCreateManyLanguageInputEnvelope } from "../inputs/Mail_header_footer_translationCreateManyLanguageInputEnvelope";
import { Mail_header_footer_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Mail_header_footer_translationCreateOrConnectWithoutLanguageInput";
import { Mail_header_footer_translationCreateWithoutLanguageInput } from "../inputs/Mail_header_footer_translationCreateWithoutLanguageInput";
import { Mail_header_footer_translationScalarWhereInput } from "../inputs/Mail_header_footer_translationScalarWhereInput";
import { Mail_header_footer_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Mail_header_footer_translationUpdateManyWithWhereWithoutLanguageInput";
import { Mail_header_footer_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Mail_header_footer_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Mail_header_footer_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Mail_header_footer_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Mail_header_footer_translationWhereUniqueInput } from "../inputs/Mail_header_footer_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_header_footer_translationUpdateManyWithoutLanguageNestedInput", {})
export class Mail_header_footer_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Mail_header_footer_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Mail_header_footer_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Mail_header_footer_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Mail_header_footer_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_header_footer_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Mail_header_footer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Mail_header_footer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Mail_header_footer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_header_footer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Mail_header_footer_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Mail_header_footer_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Mail_header_footer_translationScalarWhereInput[] | undefined;
}

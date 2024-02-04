import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_translationCreateManyLanguageInputEnvelope } from "../inputs/Mail_template_translationCreateManyLanguageInputEnvelope";
import { Mail_template_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Mail_template_translationCreateOrConnectWithoutLanguageInput";
import { Mail_template_translationCreateWithoutLanguageInput } from "../inputs/Mail_template_translationCreateWithoutLanguageInput";
import { Mail_template_translationWhereUniqueInput } from "../inputs/Mail_template_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_translationCreateNestedManyWithoutLanguageInput", {})
export class Mail_template_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Mail_template_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Mail_template_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Mail_template_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_template_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_template_translationWhereUniqueInput[] | undefined;
}

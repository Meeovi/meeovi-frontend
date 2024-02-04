import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_type_translationCreateManyLanguageInputEnvelope } from "../inputs/Mail_template_type_translationCreateManyLanguageInputEnvelope";
import { Mail_template_type_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Mail_template_type_translationCreateOrConnectWithoutLanguageInput";
import { Mail_template_type_translationCreateWithoutLanguageInput } from "../inputs/Mail_template_type_translationCreateWithoutLanguageInput";
import { Mail_template_type_translationWhereUniqueInput } from "../inputs/Mail_template_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_type_translationCreateNestedManyWithoutLanguageInput", {})
export class Mail_template_type_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Mail_template_type_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Mail_template_type_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Mail_template_type_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_template_type_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_template_type_translationWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaCreateManyLanguageInputEnvelope } from "../inputs/Mail_template_mediaCreateManyLanguageInputEnvelope";
import { Mail_template_mediaCreateOrConnectWithoutLanguageInput } from "../inputs/Mail_template_mediaCreateOrConnectWithoutLanguageInput";
import { Mail_template_mediaCreateWithoutLanguageInput } from "../inputs/Mail_template_mediaCreateWithoutLanguageInput";
import { Mail_template_mediaWhereUniqueInput } from "../inputs/Mail_template_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_mediaCreateNestedManyWithoutLanguageInput", {})
export class Mail_template_mediaCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Mail_template_mediaCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Mail_template_mediaCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_template_mediaCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_template_mediaWhereUniqueInput[] | undefined;
}

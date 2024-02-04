import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationCreateManyLanguageInputEnvelope } from "../inputs/Mail_header_footer_translationCreateManyLanguageInputEnvelope";
import { Mail_header_footer_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Mail_header_footer_translationCreateOrConnectWithoutLanguageInput";
import { Mail_header_footer_translationCreateWithoutLanguageInput } from "../inputs/Mail_header_footer_translationCreateWithoutLanguageInput";
import { Mail_header_footer_translationWhereUniqueInput } from "../inputs/Mail_header_footer_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_header_footer_translationCreateNestedManyWithoutLanguageInput", {})
export class Mail_header_footer_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Mail_header_footer_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Mail_header_footer_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Mail_header_footer_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_header_footer_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_header_footer_translationWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationCreateManyMail_header_footerInputEnvelope } from "../inputs/Mail_header_footer_translationCreateManyMail_header_footerInputEnvelope";
import { Mail_header_footer_translationCreateOrConnectWithoutMail_header_footerInput } from "../inputs/Mail_header_footer_translationCreateOrConnectWithoutMail_header_footerInput";
import { Mail_header_footer_translationCreateWithoutMail_header_footerInput } from "../inputs/Mail_header_footer_translationCreateWithoutMail_header_footerInput";
import { Mail_header_footer_translationWhereUniqueInput } from "../inputs/Mail_header_footer_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_header_footer_translationCreateNestedManyWithoutMail_header_footerInput", {})
export class Mail_header_footer_translationCreateNestedManyWithoutMail_header_footerInput {
  @TypeGraphQL.Field(_type => [Mail_header_footer_translationCreateWithoutMail_header_footerInput], {
    nullable: true
  })
  create?: Mail_header_footer_translationCreateWithoutMail_header_footerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationCreateOrConnectWithoutMail_header_footerInput], {
    nullable: true
  })
  connectOrCreate?: Mail_header_footer_translationCreateOrConnectWithoutMail_header_footerInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationCreateManyMail_header_footerInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_header_footer_translationCreateManyMail_header_footerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_header_footer_translationWhereUniqueInput[] | undefined;
}

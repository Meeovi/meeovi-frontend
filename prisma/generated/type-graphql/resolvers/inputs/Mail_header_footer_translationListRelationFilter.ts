import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationWhereInput } from "../inputs/Mail_header_footer_translationWhereInput";

@TypeGraphQL.InputType("Mail_header_footer_translationListRelationFilter", {})
export class Mail_header_footer_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Mail_header_footer_translationWhereInput, {
    nullable: true
  })
  every?: Mail_header_footer_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationWhereInput, {
    nullable: true
  })
  some?: Mail_header_footer_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationWhereInput, {
    nullable: true
  })
  none?: Mail_header_footer_translationWhereInput | undefined;
}

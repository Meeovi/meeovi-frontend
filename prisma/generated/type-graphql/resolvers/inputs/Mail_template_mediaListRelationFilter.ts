import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaWhereInput } from "../inputs/Mail_template_mediaWhereInput";

@TypeGraphQL.InputType("Mail_template_mediaListRelationFilter", {})
export class Mail_template_mediaListRelationFilter {
  @TypeGraphQL.Field(_type => Mail_template_mediaWhereInput, {
    nullable: true
  })
  every?: Mail_template_mediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaWhereInput, {
    nullable: true
  })
  some?: Mail_template_mediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaWhereInput, {
    nullable: true
  })
  none?: Mail_template_mediaWhereInput | undefined;
}

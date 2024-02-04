import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_translationWhereInput } from "../inputs/Mail_template_translationWhereInput";

@TypeGraphQL.InputType("Mail_template_translationListRelationFilter", {})
export class Mail_template_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Mail_template_translationWhereInput, {
    nullable: true
  })
  every?: Mail_template_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationWhereInput, {
    nullable: true
  })
  some?: Mail_template_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationWhereInput, {
    nullable: true
  })
  none?: Mail_template_translationWhereInput | undefined;
}

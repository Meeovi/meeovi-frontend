import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_typeWhereInput } from "../inputs/Mail_template_typeWhereInput";

@TypeGraphQL.InputType("Mail_template_typeRelationFilter", {})
export class Mail_template_typeRelationFilter {
  @TypeGraphQL.Field(_type => Mail_template_typeWhereInput, {
    nullable: true
  })
  is?: Mail_template_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeWhereInput, {
    nullable: true
  })
  isNot?: Mail_template_typeWhereInput | undefined;
}

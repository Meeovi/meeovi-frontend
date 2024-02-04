import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateWhereInput } from "../inputs/Mail_templateWhereInput";

@TypeGraphQL.InputType("Mail_templateRelationFilter", {})
export class Mail_templateRelationFilter {
  @TypeGraphQL.Field(_type => Mail_templateWhereInput, {
    nullable: true
  })
  is?: Mail_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateWhereInput, {
    nullable: true
  })
  isNot?: Mail_templateWhereInput | undefined;
}

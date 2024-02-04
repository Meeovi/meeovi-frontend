import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateWhereInput } from "../inputs/Mail_templateWhereInput";

@TypeGraphQL.InputType("Mail_templateListRelationFilter", {})
export class Mail_templateListRelationFilter {
  @TypeGraphQL.Field(_type => Mail_templateWhereInput, {
    nullable: true
  })
  every?: Mail_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateWhereInput, {
    nullable: true
  })
  some?: Mail_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateWhereInput, {
    nullable: true
  })
  none?: Mail_templateWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footerWhereInput } from "../inputs/Mail_header_footerWhereInput";

@TypeGraphQL.InputType("Mail_header_footerNullableRelationFilter", {})
export class Mail_header_footerNullableRelationFilter {
  @TypeGraphQL.Field(_type => Mail_header_footerWhereInput, {
    nullable: true
  })
  is?: Mail_header_footerWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footerWhereInput, {
    nullable: true
  })
  isNot?: Mail_header_footerWhereInput | undefined;
}

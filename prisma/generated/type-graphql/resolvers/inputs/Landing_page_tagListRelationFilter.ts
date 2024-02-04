import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_tagWhereInput } from "../inputs/Landing_page_tagWhereInput";

@TypeGraphQL.InputType("Landing_page_tagListRelationFilter", {})
export class Landing_page_tagListRelationFilter {
  @TypeGraphQL.Field(_type => Landing_page_tagWhereInput, {
    nullable: true
  })
  every?: Landing_page_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagWhereInput, {
    nullable: true
  })
  some?: Landing_page_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagWhereInput, {
    nullable: true
  })
  none?: Landing_page_tagWhereInput | undefined;
}

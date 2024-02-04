import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_translationWhereInput } from "../inputs/Landing_page_translationWhereInput";

@TypeGraphQL.InputType("Landing_page_translationListRelationFilter", {})
export class Landing_page_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Landing_page_translationWhereInput, {
    nullable: true
  })
  every?: Landing_page_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationWhereInput, {
    nullable: true
  })
  some?: Landing_page_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationWhereInput, {
    nullable: true
  })
  none?: Landing_page_translationWhereInput | undefined;
}

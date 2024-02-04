import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationWhereInput } from "../inputs/Plugin_translationWhereInput";

@TypeGraphQL.InputType("Plugin_translationListRelationFilter", {})
export class Plugin_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Plugin_translationWhereInput, {
    nullable: true
  })
  every?: Plugin_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationWhereInput, {
    nullable: true
  })
  some?: Plugin_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationWhereInput, {
    nullable: true
  })
  none?: Plugin_translationWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationWhereInput } from "../inputs/App_translationWhereInput";

@TypeGraphQL.InputType("App_translationListRelationFilter", {})
export class App_translationListRelationFilter {
  @TypeGraphQL.Field(_type => App_translationWhereInput, {
    nullable: true
  })
  every?: App_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_translationWhereInput, {
    nullable: true
  })
  some?: App_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_translationWhereInput, {
    nullable: true
  })
  none?: App_translationWhereInput | undefined;
}

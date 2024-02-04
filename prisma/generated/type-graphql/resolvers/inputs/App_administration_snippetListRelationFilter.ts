import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetWhereInput } from "../inputs/App_administration_snippetWhereInput";

@TypeGraphQL.InputType("App_administration_snippetListRelationFilter", {})
export class App_administration_snippetListRelationFilter {
  @TypeGraphQL.Field(_type => App_administration_snippetWhereInput, {
    nullable: true
  })
  every?: App_administration_snippetWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetWhereInput, {
    nullable: true
  })
  some?: App_administration_snippetWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetWhereInput, {
    nullable: true
  })
  none?: App_administration_snippetWhereInput | undefined;
}

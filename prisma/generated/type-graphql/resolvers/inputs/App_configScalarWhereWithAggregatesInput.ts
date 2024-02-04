import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("App_configScalarWhereWithAggregatesInput", {})
export class App_configScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [App_configScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: App_configScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_configScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: App_configScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_configScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: App_configScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  key?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  value?: StringWithAggregatesFilter | undefined;
}

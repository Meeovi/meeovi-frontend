import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_templateWhereInput } from "../inputs/App_templateWhereInput";

@TypeGraphQL.InputType("App_templateListRelationFilter", {})
export class App_templateListRelationFilter {
  @TypeGraphQL.Field(_type => App_templateWhereInput, {
    nullable: true
  })
  every?: App_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_templateWhereInput, {
    nullable: true
  })
  some?: App_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_templateWhereInput, {
    nullable: true
  })
  none?: App_templateWhereInput | undefined;
}

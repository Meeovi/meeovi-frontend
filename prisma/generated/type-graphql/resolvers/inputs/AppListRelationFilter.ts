import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppListRelationFilter", {})
export class AppListRelationFilter {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  every?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  some?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  none?: AppWhereInput | undefined;
}

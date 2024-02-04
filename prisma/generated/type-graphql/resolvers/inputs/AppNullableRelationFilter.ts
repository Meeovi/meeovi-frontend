import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppNullableRelationFilter", {})
export class AppNullableRelationFilter {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  is?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  isNot?: AppWhereInput | undefined;
}

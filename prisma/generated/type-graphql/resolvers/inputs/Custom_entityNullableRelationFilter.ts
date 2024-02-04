import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityWhereInput } from "../inputs/Custom_entityWhereInput";

@TypeGraphQL.InputType("Custom_entityNullableRelationFilter", {})
export class Custom_entityNullableRelationFilter {
  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  is?: Custom_entityWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  isNot?: Custom_entityWhereInput | undefined;
}

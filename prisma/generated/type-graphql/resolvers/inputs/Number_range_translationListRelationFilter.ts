import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_translationWhereInput } from "../inputs/Number_range_translationWhereInput";

@TypeGraphQL.InputType("Number_range_translationListRelationFilter", {})
export class Number_range_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Number_range_translationWhereInput, {
    nullable: true
  })
  every?: Number_range_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationWhereInput, {
    nullable: true
  })
  some?: Number_range_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationWhereInput, {
    nullable: true
  })
  none?: Number_range_translationWhereInput | undefined;
}

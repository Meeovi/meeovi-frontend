import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_typeWhereInput } from "../inputs/Number_range_typeWhereInput";

@TypeGraphQL.InputType("Number_range_typeRelationFilter", {})
export class Number_range_typeRelationFilter {
  @TypeGraphQL.Field(_type => Number_range_typeWhereInput, {
    nullable: true
  })
  is?: Number_range_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeWhereInput, {
    nullable: true
  })
  isNot?: Number_range_typeWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_rangeWhereInput } from "../inputs/Number_rangeWhereInput";

@TypeGraphQL.InputType("Number_rangeRelationFilter", {})
export class Number_rangeRelationFilter {
  @TypeGraphQL.Field(_type => Number_rangeWhereInput, {
    nullable: true
  })
  is?: Number_rangeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeWhereInput, {
    nullable: true
  })
  isNot?: Number_rangeWhereInput | undefined;
}

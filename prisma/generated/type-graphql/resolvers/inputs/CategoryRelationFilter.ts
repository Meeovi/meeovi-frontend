import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryRelationFilter", {})
export class CategoryRelationFilter {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  is?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  isNot?: CategoryWhereInput | undefined;
}

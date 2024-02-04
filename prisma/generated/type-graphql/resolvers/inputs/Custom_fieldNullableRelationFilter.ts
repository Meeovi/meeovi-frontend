import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldWhereInput } from "../inputs/Custom_fieldWhereInput";

@TypeGraphQL.InputType("Custom_fieldNullableRelationFilter", {})
export class Custom_fieldNullableRelationFilter {
  @TypeGraphQL.Field(_type => Custom_fieldWhereInput, {
    nullable: true
  })
  is?: Custom_fieldWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldWhereInput, {
    nullable: true
  })
  isNot?: Custom_fieldWhereInput | undefined;
}

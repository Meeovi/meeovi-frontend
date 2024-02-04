import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceWhereInput } from "../inputs/Flow_sequenceWhereInput";

@TypeGraphQL.InputType("Flow_sequenceNullableRelationFilter", {})
export class Flow_sequenceNullableRelationFilter {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  is?: Flow_sequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  isNot?: Flow_sequenceWhereInput | undefined;
}

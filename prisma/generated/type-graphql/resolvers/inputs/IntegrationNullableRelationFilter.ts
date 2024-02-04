import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationWhereInput } from "../inputs/IntegrationWhereInput";

@TypeGraphQL.InputType("IntegrationNullableRelationFilter", {})
export class IntegrationNullableRelationFilter {
  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  is?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  isNot?: IntegrationWhereInput | undefined;
}

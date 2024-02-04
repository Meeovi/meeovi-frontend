import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateWhereInput } from "../inputs/Country_stateWhereInput";

@TypeGraphQL.InputType("Country_stateNullableRelationFilter", {})
export class Country_stateNullableRelationFilter {
  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  is?: Country_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  isNot?: Country_stateWhereInput | undefined;
}

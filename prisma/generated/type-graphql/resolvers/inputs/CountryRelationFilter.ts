import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryRelationFilter", {})
export class CountryRelationFilter {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  is?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  isNot?: CountryWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateWhereInput } from "../inputs/Country_stateWhereInput";

@TypeGraphQL.InputType("Country_stateListRelationFilter", {})
export class Country_stateListRelationFilter {
  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  every?: Country_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  some?: Country_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  none?: Country_stateWhereInput | undefined;
}

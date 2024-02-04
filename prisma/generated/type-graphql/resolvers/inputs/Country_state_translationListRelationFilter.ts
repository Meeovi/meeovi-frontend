import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationWhereInput } from "../inputs/Country_state_translationWhereInput";

@TypeGraphQL.InputType("Country_state_translationListRelationFilter", {})
export class Country_state_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Country_state_translationWhereInput, {
    nullable: true
  })
  every?: Country_state_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationWhereInput, {
    nullable: true
  })
  some?: Country_state_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationWhereInput, {
    nullable: true
  })
  none?: Country_state_translationWhereInput | undefined;
}

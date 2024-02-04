import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationWhereInput } from "../inputs/Country_translationWhereInput";

@TypeGraphQL.InputType("Country_translationListRelationFilter", {})
export class Country_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Country_translationWhereInput, {
    nullable: true
  })
  every?: Country_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Country_translationWhereInput, {
    nullable: true
  })
  some?: Country_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Country_translationWhereInput, {
    nullable: true
  })
  none?: Country_translationWhereInput | undefined;
}

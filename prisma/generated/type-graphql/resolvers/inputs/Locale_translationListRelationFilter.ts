import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationWhereInput } from "../inputs/Locale_translationWhereInput";

@TypeGraphQL.InputType("Locale_translationListRelationFilter", {})
export class Locale_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Locale_translationWhereInput, {
    nullable: true
  })
  every?: Locale_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Locale_translationWhereInput, {
    nullable: true
  })
  some?: Locale_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Locale_translationWhereInput, {
    nullable: true
  })
  none?: Locale_translationWhereInput | undefined;
}

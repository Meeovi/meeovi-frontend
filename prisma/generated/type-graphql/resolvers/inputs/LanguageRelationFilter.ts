import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageRelationFilter", {})
export class LanguageRelationFilter {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  is?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  isNot?: LanguageWhereInput | undefined;
}

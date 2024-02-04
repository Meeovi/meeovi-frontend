import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageListRelationFilter", {})
export class LanguageListRelationFilter {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  every?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  some?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  none?: LanguageWhereInput | undefined;
}

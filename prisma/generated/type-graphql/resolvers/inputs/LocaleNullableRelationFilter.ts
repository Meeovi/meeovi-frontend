import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleWhereInput } from "../inputs/LocaleWhereInput";

@TypeGraphQL.InputType("LocaleNullableRelationFilter", {})
export class LocaleNullableRelationFilter {
  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  is?: LocaleWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  isNot?: LocaleWhereInput | undefined;
}

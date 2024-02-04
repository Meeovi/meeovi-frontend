import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_country_roundingWhereInput } from "../inputs/Currency_country_roundingWhereInput";

@TypeGraphQL.InputType("Currency_country_roundingListRelationFilter", {})
export class Currency_country_roundingListRelationFilter {
  @TypeGraphQL.Field(_type => Currency_country_roundingWhereInput, {
    nullable: true
  })
  every?: Currency_country_roundingWhereInput | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingWhereInput, {
    nullable: true
  })
  some?: Currency_country_roundingWhereInput | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingWhereInput, {
    nullable: true
  })
  none?: Currency_country_roundingWhereInput | undefined;
}

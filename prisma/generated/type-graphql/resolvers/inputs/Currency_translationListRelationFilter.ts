import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationWhereInput } from "../inputs/Currency_translationWhereInput";

@TypeGraphQL.InputType("Currency_translationListRelationFilter", {})
export class Currency_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Currency_translationWhereInput, {
    nullable: true
  })
  every?: Currency_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Currency_translationWhereInput, {
    nullable: true
  })
  some?: Currency_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Currency_translationWhereInput, {
    nullable: true
  })
  none?: Currency_translationWhereInput | undefined;
}

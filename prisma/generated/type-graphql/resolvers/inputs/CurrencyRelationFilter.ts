import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyRelationFilter", {})
export class CurrencyRelationFilter {
  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  is?: CurrencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  isNot?: CurrencyWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_country_roundingCreateManyCountryInput } from "../inputs/Currency_country_roundingCreateManyCountryInput";

@TypeGraphQL.InputType("Currency_country_roundingCreateManyCountryInputEnvelope", {})
export class Currency_country_roundingCreateManyCountryInputEnvelope {
  @TypeGraphQL.Field(_type => [Currency_country_roundingCreateManyCountryInput], {
    nullable: false
  })
  data!: Currency_country_roundingCreateManyCountryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

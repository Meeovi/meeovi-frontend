import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateManyCountryInput } from "../inputs/Country_stateCreateManyCountryInput";

@TypeGraphQL.InputType("Country_stateCreateManyCountryInputEnvelope", {})
export class Country_stateCreateManyCountryInputEnvelope {
  @TypeGraphQL.Field(_type => [Country_stateCreateManyCountryInput], {
    nullable: false
  })
  data!: Country_stateCreateManyCountryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

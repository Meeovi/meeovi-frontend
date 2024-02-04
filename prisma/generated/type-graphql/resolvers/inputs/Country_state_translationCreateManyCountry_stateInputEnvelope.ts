import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationCreateManyCountry_stateInput } from "../inputs/Country_state_translationCreateManyCountry_stateInput";

@TypeGraphQL.InputType("Country_state_translationCreateManyCountry_stateInputEnvelope", {})
export class Country_state_translationCreateManyCountry_stateInputEnvelope {
  @TypeGraphQL.Field(_type => [Country_state_translationCreateManyCountry_stateInput], {
    nullable: false
  })
  data!: Country_state_translationCreateManyCountry_stateInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

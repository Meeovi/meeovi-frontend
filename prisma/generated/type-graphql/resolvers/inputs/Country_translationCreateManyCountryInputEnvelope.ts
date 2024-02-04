import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationCreateManyCountryInput } from "../inputs/Country_translationCreateManyCountryInput";

@TypeGraphQL.InputType("Country_translationCreateManyCountryInputEnvelope", {})
export class Country_translationCreateManyCountryInputEnvelope {
  @TypeGraphQL.Field(_type => [Country_translationCreateManyCountryInput], {
    nullable: false
  })
  data!: Country_translationCreateManyCountryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

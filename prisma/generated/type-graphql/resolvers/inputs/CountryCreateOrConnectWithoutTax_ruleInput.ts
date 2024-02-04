import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutTax_ruleInput } from "../inputs/CountryCreateWithoutTax_ruleInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateOrConnectWithoutTax_ruleInput", {})
export class CountryCreateOrConnectWithoutTax_ruleInput {
  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: false
  })
  where!: CountryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutTax_ruleInput, {
    nullable: false
  })
  create!: CountryCreateWithoutTax_ruleInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutTax_ruleInput } from "../inputs/CountryCreateWithoutTax_ruleInput";
import { CountryUpdateWithoutTax_ruleInput } from "../inputs/CountryUpdateWithoutTax_ruleInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpsertWithoutTax_ruleInput", {})
export class CountryUpsertWithoutTax_ruleInput {
  @TypeGraphQL.Field(_type => CountryUpdateWithoutTax_ruleInput, {
    nullable: false
  })
  update!: CountryUpdateWithoutTax_ruleInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutTax_ruleInput, {
    nullable: false
  })
  create!: CountryCreateWithoutTax_ruleInput;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;
}

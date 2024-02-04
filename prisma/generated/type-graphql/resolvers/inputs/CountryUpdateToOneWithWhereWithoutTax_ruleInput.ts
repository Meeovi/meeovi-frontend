import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryUpdateWithoutTax_ruleInput } from "../inputs/CountryUpdateWithoutTax_ruleInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpdateToOneWithWhereWithoutTax_ruleInput", {})
export class CountryUpdateToOneWithWhereWithoutTax_ruleInput {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateWithoutTax_ruleInput, {
    nullable: false
  })
  data!: CountryUpdateWithoutTax_ruleInput;
}

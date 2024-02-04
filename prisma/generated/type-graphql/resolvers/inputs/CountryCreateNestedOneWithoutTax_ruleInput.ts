import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutTax_ruleInput } from "../inputs/CountryCreateOrConnectWithoutTax_ruleInput";
import { CountryCreateWithoutTax_ruleInput } from "../inputs/CountryCreateWithoutTax_ruleInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateNestedOneWithoutTax_ruleInput", {})
export class CountryCreateNestedOneWithoutTax_ruleInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutTax_ruleInput, {
    nullable: true
  })
  create?: CountryCreateWithoutTax_ruleInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutTax_ruleInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutTax_ruleInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutTax_ruleInput } from "../inputs/CountryCreateOrConnectWithoutTax_ruleInput";
import { CountryCreateWithoutTax_ruleInput } from "../inputs/CountryCreateWithoutTax_ruleInput";
import { CountryUpdateToOneWithWhereWithoutTax_ruleInput } from "../inputs/CountryUpdateToOneWithWhereWithoutTax_ruleInput";
import { CountryUpsertWithoutTax_ruleInput } from "../inputs/CountryUpsertWithoutTax_ruleInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryUpdateOneRequiredWithoutTax_ruleNestedInput", {})
export class CountryUpdateOneRequiredWithoutTax_ruleNestedInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutTax_ruleInput, {
    nullable: true
  })
  create?: CountryCreateWithoutTax_ruleInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutTax_ruleInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutTax_ruleInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpsertWithoutTax_ruleInput, {
    nullable: true
  })
  upsert?: CountryUpsertWithoutTax_ruleInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateToOneWithWhereWithoutTax_ruleInput, {
    nullable: true
  })
  update?: CountryUpdateToOneWithWhereWithoutTax_ruleInput | undefined;
}

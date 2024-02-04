import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutCountry_stateInput } from "../inputs/CountryCreateOrConnectWithoutCountry_stateInput";
import { CountryCreateWithoutCountry_stateInput } from "../inputs/CountryCreateWithoutCountry_stateInput";
import { CountryUpdateToOneWithWhereWithoutCountry_stateInput } from "../inputs/CountryUpdateToOneWithWhereWithoutCountry_stateInput";
import { CountryUpsertWithoutCountry_stateInput } from "../inputs/CountryUpsertWithoutCountry_stateInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryUpdateOneRequiredWithoutCountry_stateNestedInput", {})
export class CountryUpdateOneRequiredWithoutCountry_stateNestedInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutCountry_stateInput, {
    nullable: true
  })
  create?: CountryCreateWithoutCountry_stateInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutCountry_stateInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutCountry_stateInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpsertWithoutCountry_stateInput, {
    nullable: true
  })
  upsert?: CountryUpsertWithoutCountry_stateInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateToOneWithWhereWithoutCountry_stateInput, {
    nullable: true
  })
  update?: CountryUpdateToOneWithWhereWithoutCountry_stateInput | undefined;
}

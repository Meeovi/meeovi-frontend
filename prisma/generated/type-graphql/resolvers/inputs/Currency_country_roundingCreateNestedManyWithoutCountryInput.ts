import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_country_roundingCreateManyCountryInputEnvelope } from "../inputs/Currency_country_roundingCreateManyCountryInputEnvelope";
import { Currency_country_roundingCreateOrConnectWithoutCountryInput } from "../inputs/Currency_country_roundingCreateOrConnectWithoutCountryInput";
import { Currency_country_roundingCreateWithoutCountryInput } from "../inputs/Currency_country_roundingCreateWithoutCountryInput";
import { Currency_country_roundingWhereUniqueInput } from "../inputs/Currency_country_roundingWhereUniqueInput";

@TypeGraphQL.InputType("Currency_country_roundingCreateNestedManyWithoutCountryInput", {})
export class Currency_country_roundingCreateNestedManyWithoutCountryInput {
  @TypeGraphQL.Field(_type => [Currency_country_roundingCreateWithoutCountryInput], {
    nullable: true
  })
  create?: Currency_country_roundingCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: Currency_country_roundingCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: Currency_country_roundingCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingWhereUniqueInput], {
    nullable: true
  })
  connect?: Currency_country_roundingWhereUniqueInput[] | undefined;
}

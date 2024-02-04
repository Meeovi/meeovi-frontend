import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_country_roundingCreateManyCountryInputEnvelope } from "../inputs/Currency_country_roundingCreateManyCountryInputEnvelope";
import { Currency_country_roundingCreateOrConnectWithoutCountryInput } from "../inputs/Currency_country_roundingCreateOrConnectWithoutCountryInput";
import { Currency_country_roundingCreateWithoutCountryInput } from "../inputs/Currency_country_roundingCreateWithoutCountryInput";
import { Currency_country_roundingScalarWhereInput } from "../inputs/Currency_country_roundingScalarWhereInput";
import { Currency_country_roundingUpdateManyWithWhereWithoutCountryInput } from "../inputs/Currency_country_roundingUpdateManyWithWhereWithoutCountryInput";
import { Currency_country_roundingUpdateWithWhereUniqueWithoutCountryInput } from "../inputs/Currency_country_roundingUpdateWithWhereUniqueWithoutCountryInput";
import { Currency_country_roundingUpsertWithWhereUniqueWithoutCountryInput } from "../inputs/Currency_country_roundingUpsertWithWhereUniqueWithoutCountryInput";
import { Currency_country_roundingWhereUniqueInput } from "../inputs/Currency_country_roundingWhereUniqueInput";

@TypeGraphQL.InputType("Currency_country_roundingUpdateManyWithoutCountryNestedInput", {})
export class Currency_country_roundingUpdateManyWithoutCountryNestedInput {
  @TypeGraphQL.Field(_type => [Currency_country_roundingCreateWithoutCountryInput], {
    nullable: true
  })
  create?: Currency_country_roundingCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: Currency_country_roundingCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingUpsertWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  upsert?: Currency_country_roundingUpsertWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: Currency_country_roundingCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingWhereUniqueInput], {
    nullable: true
  })
  set?: Currency_country_roundingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Currency_country_roundingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingWhereUniqueInput], {
    nullable: true
  })
  delete?: Currency_country_roundingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingWhereUniqueInput], {
    nullable: true
  })
  connect?: Currency_country_roundingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingUpdateWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  update?: Currency_country_roundingUpdateWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingUpdateManyWithWhereWithoutCountryInput], {
    nullable: true
  })
  updateMany?: Currency_country_roundingUpdateManyWithWhereWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Currency_country_roundingScalarWhereInput[] | undefined;
}

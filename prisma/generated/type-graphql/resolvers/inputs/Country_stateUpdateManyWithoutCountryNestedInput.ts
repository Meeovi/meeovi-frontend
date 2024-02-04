import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateManyCountryInputEnvelope } from "../inputs/Country_stateCreateManyCountryInputEnvelope";
import { Country_stateCreateOrConnectWithoutCountryInput } from "../inputs/Country_stateCreateOrConnectWithoutCountryInput";
import { Country_stateCreateWithoutCountryInput } from "../inputs/Country_stateCreateWithoutCountryInput";
import { Country_stateScalarWhereInput } from "../inputs/Country_stateScalarWhereInput";
import { Country_stateUpdateManyWithWhereWithoutCountryInput } from "../inputs/Country_stateUpdateManyWithWhereWithoutCountryInput";
import { Country_stateUpdateWithWhereUniqueWithoutCountryInput } from "../inputs/Country_stateUpdateWithWhereUniqueWithoutCountryInput";
import { Country_stateUpsertWithWhereUniqueWithoutCountryInput } from "../inputs/Country_stateUpsertWithWhereUniqueWithoutCountryInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateUpdateManyWithoutCountryNestedInput", {})
export class Country_stateUpdateManyWithoutCountryNestedInput {
  @TypeGraphQL.Field(_type => [Country_stateCreateWithoutCountryInput], {
    nullable: true
  })
  create?: Country_stateCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_stateCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: Country_stateCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_stateUpsertWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  upsert?: Country_stateUpsertWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_stateCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: Country_stateCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Country_stateWhereUniqueInput], {
    nullable: true
  })
  set?: Country_stateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_stateWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Country_stateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_stateWhereUniqueInput], {
    nullable: true
  })
  delete?: Country_stateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_stateWhereUniqueInput], {
    nullable: true
  })
  connect?: Country_stateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_stateUpdateWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  update?: Country_stateUpdateWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_stateUpdateManyWithWhereWithoutCountryInput], {
    nullable: true
  })
  updateMany?: Country_stateUpdateManyWithWhereWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_stateScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Country_stateScalarWhereInput[] | undefined;
}

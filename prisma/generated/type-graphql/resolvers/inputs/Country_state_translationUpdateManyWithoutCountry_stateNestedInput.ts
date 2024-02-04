import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationCreateManyCountry_stateInputEnvelope } from "../inputs/Country_state_translationCreateManyCountry_stateInputEnvelope";
import { Country_state_translationCreateOrConnectWithoutCountry_stateInput } from "../inputs/Country_state_translationCreateOrConnectWithoutCountry_stateInput";
import { Country_state_translationCreateWithoutCountry_stateInput } from "../inputs/Country_state_translationCreateWithoutCountry_stateInput";
import { Country_state_translationScalarWhereInput } from "../inputs/Country_state_translationScalarWhereInput";
import { Country_state_translationUpdateManyWithWhereWithoutCountry_stateInput } from "../inputs/Country_state_translationUpdateManyWithWhereWithoutCountry_stateInput";
import { Country_state_translationUpdateWithWhereUniqueWithoutCountry_stateInput } from "../inputs/Country_state_translationUpdateWithWhereUniqueWithoutCountry_stateInput";
import { Country_state_translationUpsertWithWhereUniqueWithoutCountry_stateInput } from "../inputs/Country_state_translationUpsertWithWhereUniqueWithoutCountry_stateInput";
import { Country_state_translationWhereUniqueInput } from "../inputs/Country_state_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_state_translationUpdateManyWithoutCountry_stateNestedInput", {})
export class Country_state_translationUpdateManyWithoutCountry_stateNestedInput {
  @TypeGraphQL.Field(_type => [Country_state_translationCreateWithoutCountry_stateInput], {
    nullable: true
  })
  create?: Country_state_translationCreateWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationCreateOrConnectWithoutCountry_stateInput], {
    nullable: true
  })
  connectOrCreate?: Country_state_translationCreateOrConnectWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationUpsertWithWhereUniqueWithoutCountry_stateInput], {
    nullable: true
  })
  upsert?: Country_state_translationUpsertWithWhereUniqueWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationCreateManyCountry_stateInputEnvelope, {
    nullable: true
  })
  createMany?: Country_state_translationCreateManyCountry_stateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Country_state_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Country_state_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Country_state_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Country_state_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationUpdateWithWhereUniqueWithoutCountry_stateInput], {
    nullable: true
  })
  update?: Country_state_translationUpdateWithWhereUniqueWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationUpdateManyWithWhereWithoutCountry_stateInput], {
    nullable: true
  })
  updateMany?: Country_state_translationUpdateManyWithWhereWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Country_state_translationScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleCreateManyIntegrationInputEnvelope } from "../inputs/Integration_roleCreateManyIntegrationInputEnvelope";
import { Integration_roleCreateOrConnectWithoutIntegrationInput } from "../inputs/Integration_roleCreateOrConnectWithoutIntegrationInput";
import { Integration_roleCreateWithoutIntegrationInput } from "../inputs/Integration_roleCreateWithoutIntegrationInput";
import { Integration_roleScalarWhereInput } from "../inputs/Integration_roleScalarWhereInput";
import { Integration_roleUpdateManyWithWhereWithoutIntegrationInput } from "../inputs/Integration_roleUpdateManyWithWhereWithoutIntegrationInput";
import { Integration_roleUpdateWithWhereUniqueWithoutIntegrationInput } from "../inputs/Integration_roleUpdateWithWhereUniqueWithoutIntegrationInput";
import { Integration_roleUpsertWithWhereUniqueWithoutIntegrationInput } from "../inputs/Integration_roleUpsertWithWhereUniqueWithoutIntegrationInput";
import { Integration_roleWhereUniqueInput } from "../inputs/Integration_roleWhereUniqueInput";

@TypeGraphQL.InputType("Integration_roleUpdateManyWithoutIntegrationNestedInput", {})
export class Integration_roleUpdateManyWithoutIntegrationNestedInput {
  @TypeGraphQL.Field(_type => [Integration_roleCreateWithoutIntegrationInput], {
    nullable: true
  })
  create?: Integration_roleCreateWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleCreateOrConnectWithoutIntegrationInput], {
    nullable: true
  })
  connectOrCreate?: Integration_roleCreateOrConnectWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleUpsertWithWhereUniqueWithoutIntegrationInput], {
    nullable: true
  })
  upsert?: Integration_roleUpsertWithWhereUniqueWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => Integration_roleCreateManyIntegrationInputEnvelope, {
    nullable: true
  })
  createMany?: Integration_roleCreateManyIntegrationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereUniqueInput], {
    nullable: true
  })
  set?: Integration_roleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Integration_roleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereUniqueInput], {
    nullable: true
  })
  delete?: Integration_roleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereUniqueInput], {
    nullable: true
  })
  connect?: Integration_roleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleUpdateWithWhereUniqueWithoutIntegrationInput], {
    nullable: true
  })
  update?: Integration_roleUpdateWithWhereUniqueWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleUpdateManyWithWhereWithoutIntegrationInput], {
    nullable: true
  })
  updateMany?: Integration_roleUpdateManyWithWhereWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Integration_roleScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateManyIntegrationInputEnvelope } from "../inputs/AppCreateManyIntegrationInputEnvelope";
import { AppCreateOrConnectWithoutIntegrationInput } from "../inputs/AppCreateOrConnectWithoutIntegrationInput";
import { AppCreateWithoutIntegrationInput } from "../inputs/AppCreateWithoutIntegrationInput";
import { AppScalarWhereInput } from "../inputs/AppScalarWhereInput";
import { AppUpdateManyWithWhereWithoutIntegrationInput } from "../inputs/AppUpdateManyWithWhereWithoutIntegrationInput";
import { AppUpdateWithWhereUniqueWithoutIntegrationInput } from "../inputs/AppUpdateWithWhereUniqueWithoutIntegrationInput";
import { AppUpsertWithWhereUniqueWithoutIntegrationInput } from "../inputs/AppUpsertWithWhereUniqueWithoutIntegrationInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateManyWithoutIntegrationNestedInput", {})
export class AppUpdateManyWithoutIntegrationNestedInput {
  @TypeGraphQL.Field(_type => [AppCreateWithoutIntegrationInput], {
    nullable: true
  })
  create?: AppCreateWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppCreateOrConnectWithoutIntegrationInput], {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppUpsertWithWhereUniqueWithoutIntegrationInput], {
    nullable: true
  })
  upsert?: AppUpsertWithWhereUniqueWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => AppCreateManyIntegrationInputEnvelope, {
    nullable: true
  })
  createMany?: AppCreateManyIntegrationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  set?: AppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  delete?: AppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  connect?: AppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppUpdateWithWhereUniqueWithoutIntegrationInput], {
    nullable: true
  })
  update?: AppUpdateWithWhereUniqueWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppUpdateManyWithWhereWithoutIntegrationInput], {
    nullable: true
  })
  updateMany?: AppUpdateManyWithWhereWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AppScalarWhereInput[] | undefined;
}

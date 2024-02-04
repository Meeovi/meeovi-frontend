import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetCreateManyAppInputEnvelope } from "../inputs/App_administration_snippetCreateManyAppInputEnvelope";
import { App_administration_snippetCreateOrConnectWithoutAppInput } from "../inputs/App_administration_snippetCreateOrConnectWithoutAppInput";
import { App_administration_snippetCreateWithoutAppInput } from "../inputs/App_administration_snippetCreateWithoutAppInput";
import { App_administration_snippetScalarWhereInput } from "../inputs/App_administration_snippetScalarWhereInput";
import { App_administration_snippetUpdateManyWithWhereWithoutAppInput } from "../inputs/App_administration_snippetUpdateManyWithWhereWithoutAppInput";
import { App_administration_snippetUpdateWithWhereUniqueWithoutAppInput } from "../inputs/App_administration_snippetUpdateWithWhereUniqueWithoutAppInput";
import { App_administration_snippetUpsertWithWhereUniqueWithoutAppInput } from "../inputs/App_administration_snippetUpsertWithWhereUniqueWithoutAppInput";
import { App_administration_snippetWhereUniqueInput } from "../inputs/App_administration_snippetWhereUniqueInput";

@TypeGraphQL.InputType("App_administration_snippetUpdateManyWithoutAppNestedInput", {})
export class App_administration_snippetUpdateManyWithoutAppNestedInput {
  @TypeGraphQL.Field(_type => [App_administration_snippetCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_administration_snippetCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_administration_snippetCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetUpsertWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  upsert?: App_administration_snippetUpsertWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_administration_snippetCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetWhereUniqueInput], {
    nullable: true
  })
  set?: App_administration_snippetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_administration_snippetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetWhereUniqueInput], {
    nullable: true
  })
  delete?: App_administration_snippetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetWhereUniqueInput], {
    nullable: true
  })
  connect?: App_administration_snippetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetUpdateWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  update?: App_administration_snippetUpdateWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetUpdateManyWithWhereWithoutAppInput], {
    nullable: true
  })
  updateMany?: App_administration_snippetUpdateManyWithWhereWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_administration_snippetScalarWhereInput[] | undefined;
}

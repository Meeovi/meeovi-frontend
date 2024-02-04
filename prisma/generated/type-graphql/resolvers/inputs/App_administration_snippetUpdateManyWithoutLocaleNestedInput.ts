import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetCreateManyLocaleInputEnvelope } from "../inputs/App_administration_snippetCreateManyLocaleInputEnvelope";
import { App_administration_snippetCreateOrConnectWithoutLocaleInput } from "../inputs/App_administration_snippetCreateOrConnectWithoutLocaleInput";
import { App_administration_snippetCreateWithoutLocaleInput } from "../inputs/App_administration_snippetCreateWithoutLocaleInput";
import { App_administration_snippetScalarWhereInput } from "../inputs/App_administration_snippetScalarWhereInput";
import { App_administration_snippetUpdateManyWithWhereWithoutLocaleInput } from "../inputs/App_administration_snippetUpdateManyWithWhereWithoutLocaleInput";
import { App_administration_snippetUpdateWithWhereUniqueWithoutLocaleInput } from "../inputs/App_administration_snippetUpdateWithWhereUniqueWithoutLocaleInput";
import { App_administration_snippetUpsertWithWhereUniqueWithoutLocaleInput } from "../inputs/App_administration_snippetUpsertWithWhereUniqueWithoutLocaleInput";
import { App_administration_snippetWhereUniqueInput } from "../inputs/App_administration_snippetWhereUniqueInput";

@TypeGraphQL.InputType("App_administration_snippetUpdateManyWithoutLocaleNestedInput", {})
export class App_administration_snippetUpdateManyWithoutLocaleNestedInput {
  @TypeGraphQL.Field(_type => [App_administration_snippetCreateWithoutLocaleInput], {
    nullable: true
  })
  create?: App_administration_snippetCreateWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetCreateOrConnectWithoutLocaleInput], {
    nullable: true
  })
  connectOrCreate?: App_administration_snippetCreateOrConnectWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetUpsertWithWhereUniqueWithoutLocaleInput], {
    nullable: true
  })
  upsert?: App_administration_snippetUpsertWithWhereUniqueWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetCreateManyLocaleInputEnvelope, {
    nullable: true
  })
  createMany?: App_administration_snippetCreateManyLocaleInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [App_administration_snippetUpdateWithWhereUniqueWithoutLocaleInput], {
    nullable: true
  })
  update?: App_administration_snippetUpdateWithWhereUniqueWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetUpdateManyWithWhereWithoutLocaleInput], {
    nullable: true
  })
  updateMany?: App_administration_snippetUpdateManyWithWhereWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_administration_snippetScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_blockCreateManyAppInputEnvelope } from "../inputs/App_cms_blockCreateManyAppInputEnvelope";
import { App_cms_blockCreateOrConnectWithoutAppInput } from "../inputs/App_cms_blockCreateOrConnectWithoutAppInput";
import { App_cms_blockCreateWithoutAppInput } from "../inputs/App_cms_blockCreateWithoutAppInput";
import { App_cms_blockScalarWhereInput } from "../inputs/App_cms_blockScalarWhereInput";
import { App_cms_blockUpdateManyWithWhereWithoutAppInput } from "../inputs/App_cms_blockUpdateManyWithWhereWithoutAppInput";
import { App_cms_blockUpdateWithWhereUniqueWithoutAppInput } from "../inputs/App_cms_blockUpdateWithWhereUniqueWithoutAppInput";
import { App_cms_blockUpsertWithWhereUniqueWithoutAppInput } from "../inputs/App_cms_blockUpsertWithWhereUniqueWithoutAppInput";
import { App_cms_blockWhereUniqueInput } from "../inputs/App_cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("App_cms_blockUpdateManyWithoutAppNestedInput", {})
export class App_cms_blockUpdateManyWithoutAppNestedInput {
  @TypeGraphQL.Field(_type => [App_cms_blockCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_cms_blockCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_cms_blockCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockUpsertWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  upsert?: App_cms_blockUpsertWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_cms_blockCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockWhereUniqueInput], {
    nullable: true
  })
  set?: App_cms_blockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_cms_blockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockWhereUniqueInput], {
    nullable: true
  })
  delete?: App_cms_blockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockWhereUniqueInput], {
    nullable: true
  })
  connect?: App_cms_blockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockUpdateWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  update?: App_cms_blockUpdateWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockUpdateManyWithWhereWithoutAppInput], {
    nullable: true
  })
  updateMany?: App_cms_blockUpdateManyWithWhereWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_cms_blockScalarWhereInput[] | undefined;
}

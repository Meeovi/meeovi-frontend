import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_templateCreateManyAppInputEnvelope } from "../inputs/App_templateCreateManyAppInputEnvelope";
import { App_templateCreateOrConnectWithoutAppInput } from "../inputs/App_templateCreateOrConnectWithoutAppInput";
import { App_templateCreateWithoutAppInput } from "../inputs/App_templateCreateWithoutAppInput";
import { App_templateScalarWhereInput } from "../inputs/App_templateScalarWhereInput";
import { App_templateUpdateManyWithWhereWithoutAppInput } from "../inputs/App_templateUpdateManyWithWhereWithoutAppInput";
import { App_templateUpdateWithWhereUniqueWithoutAppInput } from "../inputs/App_templateUpdateWithWhereUniqueWithoutAppInput";
import { App_templateUpsertWithWhereUniqueWithoutAppInput } from "../inputs/App_templateUpsertWithWhereUniqueWithoutAppInput";
import { App_templateWhereUniqueInput } from "../inputs/App_templateWhereUniqueInput";

@TypeGraphQL.InputType("App_templateUpdateManyWithoutAppNestedInput", {})
export class App_templateUpdateManyWithoutAppNestedInput {
  @TypeGraphQL.Field(_type => [App_templateCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_templateCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_templateCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_templateCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_templateUpsertWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  upsert?: App_templateUpsertWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_templateCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_templateCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_templateWhereUniqueInput], {
    nullable: true
  })
  set?: App_templateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_templateWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_templateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_templateWhereUniqueInput], {
    nullable: true
  })
  delete?: App_templateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_templateWhereUniqueInput], {
    nullable: true
  })
  connect?: App_templateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_templateUpdateWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  update?: App_templateUpdateWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_templateUpdateManyWithWhereWithoutAppInput], {
    nullable: true
  })
  updateMany?: App_templateUpdateManyWithWhereWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_templateScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_templateScalarWhereInput[] | undefined;
}

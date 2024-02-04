import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationCreateManyAppInputEnvelope } from "../inputs/App_translationCreateManyAppInputEnvelope";
import { App_translationCreateOrConnectWithoutAppInput } from "../inputs/App_translationCreateOrConnectWithoutAppInput";
import { App_translationCreateWithoutAppInput } from "../inputs/App_translationCreateWithoutAppInput";
import { App_translationScalarWhereInput } from "../inputs/App_translationScalarWhereInput";
import { App_translationUpdateManyWithWhereWithoutAppInput } from "../inputs/App_translationUpdateManyWithWhereWithoutAppInput";
import { App_translationUpdateWithWhereUniqueWithoutAppInput } from "../inputs/App_translationUpdateWithWhereUniqueWithoutAppInput";
import { App_translationUpsertWithWhereUniqueWithoutAppInput } from "../inputs/App_translationUpsertWithWhereUniqueWithoutAppInput";
import { App_translationWhereUniqueInput } from "../inputs/App_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_translationUpdateManyWithoutAppNestedInput", {})
export class App_translationUpdateManyWithoutAppNestedInput {
  @TypeGraphQL.Field(_type => [App_translationCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_translationCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_translationCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationUpsertWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  upsert?: App_translationUpsertWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_translationCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_translationCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereUniqueInput], {
    nullable: true
  })
  set?: App_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: App_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationUpdateWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  update?: App_translationUpdateWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationUpdateManyWithWhereWithoutAppInput], {
    nullable: true
  })
  updateMany?: App_translationUpdateManyWithWhereWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_translationScalarWhereInput[] | undefined;
}

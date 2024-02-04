import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationCreateManyPluginInputEnvelope } from "../inputs/Plugin_translationCreateManyPluginInputEnvelope";
import { Plugin_translationCreateOrConnectWithoutPluginInput } from "../inputs/Plugin_translationCreateOrConnectWithoutPluginInput";
import { Plugin_translationCreateWithoutPluginInput } from "../inputs/Plugin_translationCreateWithoutPluginInput";
import { Plugin_translationScalarWhereInput } from "../inputs/Plugin_translationScalarWhereInput";
import { Plugin_translationUpdateManyWithWhereWithoutPluginInput } from "../inputs/Plugin_translationUpdateManyWithWhereWithoutPluginInput";
import { Plugin_translationUpdateWithWhereUniqueWithoutPluginInput } from "../inputs/Plugin_translationUpdateWithWhereUniqueWithoutPluginInput";
import { Plugin_translationUpsertWithWhereUniqueWithoutPluginInput } from "../inputs/Plugin_translationUpsertWithWhereUniqueWithoutPluginInput";
import { Plugin_translationWhereUniqueInput } from "../inputs/Plugin_translationWhereUniqueInput";

@TypeGraphQL.InputType("Plugin_translationUpdateManyWithoutPluginNestedInput", {})
export class Plugin_translationUpdateManyWithoutPluginNestedInput {
  @TypeGraphQL.Field(_type => [Plugin_translationCreateWithoutPluginInput], {
    nullable: true
  })
  create?: Plugin_translationCreateWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationCreateOrConnectWithoutPluginInput], {
    nullable: true
  })
  connectOrCreate?: Plugin_translationCreateOrConnectWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationUpsertWithWhereUniqueWithoutPluginInput], {
    nullable: true
  })
  upsert?: Plugin_translationUpsertWithWhereUniqueWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationCreateManyPluginInputEnvelope, {
    nullable: true
  })
  createMany?: Plugin_translationCreateManyPluginInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Plugin_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Plugin_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Plugin_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Plugin_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationUpdateWithWhereUniqueWithoutPluginInput], {
    nullable: true
  })
  update?: Plugin_translationUpdateWithWhereUniqueWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationUpdateManyWithWhereWithoutPluginInput], {
    nullable: true
  })
  updateMany?: Plugin_translationUpdateManyWithWhereWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Plugin_translationScalarWhereInput[] | undefined;
}

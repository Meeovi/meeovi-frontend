import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationCreateManyPluginInputEnvelope } from "../inputs/Plugin_translationCreateManyPluginInputEnvelope";
import { Plugin_translationCreateOrConnectWithoutPluginInput } from "../inputs/Plugin_translationCreateOrConnectWithoutPluginInput";
import { Plugin_translationCreateWithoutPluginInput } from "../inputs/Plugin_translationCreateWithoutPluginInput";
import { Plugin_translationWhereUniqueInput } from "../inputs/Plugin_translationWhereUniqueInput";

@TypeGraphQL.InputType("Plugin_translationCreateNestedManyWithoutPluginInput", {})
export class Plugin_translationCreateNestedManyWithoutPluginInput {
  @TypeGraphQL.Field(_type => [Plugin_translationCreateWithoutPluginInput], {
    nullable: true
  })
  create?: Plugin_translationCreateWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationCreateOrConnectWithoutPluginInput], {
    nullable: true
  })
  connectOrCreate?: Plugin_translationCreateOrConnectWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationCreateManyPluginInputEnvelope, {
    nullable: true
  })
  createMany?: Plugin_translationCreateManyPluginInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Plugin_translationWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutProduct_configurator_settingInput } from "../inputs/MediaCreateOrConnectWithoutProduct_configurator_settingInput";
import { MediaCreateWithoutProduct_configurator_settingInput } from "../inputs/MediaCreateWithoutProduct_configurator_settingInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutProduct_configurator_settingInput", {})
export class MediaCreateNestedOneWithoutProduct_configurator_settingInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_configurator_settingInput, {
    nullable: true
  })
  create?: MediaCreateWithoutProduct_configurator_settingInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutProduct_configurator_settingInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutProduct_configurator_settingInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}

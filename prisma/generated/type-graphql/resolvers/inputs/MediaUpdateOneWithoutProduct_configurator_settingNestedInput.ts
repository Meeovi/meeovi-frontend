import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutProduct_configurator_settingInput } from "../inputs/MediaCreateOrConnectWithoutProduct_configurator_settingInput";
import { MediaCreateWithoutProduct_configurator_settingInput } from "../inputs/MediaCreateWithoutProduct_configurator_settingInput";
import { MediaUpdateToOneWithWhereWithoutProduct_configurator_settingInput } from "../inputs/MediaUpdateToOneWithWhereWithoutProduct_configurator_settingInput";
import { MediaUpsertWithoutProduct_configurator_settingInput } from "../inputs/MediaUpsertWithoutProduct_configurator_settingInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutProduct_configurator_settingNestedInput", {})
export class MediaUpdateOneWithoutProduct_configurator_settingNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_configurator_settingInput, {
    nullable: true
  })
  create?: MediaCreateWithoutProduct_configurator_settingInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutProduct_configurator_settingInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutProduct_configurator_settingInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutProduct_configurator_settingInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutProduct_configurator_settingInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  disconnect?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  delete?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutProduct_configurator_settingInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutProduct_configurator_settingInput | undefined;
}

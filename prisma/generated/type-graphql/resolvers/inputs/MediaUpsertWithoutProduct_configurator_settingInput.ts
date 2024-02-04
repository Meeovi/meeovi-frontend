import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutProduct_configurator_settingInput } from "../inputs/MediaCreateWithoutProduct_configurator_settingInput";
import { MediaUpdateWithoutProduct_configurator_settingInput } from "../inputs/MediaUpdateWithoutProduct_configurator_settingInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutProduct_configurator_settingInput", {})
export class MediaUpsertWithoutProduct_configurator_settingInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutProduct_configurator_settingInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutProduct_configurator_settingInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_configurator_settingInput, {
    nullable: false
  })
  create!: MediaCreateWithoutProduct_configurator_settingInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}

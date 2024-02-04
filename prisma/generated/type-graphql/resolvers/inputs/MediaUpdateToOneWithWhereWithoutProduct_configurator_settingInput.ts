import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutProduct_configurator_settingInput } from "../inputs/MediaUpdateWithoutProduct_configurator_settingInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutProduct_configurator_settingInput", {})
export class MediaUpdateToOneWithWhereWithoutProduct_configurator_settingInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutProduct_configurator_settingInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutProduct_configurator_settingInput;
}

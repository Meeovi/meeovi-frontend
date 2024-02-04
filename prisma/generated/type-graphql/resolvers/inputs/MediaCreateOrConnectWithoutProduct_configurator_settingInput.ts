import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutProduct_configurator_settingInput } from "../inputs/MediaCreateWithoutProduct_configurator_settingInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutProduct_configurator_settingInput", {})
export class MediaCreateOrConnectWithoutProduct_configurator_settingInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_configurator_settingInput, {
    nullable: false
  })
  create!: MediaCreateWithoutProduct_configurator_settingInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutDocument_base_configInput } from "../inputs/MediaCreateWithoutDocument_base_configInput";
import { MediaUpdateWithoutDocument_base_configInput } from "../inputs/MediaUpdateWithoutDocument_base_configInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutDocument_base_configInput", {})
export class MediaUpsertWithoutDocument_base_configInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutDocument_base_configInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutDocument_base_configInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutDocument_base_configInput, {
    nullable: false
  })
  create!: MediaCreateWithoutDocument_base_configInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}

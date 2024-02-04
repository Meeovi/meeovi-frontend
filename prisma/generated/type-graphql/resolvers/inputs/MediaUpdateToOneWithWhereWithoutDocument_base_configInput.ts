import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutDocument_base_configInput } from "../inputs/MediaUpdateWithoutDocument_base_configInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutDocument_base_configInput", {})
export class MediaUpdateToOneWithWhereWithoutDocument_base_configInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutDocument_base_configInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutDocument_base_configInput;
}

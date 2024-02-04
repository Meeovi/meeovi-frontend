import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutDocument_base_configInput } from "../inputs/MediaCreateWithoutDocument_base_configInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutDocument_base_configInput", {})
export class MediaCreateOrConnectWithoutDocument_base_configInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutDocument_base_configInput, {
    nullable: false
  })
  create!: MediaCreateWithoutDocument_base_configInput;
}

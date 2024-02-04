import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutDocument_base_configInput } from "../inputs/MediaCreateOrConnectWithoutDocument_base_configInput";
import { MediaCreateWithoutDocument_base_configInput } from "../inputs/MediaCreateWithoutDocument_base_configInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutDocument_base_configInput", {})
export class MediaCreateNestedOneWithoutDocument_base_configInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutDocument_base_configInput, {
    nullable: true
  })
  create?: MediaCreateWithoutDocument_base_configInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutDocument_base_configInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutDocument_base_configInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}

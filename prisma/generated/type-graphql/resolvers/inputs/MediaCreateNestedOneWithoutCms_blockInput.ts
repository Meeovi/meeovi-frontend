import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutCms_blockInput } from "../inputs/MediaCreateOrConnectWithoutCms_blockInput";
import { MediaCreateWithoutCms_blockInput } from "../inputs/MediaCreateWithoutCms_blockInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutCms_blockInput", {})
export class MediaCreateNestedOneWithoutCms_blockInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutCms_blockInput, {
    nullable: true
  })
  create?: MediaCreateWithoutCms_blockInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutCms_blockInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutCms_blockInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}

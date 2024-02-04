import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutCms_blockInput } from "../inputs/MediaCreateOrConnectWithoutCms_blockInput";
import { MediaCreateWithoutCms_blockInput } from "../inputs/MediaCreateWithoutCms_blockInput";
import { MediaUpdateToOneWithWhereWithoutCms_blockInput } from "../inputs/MediaUpdateToOneWithWhereWithoutCms_blockInput";
import { MediaUpsertWithoutCms_blockInput } from "../inputs/MediaUpsertWithoutCms_blockInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutCms_blockNestedInput", {})
export class MediaUpdateOneWithoutCms_blockNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutCms_blockInput, {
    nullable: true
  })
  create?: MediaCreateWithoutCms_blockInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutCms_blockInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutCms_blockInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutCms_blockInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutCms_blockInput | undefined;

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

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutCms_blockInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutCms_blockInput | undefined;
}

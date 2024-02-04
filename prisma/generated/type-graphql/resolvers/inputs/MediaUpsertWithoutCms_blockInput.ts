import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutCms_blockInput } from "../inputs/MediaCreateWithoutCms_blockInput";
import { MediaUpdateWithoutCms_blockInput } from "../inputs/MediaUpdateWithoutCms_blockInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutCms_blockInput", {})
export class MediaUpsertWithoutCms_blockInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutCms_blockInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutCms_blockInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutCms_blockInput, {
    nullable: false
  })
  create!: MediaCreateWithoutCms_blockInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}

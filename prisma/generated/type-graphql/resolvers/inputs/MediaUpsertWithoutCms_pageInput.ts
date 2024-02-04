import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutCms_pageInput } from "../inputs/MediaCreateWithoutCms_pageInput";
import { MediaUpdateWithoutCms_pageInput } from "../inputs/MediaUpdateWithoutCms_pageInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutCms_pageInput", {})
export class MediaUpsertWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutCms_pageInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutCms_pageInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutCms_pageInput, {
    nullable: false
  })
  create!: MediaCreateWithoutCms_pageInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}

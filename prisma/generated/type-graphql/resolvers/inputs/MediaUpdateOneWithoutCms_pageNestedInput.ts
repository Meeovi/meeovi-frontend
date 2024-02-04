import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutCms_pageInput } from "../inputs/MediaCreateOrConnectWithoutCms_pageInput";
import { MediaCreateWithoutCms_pageInput } from "../inputs/MediaCreateWithoutCms_pageInput";
import { MediaUpdateToOneWithWhereWithoutCms_pageInput } from "../inputs/MediaUpdateToOneWithWhereWithoutCms_pageInput";
import { MediaUpsertWithoutCms_pageInput } from "../inputs/MediaUpsertWithoutCms_pageInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutCms_pageNestedInput", {})
export class MediaUpdateOneWithoutCms_pageNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutCms_pageInput, {
    nullable: true
  })
  create?: MediaCreateWithoutCms_pageInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutCms_pageInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutCms_pageInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutCms_pageInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutCms_pageInput | undefined;

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

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutCms_pageInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutCms_pageInput | undefined;
}

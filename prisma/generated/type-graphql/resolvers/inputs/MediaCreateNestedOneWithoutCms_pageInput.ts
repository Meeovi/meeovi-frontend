import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutCms_pageInput } from "../inputs/MediaCreateOrConnectWithoutCms_pageInput";
import { MediaCreateWithoutCms_pageInput } from "../inputs/MediaCreateWithoutCms_pageInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutCms_pageInput", {})
export class MediaCreateNestedOneWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutCms_pageInput, {
    nullable: true
  })
  create?: MediaCreateWithoutCms_pageInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutCms_pageInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutCms_pageInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}

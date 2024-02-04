import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutCms_pageInput } from "../inputs/MediaUpdateWithoutCms_pageInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutCms_pageInput", {})
export class MediaUpdateToOneWithWhereWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutCms_pageInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutCms_pageInput;
}

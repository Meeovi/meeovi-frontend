import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutCms_blockInput } from "../inputs/MediaUpdateWithoutCms_blockInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutCms_blockInput", {})
export class MediaUpdateToOneWithWhereWithoutCms_blockInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutCms_blockInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutCms_blockInput;
}

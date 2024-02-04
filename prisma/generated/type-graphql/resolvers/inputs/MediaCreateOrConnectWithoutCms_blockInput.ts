import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutCms_blockInput } from "../inputs/MediaCreateWithoutCms_blockInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutCms_blockInput", {})
export class MediaCreateOrConnectWithoutCms_blockInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutCms_blockInput, {
    nullable: false
  })
  create!: MediaCreateWithoutCms_blockInput;
}
